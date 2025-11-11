describe('Visitar formulário', () => {
    beforeEach(() => {
        cy.visit('https://formulario-para-testes-com-cypress.vercel.app/')
    })

    it('Verificar título da página', () => {
        cy.contains('h1', 'Formulário para testes').should('be.visible')
    })
    //O campo de senha deve aceitar no máximo 15 caracteres
    it('Validar número máximo de caracteres na senha', () => {
        cy.get('#senha').type('testandotamanhomaximo')
        cy.get('#senha').should('have.attr', 'maxlength', '15')

    })
    // O campo de email não deve aceitar letras maíusculas.
    it('Validar se o campo de email não aceita letras maíusculas', () => {
        cy.get('#email').type('USUARIO@GMAIL.COM')
            .invoke('val')
            .should('eq', 'usuario@gmail.com')
    })

    it('Verificar se o campo de telefone aceita apenas números', () => {
        cy.get('#telefone')
            .type('abc!@#(83)99999-9999xyz')
            .invoke('val')
            .should('eq', '(83)99999-9999') // verifica que só sobrou o permitido
    })
})