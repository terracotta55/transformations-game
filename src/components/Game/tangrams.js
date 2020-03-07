const tangrams = {
  house: {
    pieces: [
      [9, -6, 5, -8, 9, -8],
      [5, -6, 5, -8, 9, -6],
      [7, -4, 5, -6, 9, -6]
    ],
    path: "M850 700 L750 800 L 750 900 L 950 900 L 950 800 Z",
    pathX: 850,
    strokeDasharray: 900,
    stars: [0, 350, 450]  //These are the ranges for the score cutoffss
  },

  tree: {
    pieces: [
      [-5, -2, -6, -3, -4, -3],
      [-5, -3, -7, -5, -3, -5],
      [-5, -5, -8, -8, -2, -8],
      [-6, -8, -6, -10, -4, -10],
      [-6, -8, -4, -8, -4, -10]
    ],
    path:
      "M250 600 L200 650 L250 650 L 150 750 L250 750 L 100 900 L 200 900 L 200 1000 L300 1000 L 300 900 L 400 900 L 250 750 L350 750 L 250 650 L 300 650 Z",
    pathX: 2100,
    strokeDasharray: 2200,
    stars: [0, 600, 800]
  },

  boat: {
    pieces: [
      [1, 3, 4, 3, 4, 0],
      [4, 0, 6, 0, 4, 3],
      [4, 3, 6, 0, 9, 3],
      [6, 3, 10, 3, 8, 5],
      [6, 3, 8, 5, 6, 7],
      [0, 4, 3, 7, 6, 4],
      [3, 7, 6, 4, 6, 10]
    ],
    path:
      "M800 0 L800 150 L 1000 350 L 950 350 L 800 500 L 700 500 L 550 350 L 800 350 L 800 300 L 500 300 Z",
    pathX: 2100,
    strokeDasharray: 2200,
    stars: [0, 850, 1150]
  },

  fish: {
    pieces: [
      [1, 5, 5, 1, 5, 5],
      [5, 2, 7, 4, 5, 4],
      [7, 4, 9, 2, 9, 4],
      [7, 4, 9, 4, 9, 6],
      [7, 4, 7, 6, 9, 6],
      [7, 6, 9, 6, 9, 8],
      [7, 4, 5, 4, 7, 6],
      [5, 4, 5, 6, 7, 6],
      [5, 6, 5, 8, 7, 6],
      [1, 5, 5, 5, 5, 9]
    ],
    path:
      "M750 50 L 750 100 L850 200 L 950 100 L 950 400 L 850 300 L 750 400 L 750 450 L 550 250 Z",
    pathX: 1500,
    strokeDasharray: 1600,
    stars: [0, 1250, 1650]
  },

  cat: {
    pieces: [
      [2, -10, 6, -10, 6, -6],
      [6, -10, 8, -10, 8, -8],
      [8, -10, 10, -8, 8, -8],
      [3, -9, 6, -6, 3, -3],
      [3, -6, 1, -4, 3, -3],
      [3, -3, 1, -2, 3, -1],
      [3, -3, 5, -2, 3, -1],
      [1, -2, 1, 0, 3, -1],
      [3, -1, 5, -2, 5, 0]
    ],
    path:
      "M550 500 L 650 550 L 750 500 L 750 600 L 650 650 L 800 800 L 800 1000 L 900 900 L 1000 900 L 900 1000 L 600 1000 L 650 950 L 650 800 L 550 700 L650 650 L 550 600 Z",
    pathX: 2300,
    strokeDasharray: 2400,
    stars: [0, 1050, 1450]
  }
};

export default tangrams;

export const colorPalette = [
  "#FC766AFF",
  "#783937FF",
  "#F1AC88FF",
  "#F6EA7BFF",
  "#FFBA52FF",
  "#E683A9FF",
  "#F65058FF",
  "#FBDE44FF",
  "#28334AFF",
  "#95DBE5FF",
  "#078282FF",
  "#339E66FF",
  "#643E46FF",
  "#BA0020FF",
  // "#EE2737FF" Reserved for highlight color
];

export const shuffle = array => {
  let array2 = array.slice();
  for (let i = array2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }
  return array2;
};
