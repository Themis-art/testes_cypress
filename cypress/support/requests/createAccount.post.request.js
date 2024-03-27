// Exemplo de request POST:
class ExemploRequest {
    createAccount(name, email, password) {
      const body = {
        "name": name,
        "email": email,
        "password": password
      }
      return cy.request({
        method: 'POST',
        url: '/api/createAccount',
        headers: {
          Authorization: Cypress.env('token_admin'), // Correção aqui
          'Content-Type': 'application/json'
        },
        body: body,
      });
    }
  }

  export default new ExampleRequest();