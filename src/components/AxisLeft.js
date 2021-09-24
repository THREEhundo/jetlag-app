import React from "react";

export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <g className="tick" key={tickValue}>
      <text
        style={{ textAnchor: "end" }}
        x={-3}
        y={yScale(tickValue) + yScale.bandwidth() / 1.5}
      >
        {tickValue}
      </text>
    </g>
  ));
