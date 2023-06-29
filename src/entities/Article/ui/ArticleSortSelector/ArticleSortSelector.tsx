import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, type SelectOption } from '@/shared/ui/Select'
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

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('Asc')
    },
    {
      value: 'desc',
      content: t('Desc')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
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

  return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('SortBy')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('By')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
  )
})
