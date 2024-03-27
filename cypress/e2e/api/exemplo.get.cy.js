import ExemploRequest from '../../support/requests/exemplo/exemplo.request'

describe('Create Account', () => {
  it('should create an account with success', () => {
    ExemploRequest.getUsers().should((response) => {
      console.log(response.body)
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
    });
  });
});

