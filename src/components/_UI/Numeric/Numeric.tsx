import React, { useState } from 'react'
import Button from '@ui/Button/Button'
import plus from '@src/assets/images/svg/plus.svg'
import minus from '@src/assets/images/svg/minus.svg'
import InlineSVG from 'react-inlinesvg'
import NumericCss from './Numeric.module.scss'

enum OperationVariant {
  PLUS,
  MINUS,
}

type NumericProps = {
  onIncrementNumber: (value: number) => void
  onDecrementNumber: (value: number) => void
}

const Numeric = ({ onIncrementNumber, onDecrementNumber }: NumericProps) => {
  const [value, setValue] = useState(0)

  const onHandleButtonClick = (variant: OperationVariant): void => {
    switch (variant) {
      case OperationVariant.PLUS: {
        setValue(value + 1)
        onIncrementNumber(value)
        break
      }
      case OperationVariant.MINUS: {
        if (value > 0) {
          setValue(value - 1)
          onDecrementNumber(value)
        }
        break
      }
      default:
        setValue(value)
    }
  }

  return (
    <div className={NumericCss.container}>
      <Button
        size="auto"
        variant="link"
        onClick={() => {
          onHandleButtonClick(OperationVariant.MINUS)
        }}
        disabled={value <= 0}
      >
        <InlineSVG
          title="Decrease value"
          src={minus}
          width={24}
          height={24}
          className={NumericCss.svgIcons}
        />
      </Button>
      <input
        className={NumericCss.input}
        type="number"
        value={value}
        disabled
      />
      <Button
        size="auto"
        variant="link"
        onClick={() => {
          onHandleButtonClick(OperationVariant.PLUS)
        }}
      >
        <InlineSVG
          title="Increase value"
          src={plus}
          width={24}
          height={24}
          className={NumericCss.svgIcons}
        />
      </Button>
    </div>
  )
}

export default Numeric
