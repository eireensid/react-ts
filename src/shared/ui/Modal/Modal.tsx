import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import React, {
  type ReactNode, useCallback, useEffect, useRef, useState
} from 'react'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'

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

  const [isOpening, setIsOpening] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        setIsOpening(true)
      }, 0)
      setIsMounted(true)
    }
    return () => {
      setIsOpening(false)
      clearTimeout(timerRef.current)
      setIsMounted(false)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  // Новые ссылки!!!
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Mods = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing
  }

  const { theme } = useTheme()

  if (lazy && !isMounted) {
    return null
  }

  return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
              <Overlay onClick={closeHandler} />
              <div
                  className={cls.content}
              >
                  {children}
              </div>
            </div>
        </Portal>
  )
}
