import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import React from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Icon from 'shared/assets/icons/theme.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export enum IconTheme {
  PRIMARY = 'light',
  SECONDARY = 'dark'
}

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <Icon className={cls[theme]} />
    </Button>
  )
}
