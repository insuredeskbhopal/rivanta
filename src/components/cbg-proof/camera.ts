import { plantFraming, plantLabels, plantOrder, type PlantId } from "./registration";

const WIDTH = 1692, HEIGHT = 930;
export const SILICON_STOP = 1;
export const CBG_STOP = 2;
export const SAF_STOP = 3;
export const ENERGY_STOP = 4;
export const JOURNEY_STOPS = [0, SILICON_STOP, CBG_STOP, SAF_STOP, ENERGY_STOP] as const;
export const journeyChapters = ["overview", ...plantOrder] as const;
type Pose = { x: number; y: number; scale: number };
type Plate = Pose & { opacity: number; copy: number };
const mix = (a: number, b: number, amount: number) => a + (b - a) * amount;
const mixPose = (from: Pose, to: Pose, amount: number): Pose => ({
  x: mix(from.x, to.x, amount), y: mix(from.y, to.y, amount), scale: mix(from.scale, to.scale, amount),
});

export function smoothRange(start: number, end: number, progress: number) {
  const v = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return v * v * v * (v * (v * 6 - 15) + 10);
}

function bounded(width: number, height: number, imageWidth: number, imageHeight: number, pose: Pose): Pose {
  return { ...pose, x: Math.min(0, Math.max(width - imageWidth * pose.scale, pose.x)), y: Math.min(0, Math.max(height - imageHeight * pose.scale, pose.y)) };
}

function plantPose(id: PlantId, width: number, height: number, overscan = 0) {
  const image = plantFraming[id];
  const fitScale = Math.max(width / image.width, height / image.height);
  const focalX = width < 760 || width / height < 1.6 ? image.mobileX : image.width / 2;
  const fitX = Math.min(0, Math.max(width - image.width * fitScale, width / 2 - focalX * fitScale));
  const anchorX = fitX + image.x * fitScale;
  const anchorY = (height - image.height * fitScale) / 2 + image.y * fitScale;
  const scale = fitScale * (1 + overscan);
  const plate = bounded(width, height, image.width, image.height, { x: anchorX - image.x * scale, y: anchorY - image.y * scale, scale });
  // Preserve the plant-specific approach distance. The separate close-up takes
  // over before the deep zoom; it stays at normal cover scale while reading.
  const masterScale = scale * image.ratio;
  const master = bounded(width, height, WIDTH, HEIGHT, { x: anchorX - image.masterX * masterScale, y: anchorY - image.masterY * masterScale, scale: masterScale });
  return { plate, master };
}

export function journeyCamera(width: number, height: number, progress: number) {
  const p = Math.max(0, Math.min(ENERGY_STOP, progress));
  const plates: Record<PlantId, Plate> = {
    silicon: { ...plantPose("silicon", width, height).plate, opacity: 0, copy: 0 },
    cbg: { ...plantPose("cbg", width, height).plate, opacity: 0, copy: 0 },
    saf: { ...plantPose("saf", width, height).plate, opacity: 0, copy: 0 },
    energy: { ...plantPose("energy", width, height).plate, opacity: 0, copy: 0 },
  };
  const base = Math.max(width / WIDTH, height / HEIGHT);
  let master: Pose, intro = 0, phase: string;
  if (p <= SILICON_STOP) {
    const incoming = plantPose("silicon", width, height, .018 * (1 - smoothRange(.18, .92, p)));
    const overview = { x: (width - WIDTH * base) * (width < 760 ? .28 : .5), y: (height - HEIGHT * base) / 2, scale: base };
    master = mixPose(overview, incoming.master, smoothRange(.04, .66, p));
    plates.silicon = { ...incoming.plate, opacity: smoothRange(.30, .48, p), copy: smoothRange(.70, .94, p) };
    intro = 1 - smoothRange(.04, .26, p);
    phase = p < .001 ? "Scroll once to explore" : p < .48 ? "Approaching Silicon" : p < .999 ? "Settling into Silicon" : "Silicon · Scroll once for CBG";
  } else {
    const index = Math.min(plantOrder.length - 2, Math.ceil(p) - 2);
    const fromId = plantOrder[index], toId = plantOrder[index + 1];
    const t = p - (index + 1);
    const from = plantPose(fromId, width, height);
    const to = plantPose(toId, width, height, .018 * (1 - smoothRange(.56, .98, t)));
    // Distinct pullback, lateral travel and approach; never reset to the opening
    // frame or put an unrelated intermediate image between the plant views.
    const bridgeScale = base * 1.75;
    const bridgePose = (id: PlantId) => bounded(width, height, WIDTH, HEIGHT, {
      x: width * (width < 760 ? .5 : .4) - plantFraming[id].masterX * bridgeScale,
      y: height - HEIGHT * bridgeScale,
      scale: bridgeScale,
    });
    const across = mixPose(bridgePose(fromId), bridgePose(toId), smoothRange(.30, .64, t));
    master = mixPose(mixPose(from.master, across, smoothRange(.02, .34, t)), to.master, smoothRange(.62, .92, t));
    plates[fromId] = { ...from.plate, opacity: 1 - smoothRange(.02, .15, t), copy: 1 - smoothRange(0, .10, t) };
    plates[toId] = { ...to.plate, opacity: smoothRange(.72, .84, t), copy: smoothRange(.86, .98, t) };
    const fromName = plantLabels[fromId], toName = plantLabels[toId];
    const nextId = plantOrder[index + 2];
    phase = t < .001 ? `${fromName} · Scroll once for ${toName}` : t < .34 ? `Zooming out from ${fromName}` : t < .64 ? `Moving toward proposed ${toName}` : t < .86 ? `Approaching ${toName}` : t < .999 ? `Settling into ${toName}` : nextId ? `${toName} · Scroll once for ${plantLabels[nextId]}` : `${toName} · Scroll to continue`;
  }
  const visible = plantOrder.find(id => plates[id].opacity > .5);
  const shot = plantOrder.find(id => plates[id].opacity >= .999) ?? (plantOrder.some(id => plates[id].opacity > .001) ? "handoff" : "campus");
  const name = visible ? plantLabels[visible] : "campus";
  const camera = bounded(width, height, WIDTH, HEIGHT, master);
  return { ...camera, plates, intro, phase, shot, concept: `Proposed ${name} · Concept visualization` };
}
