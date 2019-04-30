import React, { Component } from "react";

const Circle = ({ bgColor }) => {
  var diameter = Math.random() * (100 - 50) + 50;
  var heights = [3, 700, 630, 100, 900, 15, 400, 450, 8];
  var lefts = [100, 200, 800, 900, 1200, 1400, 25];
  var height = heights[Math.floor(Math.random() * heights.length)];
  var width = lefts[Math.floor(Math.random() * lefts.length)];

  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    background: "linear-gradient(to right bottom," + bgColor + ")",
    borderRadius: "50%",
    width: diameter,
    height: diameter,
    opacity: 0.2,
    zIndex: 0,
    position: "absolute",
    top: height + "px",
    left: width + "px"
  };
  return <div style={circleStyle} />;
};

class Background extends Component {
  state = {
    colors: [
      "#1C89BF, #e3f7ff",
      "#A1D363,#90ee90",
      "#85FFC7, #3cb371",
      "#297373, #2f4f4f",
      "#FF8552, #fdc888",
      "#A40E4C ,#ffc2c2"
    ]
  };

  render() {
    return (
      <div className="circles">
        {this.state.colors.map(color => (
          <Circle key={color + 1} bgColor={color} />
        ))}
      </div>
    );
  }
}

export default Background;
