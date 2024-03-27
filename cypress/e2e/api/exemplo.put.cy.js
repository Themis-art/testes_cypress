import ExemploRequest from '../../support/requests/exemplo/exemplo.request';

describe('Update Account', () => {
  it('should update an account with success', () => {
    const name = 'NomeAtualizado';
    const email = 'email@teste.com';
    const password = 'senha123';
    
    ExemploRequest.updateAccount(name, email, password).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', name);
    });
  });
});