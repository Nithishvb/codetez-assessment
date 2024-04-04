import React from "react";

type WorkflowShapeProps = {
  shape: string;
  text: string;
};

const WorkflowShape = ({ shape, text }: WorkflowShapeProps) => {
  let shapeStyle: React.CSSProperties;
  let textStyle: React.CSSProperties;

  switch (shape) {
    case "circle":
      shapeStyle = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
      };
      break;
    case "rectangle":
      shapeStyle = {
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
      };
      break;
    case "pentagon":
      shapeStyle = {
        width: "0",
        height: "0",
        borderBottom: "150px solid lightblue",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        position: "relative" as "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
      };
      break;
    case "hexagon":
      shapeStyle = {
        width: "100px",
        height: "55px",
        backgroundColor: "lightblue",
        position: "relative" as "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        color: "darkblue",
      };
      break;
    case "octagon":
      shapeStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
      };
      break;
    default:
      shapeStyle = {};
  }

  return (
    <div style={shapeStyle}>
      <span>{text}</span>
    </div>
  );
};

export default WorkflowShape;
