describe('Página de cadastro', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-iota.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })   
      it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
          cy.login('Marjorie Anoquevem','ana@email.com', 'Senha123')  
  })
})

describe('Ver pets disponíveis para adoção', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })
})

describe('Botões home', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
  })
})

describe('Ver pets disponíveis para adoção', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.get('.header__message').click()
  })
})