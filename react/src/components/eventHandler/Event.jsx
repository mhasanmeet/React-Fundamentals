import React from 'react'
import { useState } from 'react'

const event = () => {
    
    // onClick()
    const handleClick = () => {
        console.log("Button clicked")
    }

    // onChange()
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

  return (
    <div>
        <div className="button">
            <button onClick={handleClick}>Button</button>
        </div>

        <div className="input">
            <input type="text" onChange={handleChange}/>
            Entered Text: {text}
        </div>
    </div>
  )
}

export default event