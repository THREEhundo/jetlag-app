import React from "react";
import "../../App.css";
import { format, scaleBand, scaleLinear, max } from "d3";
import useWindowWidth from "../hooks/useWindowWidth";
import { useData } from "../hooks/useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Bars } from "./Bars";

const CountryBarGraph = () => {
  const data = useData();

  let height = 500,
    width = useWindowWidth() - 160,
    margin = { top: 20, left: 220, right: 20, bottom: 80 },
    innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right,
    xAxisOffset = 50;

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  const siFormat = format(".2s");
  const xAxisTickFormat = (n) => siFormat(n).replace("G", "B");

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          textAnchor="middle"
          x={innerWidth / 2}
          y={innerHeight + xAxisOffset}
        >
          Population
        </text>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};

export default CountryBarGraph;
