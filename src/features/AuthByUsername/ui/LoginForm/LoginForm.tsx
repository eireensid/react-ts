import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const {
    className
  } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autoFocus
        type="text"
        placeholder={t('EnterUsername')}
        className={cls.input}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('EnterPassword')}
      />
      <Button
        className={cls.loginBtn}
      >
        {t('SignIn')}
      </Button>
    </div>
  )
}
