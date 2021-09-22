import { max } from "d3-array";
import { csv } from "d3-fetch";
import { scaleBand, scaleLinear } from "d3-scale";
import React, { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

const countryURL =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv";

const CountryBarGraph = () => {
  const [data, setData] = useState();
  // const [windowWidth, setWindowWidth] = useState(undefined);
  let height = 500,
    width = useWindowWidth(),
    margin = { top: 50, left: 100, right: 100, bottom: 50 },
    innerHeight = height - margin.top - margin.bottom,
    innerWidth = width - margin.left - margin.right;

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"]; // + is shorthand for parse float string -> num
      return d;
    };
    csv(countryURL, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue, i) => (
          <g key={i} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text
              style={{ textAnchor: "middle" }}
              y={innerHeight + 3}
              dy={".71em"}
            >
              {tickValue}
            </text>
          </g>
        ))}

        {yScale.domain().map((tickValue, i) => (
          <text
            key={i}
            style={{ textAnchor: "end" }}
            x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}

        {data.map((d, i) => (
          <rect
            key={i}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};

export default CountryBarGraph;
