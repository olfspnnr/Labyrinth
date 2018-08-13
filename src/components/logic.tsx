import { labyrinthBaustein } from "./levels";

export interface key {
  char: string;
  number: number;
  func: () => any;
}

export interface coordinates {
  level: number;
  row: number;
  tile: number;
}

export const initialiseKeyboard = (keys: key[]) => {
  keys.map(key => {
    document.addEventListener("keydown", e => {
      if (e.keyCode == key.number) {
        e.stopPropagation();
        e.preventDefault();
        key.func();
      }
    });
  });
};

export const movePlayerToTile = (levelStructure: labyrinthBaustein[][][], targetCoordinates: coordinates) => {
  if (
    targetCoordinates.level < 0 ||
    (targetCoordinates.row < 0 || targetCoordinates.row > 10) ||
    (targetCoordinates.tile < 0 || targetCoordinates.tile > 10)
  ) {
    console.log({
      text: "Bewegung ist ungültig - Koordinate ist außerhalb Spielfeld",
      value: targetCoordinates
    });
  } else if (findTile(levelStructure, targetCoordinates) && !findTile(levelStructure, targetCoordinates).wall) {
    let copyOfLevelStructure = removePlayerFromTile(levelStructure, findTileWithPlayer(levelStructure));
    copyOfLevelStructure = copyOfLevelStructure.map((level, levelIndex) =>
      level.map((row, rowIndex) =>
        row.map((tile, tileIndex) => {
          if (
            levelIndex == targetCoordinates.level &&
            rowIndex == targetCoordinates.row &&
            tileIndex == targetCoordinates.tile
          ) {
            console.log({ text: "Bewegen nach", value: targetCoordinates });
            return (tile = {
              playerOnTop: true,
              wall: tile.wall,
              walkthrough: tile.walkthrough,
              isStart: tile.isStart
            });
          }
          return tile;
        })
      )
    );
    return copyOfLevelStructure;
  } else {
    console.log({
      text: "Bewegung ist ungültig",
      value: findTile(levelStructure, targetCoordinates)
    });
  }
  return levelStructure;
};

export const findTile = (levelStructure: labyrinthBaustein[][][], targetCoordinates: coordinates) => {
  let copyOfLevelStructure = copyStructure(levelStructure);
  let searchedTile: labyrinthBaustein;
  copyOfLevelStructure.map((level, levelIndex) =>
    level.map((row, rowIndex) =>
      row.map((tile, tileIndex) => {
        if (
          levelIndex == targetCoordinates.level &&
          rowIndex == targetCoordinates.row &&
          tileIndex == targetCoordinates.tile
        )
          searchedTile = tile;
      })
    )
  );
  return searchedTile;
};

export const removePlayerFromTile = (
  levelStructure: labyrinthBaustein[][][],
  tileWithPlayerCoordinates: coordinates
) => {
  let copyOfStructure = copyStructure(levelStructure);
  copyOfStructure[tileWithPlayerCoordinates.level][tileWithPlayerCoordinates.row][
    tileWithPlayerCoordinates.tile
  ].playerOnTop = false;
  return copyOfStructure;
};

export const findTileWithPlayer = (levelStructure: labyrinthBaustein[][][]) => {
  let tileWithPlayerCoordinates: coordinates = undefined;
  levelStructure.forEach((level, levelIndex) =>
    level.forEach((row, rowIndex) =>
      row.forEach((tile, tileIndex) => {
        if (tile.playerOnTop) tileWithPlayerCoordinates = { level: levelIndex, row: rowIndex, tile: tileIndex };
      })
    )
  );
  return tileWithPlayerCoordinates;
};

export const putPlayerOnStart = (levelStructure: labyrinthBaustein[][][]) => {
  let levelCopy = copyStructure(levelStructure);
  levelCopy.forEach(level =>
    level.forEach(row =>
      row.forEach(tile => {
        if (tile.isStart) tile.playerOnTop = true;
      })
    )
  );
  return levelCopy;
};

export const copyStructure = (levelStructure: labyrinthBaustein[][][]) => {
  let copy: labyrinthBaustein[][][] = [];
  levelStructure.forEach((level, idxLevel) => {
    if (copy[idxLevel] == undefined) copy.push([]);
    level.forEach((row, idxRow) => {
      if (copy[idxLevel][idxRow] == undefined) copy[idxLevel].push(row);
      row.forEach((tile, idxTile) => {
        if (copy[idxLevel][idxRow][idxTile] == undefined) copy[idxLevel][idxRow].push(tile);
      });
    });
  });
  return copy;
};

export const copyTile = (tileToBeCopied: labyrinthBaustein) => {
  let copyOfTile: labyrinthBaustein = {
    isStart: tileToBeCopied.isStart,
    playerOnTop: tileToBeCopied.playerOnTop,
    walkthrough: tileToBeCopied.walkthrough,
    wall: tileToBeCopied.wall
  };
  return copyOfTile;
};
