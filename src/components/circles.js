// import React, { Component } from "react";
// const Circle = ({ bgColor, height, width }) => {
//   // a number inbetween 120 and 40 to get diamter of circle
//   var diameter = Math.random() * (120 - 40) + 40;
//   var newheight = Math.round(Math.random() * height);
//   var newwidth = Math.round(Math.random() * width);

//   var circleStyle = {
//     padding: 10,
//     margin: 20,
//     display: "inline-block",
//     background: "linear-gradient(to right bottom," + bgColor + ")",
//     borderRadius: "50%",
//     width: diameter,
//     height: diameter,
//     opacity: 0.2,
//     zIndex: 0,
//     position: "absolute",
//     top: newheight + "px",
//     left: newwidth + "px"
//   };
//   return <div style={circleStyle} />;
// };

// class Background extends Component {
//   constructor(props) {
//     super(props);
//     this.container = React.createRef();
//   }
//   state = {
//     colors: [],
//     contentHeight: 0,
//     contentWidth: 0
//   };
//   componentDidMount() {
//     let newcolors = [];
//     const height = this.container.current.clientHeight;
//     const width = this.container.current.clientWidth;
//     if (height > 2500) {
//       newcolors = [
//         "#E94F37, #bb2d50",
//         "#1C89BF, #e3f7ff",
//         "#A1D363, #90ee90",
//         "#85FFC7, #3cb371",
//         "#297373, #2f4f4f",
//         "#FF8552, #fdc888",
//         "#A40E4C ,#ffc2c2",
//         "#E94F37, #bb2d50",
//         "#1C89BF, #e3f7ff",
//         "#A1D363, #90ee90",
//         "#85FFC7, #3cb371",
//         "#297373, #2f4f4f",
//         "#FF8552, #fdc888",
//         "#A40E4C, #ffc2c2"
//       ];
//     } else if (height > 1800 && height < 2500) {
//       newcolors = [
//         "#E94F37, #bb2d50",
//         "#1C89BF, #e3f7ff",
//         "#A1D363, #90ee90",
//         "#85FFC7, #3cb371",
//         "#297373, #2f4f4f",
//         "#FF8552, #fdc888",
//         "#A40E4C, #ffc2c2"
//       ];
//     } else {
//       newcolors = [
//         "#85FFC7, #3cb371",
//         "#FF8552, #fdc888",
//         "#1C89BF, #e3f7ff",
//         "#A1D363, #90ee90"
//       ];
//     }
//     this.setState({
//       contentHeight: height,
//       contentWidth: width,
//       colors: [...newcolors]
//     });
//   }

//   render() {
//     let id = 0;
//     return (
//       <div className="circles" ref={this.container}>
//         {this.state.colors.map(color => (
//           <Circle
//             key={id++}
//             bgColor={color}
//             height={this.state.contentHeight}
//             width={this.state.contentWidth}
//           />
//         ))}{" "}
//       </div>
//     );
//   }
// }

// export default Background;
