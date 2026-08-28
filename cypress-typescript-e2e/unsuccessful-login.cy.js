describe('Login - OrangeHRM Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('Debería mostrar error con credenciales incorrectas', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});
