import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import React, { type ReactNode } from 'react'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props

  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const { theme } = useTheme()

  if (lazy && !isMounted) {
    return null
  }

  return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
              <Overlay onClick={close} />
              <div
                  className={cls.content}
              >
                  {children}
              </div>
            </div>
        </Portal>
  )
}
