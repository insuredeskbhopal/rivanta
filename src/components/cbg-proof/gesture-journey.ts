import type { gsap } from "gsap";
import { JOURNEY_STOPS, journeyChapters, SILICON_STOP } from "./camera";

type JourneyOptions = {
  gsap: typeof gsap;
  stage: HTMLElement;
  root: HTMLElement;
  render: (progress: number, direction: 1 | -1) => void;
  skip: HTMLButtonElement;
};

const GESTURE_GAP = 180;
const interactive = (target: EventTarget | null) => target instanceof Element &&
  Boolean(target.closest("a, button, summary, input, select, textarea, [contenteditable=true], [role=slider]"));
const editable = (target: EventTarget | null) => target instanceof Element &&
  Boolean(target.closest("input, select, textarea, [contenteditable=true], [role=slider]"));

// One intentional gesture plays one bounded shot. No document-wide scroll lock.
export function createGestureJourney({ gsap, stage, root, render, skip }: JourneyOptions) {
  const cursor = { progress: 0 };
  let target = 0;
  let animation: gsap.core.Tween | undefined;
  let playing = false;
  let lastWheel = -Infinity;
  let wheelGuard = false;
  let touchY: number | undefined;
  let touchGuard = false;
  const keys = new Set<string>();

  const paint = () => render(cursor.progress, playing && target < cursor.progress ? -1 : 1);
  const mark = (state: typeof journeyChapters[number] | "playing") => {
    root.dataset.playback = state;
    if (state !== "playing" && document.activeElement === skip) stage.focus({ preventScroll: true });
    skip.hidden = state !== "playing";
  };
  const finish = () => {
    animation?.kill();
    animation = undefined;
    playing = false;
    cursor.progress = target;
    paint();
    mark(journeyChapters[target] ?? "overview");
  };
  const play = (destination: number) => {
    if (playing || Math.abs(cursor.progress - destination) < .001) return;
    const from = cursor.progress;
    target = destination;
    playing = true;
    mark("playing");
    const direction = target > from ? 1 : -1;
    const keyframes = [];
    for (let stop = from + direction; direction > 0 ? stop <= target : stop >= target; stop += direction) {
      keyframes.push({ progress: stop, duration: direction > 0 ? (stop === SILICON_STOP ? 2.6 : 3.6) : (stop === 0 ? 2.1 : 3), ease: "none" });
    }
    animation = gsap.to(cursor, {
      keyframes,
      ease: "none", // Camera phases supply their own smooth position/velocity curves.
      onUpdate: paint,
      onComplete: finish,
    });
  };
  const inStage = () => root.dataset.menuOpen !== "true" && Math.abs(stage.getBoundingClientRect().top) < 3;
  const bypass = () => { finish(); wheelGuard = false; touchGuard = false; keys.clear(); };
  const nextStop = (direction: number) => {
    const index = JOURNEY_STOPS.findIndex(stop => stop === target);
    return JOURNEY_STOPS[index + (direction > 0 ? 1 : -1)];
  };
  const canStart = (direction: number) => nextStop(direction) !== undefined;
  const onWheel = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey || event.defaultPrevented || editable(event.target) ||
      Math.abs(event.deltaY) <= Math.abs(event.deltaX) || !inStage()) return;
    const now = performance.now();
    const continuingGesture = now - lastWheel < GESTURE_GAP;
    lastWheel = now;
    if (playing || (wheelGuard && continuingGesture)) {
      event.preventDefault();
      return;
    }
    wheelGuard = false;
    if (!canStart(event.deltaY)) return;
    event.preventDefault();
    wheelGuard = true;
    play(nextStop(event.deltaY)!);
  };
  const onTouchStart = (event: TouchEvent) => {
    // A new contact is a new gesture; preserve two-finger zoom and control use.
    touchY = event.touches.length === 1 && !editable(event.target) ? event.touches[0].clientY : undefined;
    touchGuard = false;
  };
  const onTouchMove = (event: TouchEvent) => {
    if (touchY === undefined || event.touches.length !== 1 || !inStage()) return;
    const direction = touchY - event.touches[0].clientY;
    if (Math.abs(direction) < 8) return;
    if (playing || touchGuard) { event.preventDefault(); touchGuard = true; return; }
    if (!canStart(direction)) return;
    event.preventDefault();
    touchGuard = true;
    play(nextStop(direction)!);
  };
  const onTouchEnd = () => { touchY = undefined; touchGuard = false; };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && playing) { bypass(); return; }
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
      interactive(event.target) || !inStage()) return;
    const direction = event.key === "ArrowDown" || event.key === "PageDown" || (event.key === " " && !event.shiftKey) ? 1 :
      event.key === "ArrowUp" || event.key === "PageUp" || (event.key === " " && event.shiftKey) ? -1 : 0;
    if (!direction) return;
    if (playing || keys.has(event.key)) { event.preventDefault(); keys.add(event.key); return; }
    if (!canStart(direction)) return;
    event.preventDefault();
    keys.add(event.key);
    play(nextStop(direction)!);
  };
  const onKeyUp = (event: KeyboardEvent) => { keys.delete(event.key); };
  // Anchors, scrollbar dragging, Home/End and focus navigation can always leave.
  const onScroll = () => { if (playing && !inStage()) finish(); };
  const onVisibility = () => { if (document.hidden && playing) finish(); };
  const onBlur = () => { keys.clear(); if (playing) finish(); };

  paint();
  mark("overview");
  window.addEventListener("wheel", onWheel, { passive: false });
  stage.addEventListener("touchstart", onTouchStart, { passive: true });
  stage.addEventListener("touchmove", onTouchMove, { passive: false });
  stage.addEventListener("touchend", onTouchEnd, { passive: true });
  stage.addEventListener("touchcancel", onTouchEnd, { passive: true });
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("blur", onBlur);
  document.addEventListener("visibilitychange", onVisibility);
  skip.addEventListener("click", bypass);

  return {
    render: paint,
    home() {
      target = 0;
      finish();
      wheelGuard = false;
      touchGuard = false;
      touchY = undefined;
      lastWheel = -Infinity;
      keys.clear();
    },
    navigate(position: number) {
      finish();
      stage.scrollIntoView({ block: "start", behavior: "instant" });
      wheelGuard = false;
      keys.clear();
      if (position === 0) {
        target = 0;
        cursor.progress = 0;
        paint();
      }
      play(JOURNEY_STOPS.find(stop => stop === position && stop > 0) ?? SILICON_STOP);
    },
    dispose() {
      animation?.kill();
      window.removeEventListener("wheel", onWheel);
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("touchend", onTouchEnd);
      stage.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibility);
      skip.removeEventListener("click", bypass);
      skip.hidden = true;
      delete root.dataset.playback;
    },
  };
}
