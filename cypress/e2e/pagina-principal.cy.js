describe('Página Principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verficar mensagens na página principal', () => {
      cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
      cy.contains('Quem ama adota').should('be.visible');
    })
  })