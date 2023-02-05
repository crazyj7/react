import React from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
	const s = useSelector( (state) => state ) ;
	const weight = s && s.weight ;
	const dispatch = useDispatch() ;


	return (
		<div>
			<input type="number" value={weight}
				onChange={ (e) => {
					dispatch( { type: 'set', payload : { weight: e.target.value }})
				}}/>
		</div>
	);

}