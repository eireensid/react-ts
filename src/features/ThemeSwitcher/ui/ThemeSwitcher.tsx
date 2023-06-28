import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import React, { memo } from 'react'
import Icon from '@/shared/assets/icons/theme.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

export enum IconTheme {
  PRIMARY = 'light',
  SECONDARY = 'dark'
}

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
})
