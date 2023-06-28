import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Select, type SelectOption } from '@/shared/ui/Select/Select'
import { ArticleSortField } from '../../model/consts/articleConsts'
import { type SortOrder } from '@/shared/types'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort
  } = props
  const { t } = useTranslation('article')

  const orderOptions = useMemo<SelectOption[]>(() => [
    {
      value: 'asc',
      content: t('Asc')
    },
    {
      value: 'desc',
      content: t('Desc')
    }
  ], [t])

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('DateOfCreation')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Name')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Views')
    }
  ], [t])

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('SortBy')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('By')}
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
  )
})
