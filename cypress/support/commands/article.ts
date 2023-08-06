import { Article } from '../../../src/entities/Article'

const defaultArticle = {
  title: 'Python news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://sun9-37.userapi.com/impg/vt-9QQJpLmTlFHcq_Pu5lZfr698TsTvqCoXYTQ/HSspBw8OVwI.jpg?size=900x900&quality=96&sign=' +
    '6534ff45ef9a5063ba9ee7528407a0ca&c_uniq_tag=9ImconWnWkRe5J8WVqPDfsPqlJZXMdCdPeilXGDvLkg&type=album',
  views: 5022,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'IT'
  ],
  blocks: []
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles/',
    headers: { authorization: 'gg' },
    body: article ?? defaultArticle
  }).then(resp => resp.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: 'http://localhost:8000/articles/' + articleId,
    headers: { authorization: 'gg' }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
