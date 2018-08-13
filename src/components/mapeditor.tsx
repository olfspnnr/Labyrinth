import * as React from "react";
import * as ReactDOM from "react-dom";
import { labyrinthBaustein, getLevelStructure, Level } from "./levels";
import { coordinates, copyStructure } from "./logic";
export interface EditorProps {
  player: string;
}

interface EditorState {
  isLoaded: boolean;
  editorArea: labyrinthBaustein[][][];
  temporaryEditorArea: labyrinthBaustein[][][];
  copiedToClipboard: boolean;
}

export class Editor extends React.Component<EditorProps, EditorState> {
  constructor(Editor_Props: EditorProps) {
    super(Editor_Props);
    this.state = {
      isLoaded: false,
      editorArea: [],
      temporaryEditorArea: [],
      copiedToClipboard: false
    };
  }

  componentDidMount() {
    getLevelStructure("clean").then((level: labyrinthBaustein[][][]) => {
      this.setState(
        {
          editorArea: level,
          temporaryEditorArea: copyStructure(level)
        },
        () => {
          if (this.state.editorArea.length > 0) {
            this.setState(
              {
                isLoaded: true
              },
              () => {
                console.log("Editor hat Level empfangen");
              }
            );
          } else {
            console.error("Konnte Level nicht laden");
          }
        }
      );
    });
  }

  componentWillUnmount() {
    console.log("Editor wird geschlossen");
  }

  private changeTileAtCoordinates = (targetCoordinates: coordinates) => {
    let currentArea = copyStructure(this.state.temporaryEditorArea);
    let targetTile = currentArea[targetCoordinates.level][targetCoordinates.row][targetCoordinates.tile];
    if (!targetTile.wall && !targetTile.walkthrough) {
      targetTile.wall = true;
      targetTile.walkthrough = false;
    } else if (targetTile.wall) {
      targetTile.wall = false;
      targetTile.walkthrough = true;
    } else {
      targetTile.walkthrough = false;
    }
    console.log(targetTile);
    console.log(currentArea[targetCoordinates.level][targetCoordinates.row][targetCoordinates.tile]);

    return currentArea;
  };

  private returnMap = () => this.state.temporaryEditorArea[0];

  private copyMapToClipboard = (str: string) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render() {
    return this.state && this.state.isLoaded ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          flex: "1",
          height: "100%"
        }}
      >
        {this.state.temporaryEditorArea.map(levelEbene => (
          <Level
            player={this.props.player}
            levelArea={levelEbene}
            isEdit={true}
            returnFunc={(edit: coordinates) => {
              this.setState(
                {
                  temporaryEditorArea: this.changeTileAtCoordinates(edit)
                },
                () => {
                  console.log("Tile sollte sich geändert haben");
                }
              );
            }}
          />
        ))}
        <div
          onClick={() => {
            if (!this.state.copiedToClipboard) {
              this.copyMapToClipboard(JSON.stringify(this.returnMap()));
              this.setState(
                {
                  copiedToClipboard: true
                },
                () => {}
              );
            }
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            height: "3vh",
            width: this.state.copiedToClipboard ? "24.8vw" : "25vw",
            backgroundColor: this.state.copiedToClipboard ? "white" : "lightblue",
            border: this.state.copiedToClipboard ? "0.2vw solid lightblue" : "",
            color: this.state.copiedToClipboard ? "lightblue" : "white",
            marginTop: this.state.copiedToClipboard ? "0.8vw" : "1vw",
            cursor: "pointer",
            transition: "all 0.25s"
          }}
        >
          {!this.state.copiedToClipboard ? "Copy Level" : "Copied to clipboard"}
        </div>
      </div>
    ) : (
      <span>Loading...</span>
    );
  }
}
