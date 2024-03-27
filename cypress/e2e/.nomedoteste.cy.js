import LoginPage from '../../../support/page-objects/login'

describe('Agrupa os test cases', () => {
  beforeEach(() => {
	   cy.login(Cypress.env('user_admin'), Cypress.env('senha'))
  });

  it('Test case', () => {
     cy.visit('/Carrinho') //redireciona diretamente para a tela de Carrinho com o usuário logado
  });

  it('Test case', () => {
      cy.visit('/Menu') //acessa com o usuário admin

// caso queira acessar com outro usuário:
     cy.login(Cypress.env('user_visitante'), Cypress.env('senha')) 
     cy.visit('/Menu')
//não é preciso fazer logout pois o comando cy.session apaga e restaura automaticamente a sessão ativa
  });
  it('Teste', () => {
    
  });
});