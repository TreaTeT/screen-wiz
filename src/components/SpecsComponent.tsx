import React from "react";
import { ISpecs as IProps } from "../types";
import "../App.css";

const SpecsComponent = (specs: IProps): JSX.Element => {
  return (
    <div>
      <table style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <td colSpan={2}>SCREEN</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screen Width(m)</td>
            <td>{Math.round(specs.SW_m * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Height(m)</td>
            <td>{Math.round(specs.SH_m * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Width(ft)</td>
            <td>{Math.round(specs.SW_ft * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Height(ft)</td>
            <td>{Math.round(specs.SH_ft * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Width(inch)</td>
            <td>{Math.round(specs.SW_in * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Height(inch)</td>
            <td>{Math.round(specs.SH_in * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Area (m2)</td>
            <td>{Math.round(specs.SA_m * 100) / 100}</td>
          </tr>
          <tr>
            <td>Screen Area (ft2)</td>
            <td>{Math.round(specs.SA_ft * 100) / 100}</td>
          </tr>
          <tr>
            <td>Diagonal Display Size (m)</td>
            <td>{Math.round(specs.DDS_m * 100) / 100}</td>
          </tr>
          <tr>
            <td>SDiagonal Display Size(inch)</td>
            <td>{Math.round(specs.DDS_in * 100) / 100}</td>
          </tr>

          <tr>
            <td>Aspect Ratio</td>
            <td>{`(${specs.AspectRatio[0]}:${specs.AspectRatio[1]})`}</td>
          </tr>

          <tr>
            <td>Cabinets Horizontally(pcs)</td>
            <td>{specs.CH}</td>
          </tr>
          <tr>
            <td>Cabinets Vertically(pcs)</td>
            <td>{specs.CV}</td>
          </tr>

          <tr>
            <td>Total Cabinets for screen(pcs)</td>
            <td>{specs.TC}</td>
          </tr>

          <tr>
            <td>Screen Horizontal Resolution(px)</td>
            <td>{specs.SHR}</td>
          </tr>

          <tr>
            <td>Screen Vertical Resolution(px)</td>
            <td>{specs.SVR}</td>
          </tr>
          <tr>
            <td>Screen Total Resolution(px)</td>
            <td>{specs.STR}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecsComponent;
