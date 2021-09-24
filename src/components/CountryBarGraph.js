import React from "react";
import { max } from "d3-array";
import { scaleBand, scaleLinear } from "d3-scale";
import useWindowWidth from "./useWindowWidth";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Bars } from "./Bars";

const CountryBarGraph = () => {
  const data = useData();
  // const [windowWidth, setWindowWidth] = useState(undefined);
  let height = 500,
    width = useWindowWidth(),
    margin = { top: 50, left: 100, right: 100, bottom: 50 },
    innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  const yScale = scaleBand().domain(data.map(yValue)).range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />

        <AxisLeft yScale={yScale} />

        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
};

export default CountryBarGraph;
