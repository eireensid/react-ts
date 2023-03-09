import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import React, { type InputHTMLAttributes, memo } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'autoFocus'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Optional chaining - если props не передан, ф-я вызвана не будет
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...otherProps}
      />
    </div>
  )
})
