import * as React from "react";
import * as ReactDOM from "react-dom";
import { getLevelStructure, labyrinthBaustein, Level } from "./levels";
import {
  key,
  initialiseKeyboard,
  movePlayerToTile,
  putPlayerOnStart,
  findTileWithPlayer,
  coordinates,
  findTile
} from "./logic";
import { Editor } from "./mapeditor";
export interface LabyrinthProps {
  level: string;
  player: string;
}

interface LabyrinthState {
  loadingText: string;
  isLoading: boolean;
  labyrinthArea: labyrinthBaustein[][][];
  isEditor: boolean;
}

export class Labyrinth extends React.Component<LabyrinthProps, LabyrinthState> {
  constructor(Labyrinth_Props: LabyrinthProps) {
    super(Labyrinth_Props);
    this.state = {
      isLoading: true,
      labyrinthArea: [[]],
      loadingText: "Getting levelStructure",
      isEditor: false
    };
  }

  private keyArray = [
    {
      char: "f5",
      number: 116,
      func: () => {
        this.initalStart().then(() => {});
      }
    },
    {
      char: "o",
      number: 79,
      func: () => {
        this.setState({
          isEditor: !this.state.isEditor
        });
      }
    },
    {
      char: "w",
      number: 87,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);
        currentCoordinates.row -= 1;
        let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
        this.setState({
          labyrinthArea: movedStructure
        });
      }
    },
    {
      char: "a",
      number: 65,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);
        currentCoordinates.tile -= 1;
        let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
        this.setState({
          labyrinthArea: movedStructure
        });
      }
    },
    {
      char: "s",
      number: 83,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);
        currentCoordinates.row += 1;
        let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
        this.setState({
          labyrinthArea: movedStructure
        });
      }
    },
    {
      char: "d",
      number: 68,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);
        currentCoordinates.tile += 1;
        let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
        this.setState({
          labyrinthArea: movedStructure
        });
      }
    },
    {
      char: "strg",
      number: 17,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);

        if (
          findTile(this.state.labyrinthArea, currentCoordinates) &&
          findTile(this.state.labyrinthArea, currentCoordinates).walkthrough
        ) {
          currentCoordinates.level += 1;
          let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
          this.setState({
            labyrinthArea: movedStructure
          });
        } else if (
          findTile(this.state.labyrinthArea, currentCoordinates) &&
          !findTile(this.state.labyrinthArea, currentCoordinates).walkthrough
        ) {
          console.log({ text: "Ist kein Walkthrough", value: findTile(this.state.labyrinthArea, currentCoordinates) });
        } else {
          console.log({ text: "Ungültige Bewegung", value: findTile(this.state.labyrinthArea, currentCoordinates) });
        }
      }
    },
    {
      char: "space",
      number: 32,
      func: () => {
        let currentCoordinates: coordinates = findTileWithPlayer(this.state.labyrinthArea);
        currentCoordinates.level -= 1;
        if (
          findTile(this.state.labyrinthArea, currentCoordinates) &&
          findTile(this.state.labyrinthArea, { ...currentCoordinates }).walkthrough
        ) {
          let movedStructure = movePlayerToTile(this.state.labyrinthArea, currentCoordinates);
          this.setState({
            labyrinthArea: movedStructure
          });
        } else if (
          findTile(this.state.labyrinthArea, currentCoordinates) &&
          !findTile(this.state.labyrinthArea, currentCoordinates).walkthrough
        ) {
          console.log({ text: "Ist kein Walkthrough", value: findTile(this.state.labyrinthArea, currentCoordinates) });
        } else {
          console.log({ text: "Ungültige Bewegung", value: findTile(this.state.labyrinthArea, currentCoordinates) });
        }
      }
    }
  ] as key[];

  componentDidMount() {
    this.initalStart().then(() => {
      initialiseKeyboard(this.keyArray);
    });
  }

  private initalStart = () =>
    new Promise((resolve, reject) => {
      console.log("Spiel gestartet.");
      getLevelStructure(this.props.level).then((level: labyrinthBaustein[][][]) => {
        console.log({ text: "Folgendes hat das Spiel empfangen", value: level });
        console.log("Spiel wird initalisiert...");
        this.setState(
          {
            labyrinthArea: level
          },
          () => {
            if (this.state.labyrinthArea.length > 0) {
              console.log("Level wurden geladen.");
              this.setState(
                {
                  labyrinthArea: putPlayerOnStart(this.state.labyrinthArea),
                  isLoading: false
                },
                () => {
                  console.log("Spieler wurde auf Start gesetzt.");
                  resolve();
                }
              );
            } else {
              console.log("Level konnte nicht geladen werden");
              this.setState(
                {
                  loadingText: "Fehler beim holen des Levels"
                },
                () => reject()
              );
            }
          }
        );
      });
    });

  render() {
    return this.state ? (
      !this.state.isEditor ? (
        <div
          id="labyrinth"
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            height: "100%",
            width: "100%"
          }}
        >
          {this.state.isLoading ? (
            <div id="loadingScreen">{this.state.loadingText}</div>
          ) : (
            <div
              style={{
                display: "flex",
                alignContent: "space-evenly",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              {this.state.labyrinthArea.map(levelEbene => (
                <div
                  style={{
                    flexBasis: "33%",
                    display: "flex",
                    alignContent: "space-evenly",
                    justifyContent: "center"
                  }}
                >
                  <Level levelArea={levelEbene} player={this.props.player} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Editor player={this.props.player} />
      )
    ) : (
      <div id="initalLoadingScreen">
        <span>Loading...</span>
      </div>
    );
  }
}
