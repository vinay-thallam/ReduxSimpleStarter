import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const average = data => {
	return Math.round(data.reduce((sum,datum) => sum+datum)/data.length)
}

export default props => {
	return (
		<div>
			<Sparklines data={props.data} width={50} height={25}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}