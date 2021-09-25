import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";

const countryURL =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv";

const sanFranciscoURL =
  "https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/week_temperature_sf.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"] * 1000; // + is shorthand for parse float string -> num
      return d;
    };
    csv(countryURL, row)
      .then((data) => setData(data.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return data;
};

export const useSFData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);
      return d;
    };
    csv(sanFranciscoURL, row).then(setData);
  }, []);

  return data;
};
