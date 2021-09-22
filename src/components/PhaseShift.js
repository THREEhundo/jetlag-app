// // import { line } from 'd3-shape';
// import React from 'react';


// /**
//  * @param user
//  * 
//  * TODO [] CREATE CALENDAR?
//  * TODO [] CREATE ICONS
//  * TODO [] GET TODAY'S DATE
//  * TODO [] GET THE DATE NEEDED TO CHANGE SLEEPING SCHEDULE
//  * TODO [] CALCULATE WHETHER PHASE DELAY OR ADVANCE IS NEEDED BY TIME ZONE
//  * TODO [] CALCULATE WHEN THE START DATE FOR THE PHASE ADVANCE/DELAY IS NEEDED
//  * TODO [] 
//  * ! Set all your servers’ time zone to UTC.
//  * ! Always use the Server’s time to fill up metadata like created, edited, posted etc.
//  * ! Always store the datetime in UTC time zone.
//  * ! While displaying the datetime to the user, convert it to their local time zone at the application layer.
//  * ! Never use timestamps to store past or future.
//  * ! Try to use datetime format instead of timestamps as it makes visual debugging easy. With timestamp, you have to convert from seconds to date but datetime is like a string. So, if you find yourself accessing the raw values for debugging, then try to use datetime. 
//  * 
//  */

// /**
//  * user
//  * user.tempMin = number
//  * user.sleepTimeArr = array
//  * user.localTime = number
//  * user.destinationTime = number
//  * user.phaseShift = string
//  * user.lightProtocol = string
//  * 
//  * home city input
//  * destination city input
//  * last 3 nights sleep time inputs
//  * 
//  * 
//  * take off time 
//  * landing time
//  * sleep bar
//  * viewing light bar
//  * minimize light bar
//  * 
//  * 
//  * 
//  * change can only happen during the 6 hours prior and after your temperature minimum
//  * need to keep track of temp min @ home
//  * 
//  * 
//  * Steps
//  * 1. Get local city
//  * 2. Get destination city
//  * 3. Get departure & arrival dates & times
//  * . Give option of either usual wake up time or last 3 wake up times.
//  * 
//  * 
//  * 
//  * 
//  */ 



// export const PhaseShift = () => {
// 	const points = [
//     // {timePlot: 1, time: "6PM", shift: 0, visible: true},
// 		// 	{time: "7PM", shift: -0.5, visible: false},
// 		// 	{time: "8PM", shift: -1, visible: false},
//     // {timePlot: 3, time: "9PM", shift: -1.5 , visible: true},
// 		// 	{time: "10PM", shift: -2.7, visible: false},
// 		// 	{time: "11PM", shift: -2.7, visible: false},
//     // {timePlot: 5, time: "12AM", shift: -3.5, visible: true},
// 		// 	{time: "1AM", shift: -2.7, visible: false},
// 		// 	{time: "2AM", shift: -2.7, visible: false},
//     // {timePlot: 6, time: "3AM", shift: -3.5, visible: true},
// 		// 	{time: "4AM", shift: -2.7, visible: false},
// 		// 	{time: "5AM", shift: -2.7, visible: false},
// 		// {timePlot: 7, time: "6AM", shift: 0, visible: true},
// 		// 	{time: "7AM", shift: -2.7, visible: false},
// 		// 	{time: "8AM", shift: -2.7, visible: false},
// 		// {timePlot: 8, time: "9AM", shift: 3.6, visible: true},
// 		// 	{time: "10AM", shift: -2.7, visible: false},
// 		// 	{time: "11AM", shift: -2.7, visible: false},
//     // {timePlot: 9, time: "12PM", shift: 4, visible: true},
// 		// 	{time: "1PM", shift: -2.7, visible: false},
// 		// 	{time: "2PM", shift: -2.7, visible: false},
//     // {timePlot: 10, time: "3PM", shift: 2, visible: true},
// 		// 	{time: "4PM", shift: -2.7, visible: false},
// 		// 	{time: "5PM", shift: -2.7, visible: false},
//     // {timePlot: 11, time: "6PM", shift: 0, visible: true},
		
// 		// {shift: 2, time: 0},
// 		// {shift:0, time: 3},
// 		// {shift: 0, time: 6},
// 		// {shift: -1, time: 12},
// 		// {shift: -3, time: 14},
// 		// {shift: 4, time: 20},
// 		// {shift: 2, time: 24},
		
//     {time: "6PM", shift: 0},
//     {time: "9PM", shift: -1.2},
//     {time: "12AM", shift: -3.1},
//     {time: "3AM", shift: -3.5},
//     {time: "6AM", shift: 0},
//     {time: "9AM", shift: 3.5},
//     {time: "12PM", shift: 4},
//     {time: "3PM", shift: 2},
//     {time: "6PM", shift: 0},
//     ];
	

// 	return (
// 		<ResponsiveContainer width={"100%"} height={450}>
// 		<LineChart width={600}
//       height={400}
//       data={points}
//       margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
// 			>
// 		 <XAxis 
// 			// dataKey="time" 
// 			// type="number"
// 			dataKey="time"
// 			tickLine={false}
// 			padding={{ right: 200, left: 200}}
// 			interval={0} 
// 			// unit={"AM"}
// 			// domain={["dataMin", "dataMax"]}
// 			// points={points}
// 			 />
// 		<YAxis tickLine={false} >
// 			<Label
// 						value={"Phase Advance →"}
// 						position="insideTopLeft"
// 						angle={-90}
// 						style={{ textAnchor: "end" }}
// 						offset="-6"
// 					/>
// 			<Label
// 				value={"← Phase Delay"}
// 				position="insideBottomLeft"
// 				angle={-90}
// 				style={{ textAnchor: "start" }}
// 			/>
// 		</YAxis>
// 		<Line 
// 				dataKey="shift" 
// 				name="Phase Shift" 
// 				unit={"x"} 
// 				// dot={false} 
// 				type={"natural"} 
// 				stroke="orange"
// 				strokeWidth="2px"
// 			/>
// 			{/* <CartesianGrid horizontal={false} />
// 			<ReferenceArea  x1={"3AM"} x2={"9AM"} y1={4} y2={-4} stroke="red" strokeOpacity={0.3} alwaysShow />
// 			<ReferenceLine y={0} strokeDasharray="3 3" />
// 			<ReferenceLine x="6AM" label="" strokeDasharray="3 3">
// 				<Label value="Temperature Minimum" offset={10} position="top" />
// 			</ReferenceLine>
// 			<Tooltip /> */}
// 			<Tooltip />
// 		</LineChart>
// 		{/* <LineChart
//       width={600}
//       height={400}
//       data={data}
//       margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
//     >
// 		<defs>
// 			<linearGradient 
// 				id="temperature" 
// 				x1="0%" 
// 				y1="100%" 
// 				x2="0%" 
// 				y2="0%"
// 			>
// 				<stop offset="0%" stopColor="#540d6e" />
// 				<stop offset="25%" stopColor="#c14bbb" />
// 				<stop offset="50%" stopColor="#ff0000" />
// 				<stop offset="75%" stopColor="#ff8317" />
// 				<stop offset="100%" stopColor="#ffdd21" />
// 			</linearGradient>
// 		</defs>
//       <XAxis 
// 			dataKey="time" 
// 			padding={{ left: 50, right: 50 }}
// 			tickLine={false}
// 			axisLine={false}
// 			// ticks={["6PM", "9PM", "12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM"]}
// 		/>
//       <YAxis padding={{ top: 50, bottom: 50 }} tickLine={false} >
//         <Label
//           value={"Phase Advance →"}
//           position="insideTopLeft"
//           angle={-90}
//           style={{ textAnchor: "end" }}
// 					offset="-6"
//         />
// 				<Label
//           value={"← Phase Delay"}
//           position="insideBottomLeft"
//           angle={-90}
//           style={{ textAnchor: "start" }}
//         />
//       </YAxis>
// 			<Tooltip />
//       <Line 
// 				dataKey="temperature" 
// 				name="Temperature" 
// 				unit={"°F"} 
// 				dot={false} 
// 				type={"monotone"} 
// 				stroke="url(#temperature)"
// 				strokeWidth="4px"
// 			/>
// 			<ReferenceArea  x1={"3AM"} x2={"9AM"} y1="4" y2="-4" strokeOpacity={0.3} alwaysShow />
// 			<ReferenceLine y={0} stroke="black" strokeDasharray="3 3" />
// 			{/* <ReferenceLine x="6AM" stroke="gold" strokeDasharray="7 7" >
// 				<Label value="Temperature Minimum" offset={10} position="top" />
// 			</ReferenceLine>
// 			<ReferenceLine x={"6AM"} stroke="red" strokeDasharray="7 7" alwaysShown />
// 			{/* <CartesianAxis x={200} y={2} />
// 			<CartesianGrid horizontal={false} vertical="false" />
//     </LineChart> */}
// </ResponsiveContainer>
// 	)
// }

// /**
//  * PHASE ADVANCE
//  * PHASE DELAY
//  * 
//  */


// // {
// // 	temp: 0
// // },
// // {
// // 	temp: "2 phase advance"
// // },
// // {
// // 	temp: -2
// // },
// // {
// // 	temp: -4
// // },
// // {
// // 	temp: 4
// // },
// // {
// // 	name: '6PM',
// // 	uv: 4000,
// // 	pv: 2400,
// // 	amt: 2400,
// // },
// // {
// // 	name: '7PM',
// // 	uv: 3000,
// // 	pv: 1398,
// // 	amt: 2210,
// // },
// // {
// // 	name: '8PM',
// // 	uv: 2000,
// // 	pv: 9800,
// // 	amt: 2290,
// // },
// // {
// // 	name: '9PM',
// // 	uv: 2780,
// // 	pv: 3908,
// // 	amt: 2000,
// // },
// // {
// // 	name: '10PM',
// // 	uv: 1890,
// // 	pv: 4800,
// // 	amt: 2181,
// // },
// // {
// // 	name: '11PM',
// // 	uv: 2390,
// // 	pv: 3800,
// // 	amt: 2500,
// // },
// // {
// // 	name: '12PM',
// // 	uv: 3490,
// // 	pv: 4300,
// // 	amt: 2100,
// // },
// // {
// // 	name: '1AM'
// // },
// // {
// // 	name: '2AM'
// // },
// // {
// // 	name: '3AM'
// // },
// // {
// // 	name: '4AM'
// // },
// // {
// // 	name: '5AM'
// // },
// // {
// // 	name: '6AM'
// // },
// // {
// // 	name: '7AM'
// // },
// // {
// // 	name: '8AM'
// // },
// // {
// // 	name: '9AM'
// // },
// // {
// // 	name: '10AM'
// // },
// // {
// // 	name: '11AM'
// // },
// // {
// // 	name: '12AM'
// // },
// // {
// // 	name: '1PM'
// // },
// // {
// // 	name: '2AM'
// // },
// // {
// // 	name: '3AM'
// // },
// // {
// // 	name: '4AM'
// // },
// // {
// // 	name: '5AM'
// // },