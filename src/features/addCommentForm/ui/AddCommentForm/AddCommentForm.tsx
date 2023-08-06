import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  DynamicModuleLoader, type ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  addCommentFormActions, addCommentFormReducer
} from '../../model/slices/addCommentFormSlice'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import cls from './AddCommentForm.module.scss'
import { HStack } from '@/shared/ui/Stack'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation('article')
  const text = useSelector(getAddCommentFormText)
  // const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack data-testid={'AddCommentForm'}
              justify={'between'} max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    data-testid={'AddCommentForm.Input'}
                    className={cls.input}
                    placeholder={t('EnterComment')}
                    value={text}
                    onChange={onCommentTextChange}
                    withoutBorder={true}
                />
                <Button
                    data-testid={'AddCommentForm.Button'}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
  )
})

export default AddCommentForm
