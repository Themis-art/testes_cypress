const el = require('./elements').ELEMENTS

class LoginPage {
    fazerLogin(nome, senha) {
        cy.get(el.inputNome).type(nome)
        cy.get(el.inputSenha).type(senha) 
        cy.get(el.btnLogin).click()
    }
}
export default new LoginPage