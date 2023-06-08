import type React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-icon.svg'
import AboutIcon from 'shared/assets/icons/about-icon.svg'
import ProfileIcon from 'shared/assets/icons/profile-icon.svg'
import ArticleIcon from 'shared/assets/icons/article-icon.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'MenuMain'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'MenuAbout'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'MenuProfile',
    authOnly: true
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'MenuArticles',
    authOnly: true,
  }
]
