import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props

  return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
          <ArticleList articles={[]} />
        </div>
  )
}

export default memo(ArticlesPage)
