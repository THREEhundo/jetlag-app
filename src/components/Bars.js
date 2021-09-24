import React from "react";
import "../App.css";

export const Bars = ({ data, xScale, yScale, xValue, yValue, tooltipFormat }) =>
  data.map((d, i) => (
    <rect
      className="bar"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));
