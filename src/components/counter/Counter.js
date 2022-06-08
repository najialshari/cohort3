import { useEffect } from 'react'
import './Counter.css'

const Counter = () => {
    useEffect(() => {
        const counterInterval = setInterval(() => {
            console.log('Counter is running')
        }, 2000)

        return () => {
            console.log('Cleanup function')
            clearInterval(counterInterval)
        }
    })
    return (
        <div className="mt-5 d-flex justify-content-center align-items-center flex-column" id="counter">
            <h1>This is counter component</h1>
            <input type='button' value='Run Counter' />
        </div>
    )
}

export default Counter