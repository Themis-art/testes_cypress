// Exemplo request DELETE:
class ExemploRequest {
    deleteAccount(email, password) {
      const body = {
        "email": email,
        "password": password,
      }
      return cy.request({
        method: 'DELETE',
        url: '/api/deleteAccount',
        headers: {
          Authorization: Cypress.env('token_admin'), // Correção aqui
          'Content-Type': 'application/json'
        },
        body: body,
      });
    }
  }

  export default new ExampleRequest();