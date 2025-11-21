import LoginPage from '../support/pages/LoginPage'

describe('Fluxo de Compras e Navegação', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        // Reusando sua classe para logar antes de cada teste!
        loginPage.acessar()
        loginPage.preencherLogin('standard_user', 'secret_sauce')
        loginPage.submeter()
    })

    it('Ativar o filtro do menor pro maior preço', () => {
        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item_price:first').should('have.text', '$7.99')
    }
    )
    it('Compra E2E', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Greg')
        cy.get('[data-test="lastName"]').type('Pina')
        cy.get('[data-test="postalCode"]').type('08588')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })
    it('Deslogar e validar', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('not.include', '/inventory.html')
        cy.get('[data-test="login-button"]').should('be.visible')
    })
})
