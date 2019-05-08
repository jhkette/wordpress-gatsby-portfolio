import React, { Component } from "react";

const Circle = ({ bgColor }) => {
  var diameter = Math.random() * (275 - 50) + 50;
  var height = Math.random() * 2000;
  var width = Math.random() * 900;

  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    background: "linear-gradient(to right bottom," + bgColor + ")",
    borderRadius: "50%",
    width: diameter,
    height: diameter,
    opacity: 0.25,
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
      "#393E41, #636863 ",
      "#E94F37, #ff4500",
      "#1C89BF, #e3f7ff",
      "#A1D363,#90ee90",
      "#85FFC7, #3cb371",
      "#297373, #2f4f4f",
      "#FF8552, #fdc888",
      "#A40E4C ,#ffc2c2",
      "#1C89BF, #e3f7ff",
      "#A1D363,#90ee90",
      "#85FFC7, #3cb371",
      "#A40E4C ,#ffc2c2",
      
     
    ]
  };

  render() {
    let id = 0;
    return (
      <div className="circles">
        {this.state.colors.map(color => (
          <Circle key={id++} bgColor={color} />
        ))}
      </div>
    );
  }
}

export default Background;
