describe('Visitar formulário', () => {
  beforeEach(() => {
    cy.visit('https://formulario-para-testes-com-cypress.vercel.app/')
  })

  it.only('Prencher campos', ()  => {
    cy.get('#nome').type('Ellen Ramalho')
    cy.get('#email').type('dados@example.com')
    cy.get('#senha').type('senha123')
    cy.get('#telefone').type('(83) 12345-6789')
    cy.get('#idade').type('25')
    cy.get('#dataNasc').type('2025-11-04')
    
  })
})