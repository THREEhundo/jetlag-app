import React from "react";

export const Bars = ({ data, xScale, yScale, xValue, yValue }) =>
  data.map((d, i) => (
    <rect
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />
  ));
