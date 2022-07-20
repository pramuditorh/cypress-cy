describe('test coba coab', () => {
  it('google video', () => {
          cy.visit('https://google.com')
          cy.get('.gLFyf').type('csgo moment{enter}')
          cy.contains('Video').click()
  })
  it('test login github', () => {
          cy.visit('https://github.com')
          cy.contains('Sign up').click()
          cy.contains('Sign in').click()
          cy.get('#login_field').type('pramuditorh')
          cy.get('#password').type('Doraguniru1234')
          cy.get('.btn').click()
  })
  it('google video 2', () => {
          cy.visit('https://google.com')
          cy.get('.gLFyf').type('dota 2 the international best moment{enter}')
          cy.contains('Video').click()
  })
})