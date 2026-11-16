export const detailImage = {
  width: 1774,
  height: 887,
  domeX: 554,
  domeY: 380,
  domeScale: 3.05,
} as const;

// User-designated SAF concept. The tower anchor is an approximate image-space pick.
// Its process identity and position are not verified engineering information.
export const safImage = {
  width: 1672,
  height: 941,
  towerX: 1099,
  towerY: 400,
  masterX: 872,
  masterY: 684,
  towerScale: 2.8,
} as const;

export const plantOrder = ["silicon", "cbg", "saf", "energy"] as const;
export type PlantId = typeof plantOrder[number];

export const plantLabels = { silicon: "Silicon", cbg: "CBG", saf: "SAF", energy: "Renewable Power" } as const;

// User-assigned facility identities; approximate concept-image pixels, not site coordinates.
export const plantFraming = {
  silicon: { width: 1672, height: 941, x: 240, y: 148, masterX: 320, masterY: 684, ratio: 5.3, mobileX: 340 },
  cbg: { width: detailImage.width, height: detailImage.height, x: detailImage.domeX, y: detailImage.domeY, masterX: 461, masterY: 741, ratio: detailImage.domeScale, mobileX: detailImage.width * .33 },
  saf: { width: safImage.width, height: safImage.height, x: safImage.towerX, y: safImage.towerY, masterX: safImage.masterX, masterY: safImage.masterY, ratio: safImage.towerScale, mobileX: safImage.towerX },
  // Approximate turbine-hub correspondence only, not an engineering/site coordinate.
  energy: { width: 1672, height: 941, x: 630, y: 270, masterX: 1058, masterY: 676, ratio: 3.6, mobileX: 745 },
} as const;
