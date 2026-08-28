//Test login con credenciales correctas.
describe('Login - OrangeHRM Demo', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('Debería loguearse correctamente con credenciales válidas', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.wait(3000);
  });

//Test login con credenciales incorrectas.
  it('Debería mostrar error con credenciales incorrectas', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    cy.wait(3000);
  });

    //Test login validacion campo requerido.
  it('No deberia loguearse al dejar en blanco el username', () => {
    //cy.get('input[name="username"]').type('');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span').should('contain', 'Required');
    cy.wait(3000);
  });

});
