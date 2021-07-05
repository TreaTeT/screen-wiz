import React, { ReactNode } from "react";
import GridCell from "./components/GridCell";
import SpecsComponent from "./components/SpecsComponent";
import gridGirlImage from "./assets/img/gridgirl.png";
import "./App.css";
import { ISpecs } from "./types";
import useResizeObserver from "use-resize-observer";

function App() {
  const {
    ref,
    width = 120,
    height = 64,
  } = useResizeObserver<HTMLImageElement>(); // observer na sledovanie zmensovania jednotlivych casti gridu aby som podla toho mohol nastavit velkost osoby vedla gridu
  const [gridWidth, setGridWidth] = React.useState<number>(5);
  const [gridWidthInputValue, setGridWidthInputValue] =
    React.useState<string>("5");
  const [gridHeightInputValue, setGridHeightInputValue] =
    React.useState<string>("4");
  const [gridHeight, setGridHeight] = React.useState<number>(4);
  const [grid, setGrid] = React.useState<ReactNode[]>([]); // samotny grid reprezentovany ako pole divov v ktorom kazdy div obsahuje pole cabinetov
  const [specs, setSpecs] = React.useState<ISpecs>(); //  state pre udaje o obrazovke

  React.useEffect(() => {
    generateGrid(gridWidth, gridHeight);
    calculateSpecs(gridWidth, gridHeight, {
      CW_mm: 600,
      CH_mm: 337.5,
      CHR: 384,
      CVR: 216,
    });
  }, []);

  /* funkcia na ziskanie najvacsieho spolocneho delitela */
  const getGCD = (width: number, height: number): number => {
    if (!height) {
      return width;
    }
    return getGCD(height, width % height);
  };

  /* funkcia na prepocitanie udajov o obrazovke */
  const calculateSpecs = (
    width: number,
    height: number,
    cabinetSpecs: { CW_mm: number; CH_mm: number; CHR: number; CVR: number }
  ) => {
    let { CW_mm, CH_mm, CHR, CVR } = cabinetSpecs;
    let SW_m = (CW_mm * width) / 1000;
    let SH_m = (CH_mm * height) / 1000;
    let SA_m = SW_m * SH_m;
    let DDS_m = Math.sqrt(Math.pow(SW_m, 2) + Math.pow(SH_m, 2));
    let gcd = getGCD(width * CHR, height * CVR);

    setSpecs({
      SW_m,
      SH_m,
      SW_ft: SW_m * 3.28,
      SH_ft: SH_m * 3.28,
      SW_in: SW_m * 39.37,
      SH_in: SH_m * 39.37,
      SA_m,
      SA_ft: SA_m * 10.76,
      DDS_m,
      DDS_in: DDS_m * 39.37,
      AspectRatio: [(width * CHR) / gcd, (height * CVR) / gcd],
      CH: width,
      CV: height,
      TC: width * height,
      SHR: width * CHR,
      SVR: height * CVR,
      STR: width * CHR * (height * CVR),
    });
  };

  /* funkcia na vygenerovanie gridu */
  const generateGrid = (width: number, height: number) => {
    let tempGrid: ReactNode[] = [];
    for (let i = 0; i < width; i++) {
      let tempColumn: ReactNode[] = [];
      for (let j = 0; j < height; j++) {
        tempColumn.push(
          <GridCell referencia={ref} width={width} height={height} />
        );
      }
      tempGrid.push(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {tempColumn}
        </div>
      );
    }
    setGrid(tempGrid);
  };

  const handleGridChange = () => {
    if (
      gridWidth > 0 &&
      gridWidth <= 300 &&
      gridHeight > 0 &&
      gridHeight <= 300
    ) {
      console.log(
        `called handle Grid Change with width: ${gridWidth}} adn height: ${gridHeight}`
      );
      generateGrid(gridWidth, gridHeight);
      calculateSpecs(gridWidth, gridHeight, {
        CW_mm: 60,
        CH_mm: 337.5,
        CHR: 384,
        CVR: 216,
      });
    }
  };

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGridWidthInputValue(e.target.value);
            if (e.target.value) {
              setGridWidth(parseInt(e.target.value));
            }
          }}
          // onBlur={handleGridChange}
          onKeyUp={handleGridChange}
          onClick={handleGridChange}
          value={gridWidthInputValue}
          min={1}
          max={300}
        />
        <input
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGridHeightInputValue(e.target.value);
            if (e.target.value) {
              setGridHeight(parseInt(e.target.value));
            }
          }}
          // onBlur={handleGridChange}
          onKeyUp={handleGridChange}
          onClick={handleGridChange}
          value={gridHeightInputValue}
          min={1}
          max={300}
        />
      </div>

      <div className="gridContainer">
        <div className="grid">
          {console.log(height)}
          <img
            id="gridGirl"
            src={gridGirlImage}
            alt="grid girl"
            style={{
              width: "auto",
              maxHeight: "350px",
              height: `${Math.round(height) * 5.15}px`,
            }}
          />
          {grid.map((item) => item)}
        </div>
      </div>
      {specs && <SpecsComponent {...specs} />}
    </div>
  );
}

export default App;
