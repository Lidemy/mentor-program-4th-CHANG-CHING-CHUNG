function loopCheckingMarks(
  squares,
  x,
  y,
  COL_MAX_LENGTH,
  ROW_MAX_LENGTH,
  counter,
  playerMark,
  oldMap
) {
  const map = JSON.parse(JSON.stringify(oldMap));
  while (
    y + counter <= ROW_MAX_LENGTH &&
    squares[x][y + counter] === playerMark
  ) {
    map.rowRight.push(squares[x][y + counter]);
    counter++;
  }
  counter = 1;
  while (y - counter >= 0 && squares[x][y - counter] === playerMark) {
    map.rowLeft.push(squares[x][y - counter]);
    counter++;
  }
  counter = 1;
  while (
    x + counter <= COL_MAX_LENGTH &&
    squares[x + counter][y] === playerMark
  ) {
    map.colDown.push(squares[x + counter][y]);
    counter++;
  }
  counter = 1;
  while (x - counter >= 0 && squares[x - counter][y] === playerMark) {
    map.colUp.push(squares[x - counter][y]);
    counter++;
  }
  counter = 1;
  while (
    x - counter >= 0 &&
    y - counter >= 0 &&
    squares[x - counter][y - counter] === playerMark
  ) {
    map.upperLeft.push(squares[x - counter][y - counter]);
    counter++;
  }
  counter = 1;
  while (
    x - counter >= 0 &&
    y + counter <= ROW_MAX_LENGTH &&
    squares[x - counter][y + counter] === playerMark
  ) {
    map.upperRight.push(squares[x - counter][y + counter]);
    counter++;
  }
  counter = 1;
  while (
    x + counter <= COL_MAX_LENGTH &&
    y + counter <= ROW_MAX_LENGTH &&
    squares[x + counter][y + counter] === playerMark
  ) {
    map.bottomRight.push(squares[x + counter][y + counter]);
    counter++;
  }
  counter = 1;

  while (
    x + counter <= COL_MAX_LENGTH &&
    y - counter >= 0 &&
    squares[x + counter][y - counter] === playerMark
  ) {
    map.bottomLeft.push(squares[x + counter][y - counter]);
    counter++;
  }

  return map;
}

function calculateWinner(squares, x, y) {
  if (squares[x][y] === null) {
    return;
  }
  const COL_MAX_LENGTH = squares[0].length - 1;
  const ROW_MAX_LENGTH = squares.length - 1;
  const playerMark = squares[x][y];
  let counter = 1;
  const map = {
    rowRight: [],
    colDown: [],
    rowLeft: [],
    colUp: [],
    upperLeft: [],
    upperRight: [],
    bottomLeft: [],
    bottomRight: [],
  };

  const newMap = loopCheckingMarks(
    squares,
    x,
    y,
    COL_MAX_LENGTH,
    ROW_MAX_LENGTH,
    counter,
    playerMark,
    map
  );

  const winner = helpCheckWin(newMap, playerMark);
  if (winner) {
    return winner;
  }
  return null;
}

function helpCheckWin(map, playerMark) {
  const rightTotal = map.rowRight.filter((mark) => mark === playerMark).length;
  const leftTotal = map.rowLeft.filter((mark) => mark === playerMark).length;
  const upTotal = map.colUp.filter((mark) => mark === playerMark).length;
  const downTotal = map.colDown.filter((mark) => mark === playerMark).length;

  const upperRightTotal = map.upperRight.filter((mark) => mark === playerMark)
    .length;
  const upperLeftTotal = map.upperLeft.filter((mark) => mark === playerMark)
    .length;
  const bottomRightTotal = map.bottomRight.filter((mark) => mark === playerMark)
    .length;
  const bottomLeftTotal = map.bottomLeft.filter((mark) => mark === playerMark)
    .length;
  const results = {
    rightTotal,
    leftTotal,
    upTotal,
    downTotal,
    upperRightTotal,
    upperLeftTotal,
    bottomRightTotal,
    bottomLeftTotal,
  };

  if (results.rightTotal === 4 || results.leftTotal === 4) {
    return playerMark;
  } else if (results.upTotal === 4 || results.downTotal === 4) {
    return playerMark;
  } else if (
    results.rightTotal + results.leftTotal === 4 ||
    results.upTotal + results.downTotal === 4
  ) {
    return playerMark;
  } else if (results.upperLeftTotal === 4 || results.bottomRightTotal === 4) {
    return playerMark;
  } else if (results.upperRightTotal === 4 || results.bottomLeftTotal === 4) {
    return playerMark;
  } else if (
    results.upperLeftTotal + results.bottomRightTotal === 4 ||
    results.upperRightTotal + results.bottomLeftTotal === 4
  ) {
    return playerMark;
  }

  return null;
}
export default calculateWinner;
