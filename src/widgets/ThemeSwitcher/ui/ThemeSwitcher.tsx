import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Icon from 'shared/assets/icons/theme.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export enum IconTheme {
  PRIMARY = 'light',
  SECONDARY = 'dark'
}

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <Icon className={cls.ico} />
    </Button>
  )
}
