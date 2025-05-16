//Test login con credenciales correctas.
describe('Login - OrangeHRM Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });
  it('Debería loguearse correctamente con credenciales válidas', () => {
    cy.get('input[name="username"]').type('Admin'); 
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.wait(3000);
  });


