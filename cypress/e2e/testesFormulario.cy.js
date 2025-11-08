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
    cy.get('label[for="feminino"]').click()
    cy.get("#opcoes").select('opcao2')
    // Subir arquivo 
      cy.get('#arquivo').attachFile('Gato.jpg')

      //Nível de sastifação
       cy.get('#nivelSatisfacao')
      .invoke('val', 8)
      .trigger('input') 

      cy.get('#site').type('https://dados.com')

      //Selecionar mais de uma linguagem de programação
      cy.get('input[name="linguagens"]').check(['JavaScript', 'Python'])

      cy.get('#comentarios').type('Este é um comentário de teste.')

      cy.get('#termos').check()

      cy.get('button[type="submit"]').click()
  })
})
  