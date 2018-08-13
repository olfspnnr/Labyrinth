import * as React from "react";
import * as ReactDOM from "react-dom";
import { Labyrinth } from "./labyrinth";
import { initialiseKeyboard } from "./logic";
export interface AppProps {}

interface AppState {
  isLoaded: boolean;
  player: number;
  level: string;
  isMenu: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(App_Props: AppProps) {
    super(App_Props);
    this.state = {
      isLoaded: true,
      player: 0,
      level: "regular",
      isMenu: true
    };
  }

  componentDidMount() {
    initialiseKeyboard([
      {
        char: "tab",
        number: 9,
        func: () => {
          this.setState({
            player: this.state.player + 1 < this.possibleChars.length ? this.state.player + 1 : 0
          });
        }
      }
    ]);
  }

  private possibleChars: string[] = ["o", "😎", "🦄", "🍔", "💩"];

  render() {
    let buttonRef: HTMLDivElement;
    return this.state ? (
      this.state.isMenu ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "100%",
            fontFamily: "Arial, Helvetica, sans-serif"
          }}
        >
          <h1
            style={{
              display: "flex",
              placeContent: "center",
              alignItems: "center",
              letterSpacing: "0.8vh",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 200,
              fontSize: "5vh",
              height: "15vh",
              width: "100%",
              margin: 0,
              backgroundColor: "white",
              border: "1vh solid #232b2b",
              color: "#232b2b"
            }}
          >
            <span>INSIDE³</span>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: "80vh",
              width: "100%",
              fontSize: "calc(2vh)",
              fontWeight: 200,
              letterSpacing: "0.1vh"
            }}
          >
            <div
              ref={ref => (buttonRef = ref)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "calc(5vh * 3)",
                height: "5vh",
                backgroundColor: "#232b2b",
                color: "white",
                cursor: "pointer"
              }}
              onMouseOver={() => {
                buttonRef.style.backgroundColor = "#414a4c";
              }}
              onMouseLeave={() => {
                buttonRef.style.backgroundColor = "#232b2b";
              }}
              onClick={() => {
                this.setState({
                  isMenu: false
                });
              }}
            >
              Test
            </div>
          </div>
        </div>
      ) : (
        <Labyrinth level={this.state.level} player={this.possibleChars[this.state.player]} />
      )
    ) : (
      <span>Loading...</span>
    );
  }
}
