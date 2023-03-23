import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "entities/Profile/model/selectors/getProfileError/getProfileError";
import {Text} from "shared/ui/Text/Text";
import {Button} from "shared/ui/Button/Button";
import {ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { 
    className 
  } = props
  
  const {t} = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Surname')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
