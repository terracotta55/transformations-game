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