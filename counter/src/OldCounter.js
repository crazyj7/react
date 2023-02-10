import React from "react"
import { useState } from "react"

export default function OldCounter() {
    
    const [height, setHeight] = useState(20)

	function onChangeH(e) {
		console.log('newvalue=', e.target.value)
		console.log('oldvalue=', height)
		setHeight(e.target.value)
	}

    return (
		<div>
			<input type="number" name="height" value={height}
				onChange={onChangeH}/>
			<span> {height} </span>
		</div>
    )
	/*
			// onChange 처리를 하지 않으면 값이 변경이 되지 않음!! 편집 불가.. 
			<input type="number" name="height" value={height}/>
	*/

}