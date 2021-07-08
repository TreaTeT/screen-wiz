import React from "react";

interface IProps {
  //   setInputValue: Function;
  setWidthValue: Function;
  gridUpdate: Function;
  widthValue: number;
  heightValue: number;
  setHeightValue: Function;
}

const UpDownInput = (props: IProps) => {
  return (
    <div
      style={{ display: "flex", margin: "0.5rem", justifyContent: "center" }}
    >
      <button
        style={{ padding: "0.2rem 0.5rem" }}
        onClick={(e) => {
          props.setWidthValue(props.widthValue - 1);
          props.gridUpdate(props.widthValue - 1, null);
        }}
      >
        -
      </button>
      <input
        type="text"
        style={{ width: "7rem" }}
        onChange={(e) => {
          props.setWidthValue(parseInt(e.target.value));
          props.gridUpdate(parseInt(e.target.value), null);
        }}
        value={props.widthValue}
      ></input>
      <button
        style={{ padding: "0.2rem 0.4rem" }}
        onClick={() => {
          props.setWidthValue(props.widthValue + 1);
          props.gridUpdate(props.widthValue + 1, null);
        }}
      >
        +
      </button>

      <button
        style={{ padding: "0.2rem 0.5rem" }}
        onClick={(e) => {
          props.setHeightValue(props.heightValue - 1);
          props.gridUpdate(null, props.heightValue - 1);
        }}
      >
        -
      </button>
      <input
        type="text"
        style={{ width: "7rem" }}
        onChange={(e) => {
          props.setHeightValue(parseInt(e.target.value));
          props.gridUpdate(null, parseInt(e.target.value));
        }}
        value={props.heightValue}
      ></input>
      <button
        style={{ padding: "0.2rem 0.4rem" }}
        onClick={() => {
          props.setHeightValue(props.heightValue + 1);
          props.gridUpdate(null, props.heightValue + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UpDownInput;
