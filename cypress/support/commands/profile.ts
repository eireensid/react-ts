
export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: 'http://localhost:8000/profile/' + profileId,
    headers: { authorization: 'gg' },
    body: {
      id: '4',
      first: 'testuser',
      lastname: 'user',
      age: 25,
      currency: 'RUB',
      country: 'Russia',
      city: '',
      username: 'testuser',
      avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}