import { csvFormat } from "d3";

export const message = data => {
	let msg = '';
	msg = msg + Math.round(csvFormat(data).length / 1024) + ' kb\n';
	msg = msg + data.length + ' rows\n';
	msg = msg + data.columns.length + ' columns\n';
	return msg;
};
