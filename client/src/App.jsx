import React, { useState } from 'react'

const App = () => {
  const[num,setNum] = useState(0)
  const changeValue = () => {
    setNum(num+1);
  }
  return (
    <>
      <div className="text-3xl text-red-600 p-20 m-20 bg-zinc-800">{num}</div>
    <button onClick={changeValue}>click me</button>
    </>

  )
}

export default App