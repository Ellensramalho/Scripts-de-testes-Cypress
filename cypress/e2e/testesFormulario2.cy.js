describe('Visitar formulário', () => {
  beforeEach(() => {
    cy.visit('https://formulario-para-testes-com-cypress.vercel.app/')
  })

  it('Verificar título da página', () => {
  cy.contains('h1', 'Formulário para testes').should('be.visible')
})
//O campo de senha deve aceitar no máximo 15 caracteres
  it.only('Validar número máximo de caracteres na senha', () => {
    cy.get('#senha').type('testandotamanhomaximo')
    cy.get('#senha').should('have.attr', 'maxlength', '15')

  })

})
