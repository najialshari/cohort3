import { useState } from "react"
import './ColorPicker.css'

const ColorPicker = () => {
    const [colors, setColors] = useState([])
    const addColor = () => {
        const newColor = document.getElementById('color').value
        if (newColor) {
            setColors([...colors, newColor])
        }
    }
    return (
        <div className="mt-5 d-flex align-items-center flex-column">
            <h2>Please select your favorit 4 colors</h2>
            <input type='color' id='color' />
            <input type='button' value='Add Color' onClick={addColor} disabled={colors.length === 4} />
            <div className="mt-5 d-flex">
                {colors.map((color, i) => {
                    return <div key={i} className='colorCircle' style={{background: color}}></div>
                })}
            </div>
        </div>
    )
}

export default ColorPicker