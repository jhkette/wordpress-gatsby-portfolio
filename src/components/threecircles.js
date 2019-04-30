import React, { Component } from "react";

const Circle = ({ bgColor }) => {
  var diameter = Math.random() * 250;
  var heights = [820, 700, 630, 5, 30, 100, 900, 15, 400, 450];
  var lefts = [100, 200, 50, 74, 800, 900, 1200, 1400, 25, 4];
  var height = heights[Math.floor(Math.random() * heights.length)];
  var width = lefts[Math.floor(Math.random() * lefts.length)];

  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: bgColor,
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
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#FF8552",
      "#A40E4C",
      "#393E41"
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
