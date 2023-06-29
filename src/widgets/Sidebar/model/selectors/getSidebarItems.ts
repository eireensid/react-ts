import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main-icon.svg'
import AboutIcon from '@/shared/assets/icons/about-icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg'
import ArticleIcon from '@/shared/assets/icons/article-icon.svg'
import { type SidebarItemType } from '../types/sidebar'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'MenuMain'
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'MenuAbout'
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userData.id),
          Icon: ProfileIcon,
          text: 'MenuProfile',
          authOnly: true
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'MenuArticles',
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
)
