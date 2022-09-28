import { FC, FormEvent, useMemo, useState } from 'react'
import contentStyle from '@styles/content.module.css'

type InputEvent = FormEvent<HTMLInputElement>

type InputField = {
  firstNumber: number
  secondNumber: number
}

const inputValuedefaultValue: InputField = {
  firstNumber: 0,
  secondNumber: 0,
}

const SimpleCalculatorPage: FC = () => {
  const [inputValue, setInputValue] = useState<InputField>(
    inputValuedefaultValue
  )

  const sum = useMemo(() => {
    const { firstNumber, secondNumber } = inputValue
    return firstNumber + secondNumber
  }, [inputValue])

  const handleFirstInput = (e: InputEvent) =>
    setInputValue({
      ...inputValue,
      firstNumber: Number(e.currentTarget.value),
    })

  const handleSecondInput = (e: InputEvent) =>
    setInputValue({
      ...inputValue,
      secondNumber: Number(e.currentTarget.value),
    })

  const handleReset = () => setInputValue(inputValuedefaultValue)

  return (
    <div className={contentStyle['main-container']}>
      <div className={contentStyle['first-content']}>
        <input
          onInput={(e) => handleFirstInput(e)}
          placeholder="First number"
          className={contentStyle['input-style']}
        />
        <input
          placeholder="Second number"
          onInput={(e) => handleSecondInput(e)}
          className={contentStyle['input-style']}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h1>{sum}</h1>
      </div>
    </div>
  )
}

export default SimpleCalculatorPage
