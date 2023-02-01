import React from 'react'

const TernaryOperator = () => {
    const age = 15;
    const isRed = true;

  return (
    <div>
        {/* Ternary operator */}
        <h1>{age >= 18 ? <h1>I can vote</h1> : <h1>I can't vote</h1>}</h1>

        {/* Boolean Value */}
        <p style={{color: isRed ? "red" : "green"}}> Nice to meet you</p>

        {isRed && <button>Hello</button>}
    </div>
  )
}

export default TernaryOperator