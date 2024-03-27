// Exemplo request PUT:
class ExemploRequest {
    updateAccount(name, email, password) {
      const body = {
        "name": name,
        "email": email,
        "password": password
      }
      return cy.request({
        method: 'PUT',
        url: '/api/updateAccount',
        headers: {
          Authorization: Cypress.env('token_admin'), // Correção aqui
          'Content-Type': 'application/json'
        },
        body: body,
      });
    }
  }
  
  export default new ExemploRequest();