describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
        cy.intercept('POST','https://adopet-api-i8qu.onrender.com./adopet/login', {
          statusCode:400, }).as('stubPost')
        })

    it('Verifica mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })    

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('ana@email.com','Senha123')
      cy.wait('@stubPost')
      cy.contains('Falha no login consulte suas credenciais.').should('be.visible')
    })
  })