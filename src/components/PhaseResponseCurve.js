import React, { useEffect, useRef, useState } from "react";
import { arc, csv, pie } from "d3";

const colorUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const width = 960,
  height = 500,
  centerX = width / 2,
  centerY = height / 2,
  colorPie = pie().value(1),
  pieArc = arc().innerRadius(0).outerRadius(width);

export const PhaseResponseCurve = () => {
  const [colorData, colorDataSet] = useState();

  useEffect(() => {
    csv(colorUrl).then((data) => {
      colorDataSet(data);
    });
  }, []);

  if (!colorData) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(colorData).map((color, i) => (
          <path key={i} fill={color.data["RGB hex value"]} d={pieArc(color)} />
        ))}
      </g>
    </svg>
  );
};
