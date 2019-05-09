import React, { Component } from "react";


const Circle = ({ bgColor, height, width }) => {
 
  var diameter = Math.random() * (275 - 50) + 50;
  var newheight =  (Math.round(Math.random() * height));
  var newwidth = (Math.round(Math.random() * width));

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
    top: newheight + "px",
    left: newwidth + "px"
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
    ],
    contentHeight: 0,
    contentWidth: 0,

  };
  componentDidMount() {
   
    this.setState({ contentHeight: this.content.getBoundingClientRect().height,
      contentWidth: this.content.getBoundingClientRect().width
    
    });

    console.log(this.content.getBoundingClientRect() )
  }
  

  render() {

    
    
    let id = 0;
    return (
      <div className="circles"  ref={r => this.content = r}
     >
        {this.state.colors.map(color => (
          <Circle key={id++} bgColor={color} height={this.state.contentHeight} width={this.state.contentWidth} />
        ))}
      </div>
    );
  }
  
}

export default Background;
