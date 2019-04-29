import React, { Component } from "react";

const Circle = ({ bgColor }) => {
  // var container = document.getElementById('home-container');
  var diameter = Math.random() * 100;
  var height = Math.random() * 50;
  var width = Math.random() * 100;
  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    backgroundColor: bgColor,
    borderRadius: "50%",
    width: diameter,
    height: diameter,
    opacity: 0.3,
    zIndex: 0,
    position: "relative",
    top: height,
    left: width
  };
  return <div style={circleStyle} />;
};

class Background extends Component {
  state = {
    colors: [
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#297373",
      "#FF8552",
      "#A40E4C",
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363",
      "#85FFC7",
      "#297373",
      "#FF8552",
      "#A40E4C",
      "#393E41",
      "#E94F37",
      "#1C89BF",
      "#A1D363"
      //  "#85FFC7", "#297373", "#FF8552", "#A40E4C",
      //  "#393E41", "#E94F37", "#1C89BF", "#A1D363",
      //  "#85FFC7", "#297373", "#FF8552", "#A40E4C", "#393E41", "#E94F37", "#1C89BF", "#A1D363",
      //  "#85FFC7", "#297373", "#FF8552", "#A40E4C"
    ]
  };

  render() {
    return (
      <div className="circles">
        {this.state.colors.map(color => (
          <Circle key={color} bgColor={color} />
        ))}
      </div>
    );
  }
}

export default Background;
