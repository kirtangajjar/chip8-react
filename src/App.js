import React, { Component } from "react";
import "./App.css";

class App extends Component {
  pixelX = 64;
  pixelY = 32;
  pixelScale = 10;

  componentDidMount() {
    let canvas = document.getElementById("screen");
    let context = canvas.getContext("2d");
    canvas.width = this.pixelX * this.pixelScale;
    canvas.height = this.pixelY * this.pixelScale;

    context.fillStyle = "black";

    for (let i = 0; i < this.pixelX; i++) {
      for (let j = 0; j < this.pixelY; j++) {
        if (j % 2 === i % 2)
          context.fillRect(
            i * this.pixelScale,
            j * this.pixelScale,
            this.pixelScale,
            this.pixelScale
          );
      }
    }
  }

  render() {
    return (
      <div className="App">
        <canvas id="screen" />
      </div>
    );
  }
}

export default App;
