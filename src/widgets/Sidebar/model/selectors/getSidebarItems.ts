import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import MainIcon from '@/shared/assets/icons/main-icon.svg'
import AboutIcon from '@/shared/assets/icons/about-icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg'
import ArticleIcon from '@/shared/assets/icons/article-icon.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'MenuMain'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'MenuAbout'
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'MenuProfile',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'MenuArticles',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
)
