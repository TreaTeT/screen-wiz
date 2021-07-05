import React, { RefCallback } from "react";
import gridCellImage from "../assets/img/gridcell.png";

interface IProps {
  width: number;
  height: number;
  referencia: RefCallback<HTMLImageElement>;
}

const GridCell = (props: IProps) => {
  return (
    <img
      ref={props.referencia}
      className="gridcell"
      src={gridCellImage}
      alt="grid cell"
      style={{
        maxWidth: "100%",
        width: "120px",
        maxHeight: "68px",
        height: "auto",
      }}
    />
  );
};

export default GridCell;
