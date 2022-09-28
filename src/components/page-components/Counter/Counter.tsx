import { FC, useState } from 'react'
import contentStyle from '@styles/content.module.css'

const Counter: FC = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => setCounter((c) => c + 1)
  const handleDecrement = () => {
    if (counter <= 0) return
    setCounter((c) => c - 1)
  }

  const handleReset = () => setCounter(0)
  const oddOrEven = counter % 2 === 0 ? 'Even' : 'Odd'

  return (
    <div className={contentStyle['main-container']}>
      <div className={contentStyle['first-content']}>
        <button onClick={handleIncrement}>Increment Number</button>
        <button onClick={handleDecrement}>Decrement Number</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h1>{counter}</h1>
        <h1>{oddOrEven}</h1>
      </div>
    </div>
  )
}

export default Counter
