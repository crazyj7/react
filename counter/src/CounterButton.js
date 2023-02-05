import React from "react"
import { useDispatch, useSelector } from "react-redux"

export default function CounterButton() {
	const dispatch = useDispatch() ;
	const s = useSelector( (state)=>state) ;

	return (
		<div>
			<h1>{s.weight}</h1>
			<button onClick={
				() => {
					dispatch( { type: 'increase', payload: {diff:5}}) ;
				}
			}>increase</button>
			<button onClick={
				() => {
					dispatch( { type: 'decrease', payload: {diff:5}}) ;
				}
			}>decrease</button>
		</div>
	)
}
