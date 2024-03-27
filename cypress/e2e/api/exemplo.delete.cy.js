import ExemploRequest from '../../support/requests/exemplo/exemplo.request';

describe('Delete Account', () => {
  it('should delete an account with success', () => {
    const email = 'email@teste.com';
    const password = 'senha123';
    
    ExemploRequest.deleteAccount(email, password).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Account deleted');
    });
  });
});