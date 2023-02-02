import React, { useState } from "react";

function MyCount() {
  //변수와 변수를 설정해주는함수. 아래 setCount 로만 count 변경 가능. 
  const [count, setCount] = useState(0);
  
  return (
    <div className="MyCount">
		  <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default MyCount;