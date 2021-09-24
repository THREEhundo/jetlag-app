import React from "react";

export const AxisBottom = ({ xScale, innerHeight }) =>
  xScale.ticks().map((tickValue, i) => (
    <g key={i} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} stroke="black" />
      <text style={{ textAnchor: "middle" }} y={innerHeight + 3} dy={".71em"}>
        {tickValue}
      </text>
    </g>
  ));
