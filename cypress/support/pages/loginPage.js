class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    acessar() {
        cy.visit('https://www.saucedemo.com')
    }

    preencherLogin(usuario, senha) {
        this.elements.usernameInput().type(usuario)
        this.elements.passwordInput().type(senha)
    }

    submeter() {
        this.elements.loginButton().click()
    }

    validarLoginInvalido() {
        this.elements.errorMessage().should('contain.text', 'Epic sadface')
    }
}

export default LoginPage
