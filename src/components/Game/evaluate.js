// export const evaluateMatch = (player, goal) => {
//     for (let pCoord in player) {
//         for (let gCoord in goal) {
//             if (player[pCoord].x === goal[gCoord].x && player[pCoord].y === goal[gCoord].y) {
//                 console.log(pCoord, gCoord);
//                 console.log("x: ",player[pCoord].x, goal[gCoord].x, "y: ", player[pCoord].y, goal[gCoord].y);
//                 break;
//             }
//             if (gCoord === "c") {
//                 return false;
//             }
//         }
//     }
//     console.log("MATCH")
//     return true;
// }


// export const evaluateBoundary = player => {
//   for (let pCoord in player) {
//     if (
//       player[pCoord].x > 10 ||
//       player[pCoord].x < -10 ||
//       player[pCoord].y > 10 ||
//       player[pCoord].y < -10
//     ) {
//       return true;
//     }
//   }
//   return false;
// };

export const evaluateMatch = (player, goal) => {
  let points = ["a","b","c"];
    for (let pPoint of points) {
        for (let gPoint of points) {
            if (player[pPoint].x === goal[gPoint].x && player[pPoint].y === goal[gPoint].y) {
                console.log(pPoint, gPoint);
                console.log("x: ",player[pPoint].x, goal[gPoint].x, "y: ", player[pPoint].y, goal[gPoint].y);
                break;
            }
            if (gPoint === "c") {
                return false;
            }
        }
    }
    console.log("MATCH")
    return true;
}

export const evaluateBoundary = player => {
  let points = ["a","b","c"];
    for (let pPoint of points) {
      if (
        player[pPoint].x > 10 ||
        player[pPoint].x < -10 ||
        player[pPoint].y > 10 ||
        player[pPoint].y < -10
      ) {
        return true;
      }
    }
    return false;
  };