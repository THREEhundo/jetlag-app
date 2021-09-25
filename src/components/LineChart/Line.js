import React from "react";
import { curveNatural, line } from "d3";
import "../../App.css";

export const Line = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) => (
  <g className="marks">
    <path
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveNatural)(data)}
    />
    {/* {data.map((d, i) => (
      <circle
        key={i}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))} */}
  </g>
);
