class ExampleRequest {

    // GET Request Example
    getUsers() {
      return cy.request({
        method: 'GET',
        url: 'rest/admin/user/0',
        headers: {
          Authorization: Cypress.env('token_admin'),
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false // Optional: Set to true for stricter error handling
      });
    }
  
    // substituir 'token_admin' pelo token de autorização real que você deseja usar nos testes. 
  
  }
  
  export default new ExampleRequest();