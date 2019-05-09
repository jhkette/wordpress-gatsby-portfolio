import React, { Component } from "react";


const Circle = ({ bgColor, height, width }) => {

  
 
  var diameter = Math.random() * (180 - 40) + 40;
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
      
    ],
    contentHeight: 0,
    contentWidth: 0,

  };
  componentDidMount() {
    let newcolors = [];
   const height = this.content.getBoundingClientRect().height;
   const width =  this.content.getBoundingClientRect().width;
   if(height > 2500){
    newcolors = ["#393E41, #636863 ",
    "#E94F37, #ff4500",
    "#1C89BF, #e3f7ff",
    "#A1D363,#90ee90",
    "#85FFC7, #3cb371",
    "#85FFC7, #3cb371",
    "#A40E4C ,#ffc2c2",
    "#1C89BF, #e3f7ff",
  ]
  
   }
   else{
     newcolors = [
      "#85FFC7, #3cb371",
      "#FF8552, #fdc888",
      "#1C89BF, #e3f7ff",
      
     

     ]
   }
   
    // use an if statment here to that sets states for colours based on height of screen. 
    this.setState(
      
      { contentHeight: height,
      contentWidth: width,
      colors: [ ...newcolors]


    })
    console.log(`${this.content.getBoundingClientRect().width}, ${this.content.getBoundingClientRect().height}`);
  
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
