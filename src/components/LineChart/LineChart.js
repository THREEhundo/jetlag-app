import React from "react";
import { useSFData } from "../hooks/useData";
import { timeFormat, scaleLinear, scaleTime, max, extent } from "d3";
import useWindowWidth from "../hooks/useWindowWidth";
import { AxisBottom } from "../BarChart/AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Line } from "./Line";

const LineChart = () => {
  const data = useSFData();

  let height = 500,
    width = useWindowWidth() - 100,
    margin = { top: 50, left: 50, right: 50, bottom: 50 },
    innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right,
    xAxisLabelOffset = 50,
    yAxisLabelOffset = 45;

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const xValue = (d) => d.timestamp;
  const xAxisLabel = "Time";

  const yValue = (d) => d.temperature;
  const yAxisLabel = "Temperature";

  const xAxisTickFormat = timeFormat("%a");

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          x={innerWidth / 2}
          transform={`translate(${-yAxisLabelOffset},${height}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Line
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={2}
        />
      </g>
    </svg>
  );
};

export default LineChart;
