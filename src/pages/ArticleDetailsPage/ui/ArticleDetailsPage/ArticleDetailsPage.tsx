import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { useDispatch, useSelector } from 'react-redux'
import {
  getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice'
import {
  getArticleCommentsIsLoading
} from '../../model/selectors/comments'
import {
  DynamicModuleLoader, type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import {
  addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import {
  getArticleRecommendations
} from '../../model/slices/articleDetailsPageRecommendationsSlice'
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { articleDetailsPageReducer } from '../../model/slices'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              {t('ArticleNotFound')}
          </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
              {t('BackToList')}
            </Button>
            <ArticleDetails id={id} />
            <Text
              size={TextSize.L}
              className={cls.commentTitle}
              title={t('Recommend')}
            />
            <ArticleList
              articles={recommendations}
              isLoading={recommendationsIsLoading}
              className={cls.recommendations}
              target="_blank"
            />
            <Text className={cls.commentTitle} title={t('Comments')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
              isLoading={commentsIsLoading}
              comments={comments}
            />
        </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
