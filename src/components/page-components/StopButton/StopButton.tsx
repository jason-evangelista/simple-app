import { CSSProperties, FC, useRef, useState } from 'react'

type ButtonProps = {
  size: {
    height: number
    width: number
  }
  color: string
}

const btnDefault: ButtonProps = {
  color: '#e9e9ed',
  size: {
    width: 0,
    height: 0,
  },
}

const StopButton: FC = () => {
  const [btn, setBtn] = useState<ButtonProps>(btnDefault)
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    setBtn({
      color: `#${randomColor}`,
      size: {
        height: btn.size.height + 2,
        width: btn.size.width + 2,
      },
    })
  }

  const btnWidth = btnRef.current?.clientWidth! + btn.size.width
  const btnHeight = btnRef.current?.clientHeight! + btn.size.height

  const btnStyle: CSSProperties = {
    backgroundColor: btn?.color,
    width: `${btnWidth}px`,
    height: `${btnHeight}px`,
    whiteSpace: 'nowrap',
  }

  return (
    <div>
      <button ref={btnRef} onClick={handleClick} style={btnStyle}>
        STOP BUTTON
      </button>
    </div>
  )
}

export default StopButton
