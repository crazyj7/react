import React from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
	// 스토어를 뽑아온다. 
	const s = useSelector( (state) => state ) ;
	const weight = s && s.weight ;

	// 디스패처를 가져오낟. (reducer 호출)
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