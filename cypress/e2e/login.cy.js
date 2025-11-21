import LoginPage from '../support/pages/LoginPage'

describe('Login - Testes automatizados', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.acessar()
    })

    it('Deve realizar login com sucesso', () => {
        loginPage.preencherLogin('standard_user', 'secret_sauce')
        loginPage.submeter()
        cy.url().should('include', '/inventory.html')
    })
    it('Deve realizar login com credenciais inválidas', () => { 
        loginPage.preencherLogin('standard_user', 'senha_errada')
        loginPage.submeter()
        loginPage.validarLoginInvalido()
    })
})
