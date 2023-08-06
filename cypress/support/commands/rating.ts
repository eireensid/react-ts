export const setRating = (starsCount = 5, feedback = 'feedback') => {
  cy.getByTestId(`StarRating.${starsCount}`).click()
  cy.getByTestId('RatingCard.Input').type(feedback)
  cy.getByTestId('RatingCard.Send').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      setRating(starsCount: number, feedback: string): Chainable<void>
    }
  }
}
