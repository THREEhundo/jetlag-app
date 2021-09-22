import React, { useEffect, useRef, useState } from 'react';
import d3, { csv } from "d3";
import { message } from './message';

const colorUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

export const PhaseResponseCurve = () => {
	const [colorData, colorDataSet] = useState();

	useEffect(() => {
		csv(colorUrl).then(data => {
			colorDataSet(data);
		})
	},[]);

	if(!colorData) {
		return <pre>Loading...</pre>
	}

	return (colorData.map((color, i) => 
	<div key={i} style={{
		fontSize: "5em", 
		backgroundColor: color["RGB hex value"], 
		width: "500px", 
		height: "10px"}}>

		</div>))
}
