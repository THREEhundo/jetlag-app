import React from "react";

export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue, i) => (
    <text
      key={i}
      style={{ textAnchor: "end" }}
      x={-3}
      y={yScale(tickValue) + yScale.bandwidth() / 2}
    >
      {tickValue}
    </text>
  ));
