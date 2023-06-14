import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import React, { type InputHTMLAttributes, memo } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'autoFocus' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
  withoutBorder?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    withoutBorder = false,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Optional chaining - если props не передан, ф-я вызвана не будет
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.withoutBorder]: withoutBorder
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        autoFocus={autoFocus}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  )
})
