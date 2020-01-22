export const evaluateMatch = (player, goal) => {
    for (let pCoord in player) {
        for (let gCoord in goal) {
            if (player[pCoord].x === goal[gCoord].x && goal[gCoord].y === player[pCoord].y) {
                console.log(pCoord, gCoord);
                console.log("x: ",player[pCoord].x, goal[gCoord].x, "y: ", player[pCoord].y, goal[gCoord].y);
                break;
            }
            if (gCoord === "c") {
                return false;
            }
        }
    }
    return true;
}

export const evaluateBoundary = player => {
    for (let pCoord in player) {
      if (
        player[pCoord].x > 10 ||
        player[pCoord].x < -10 ||
        player[pCoord].y > 10 ||
        player[pCoord].y < -10
      ) {
        return true;
      }
    }
    return false;
  };