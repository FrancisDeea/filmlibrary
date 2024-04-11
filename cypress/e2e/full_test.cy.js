
describe('Navigation', () => {
    beforeEach('login page when we visit web page first time', () => {
        cy.visit('/')
        cy.get('input[name="email"]').type('user@nextmail.com')
        cy.get('input[name="password"]').type('123456')
        cy.get('button').contains('Log in').click()
        cy.get('button').contains('Sign Out')
    })

    it('Navigation between pages using sidebar menu', () => {
        cy.get('#sidenav_desktop a[href="/discover"]').click()
        cy.get('a[href="/discover/horror"]').contains('Horror')
        cy.go('back')

        cy.get('#sidenav_desktop a[href="/film-stats"]').click()
        cy.wait(1000)
        cy.get('canvas')
        cy.go('back')

        cy.get('#sidenav_desktop a[href="/colaborate"]').click()
        cy.wait(1000)
        cy.get('h1').contains('Real-Time Chat about Movies Contributions')
        cy.go('back')

        cy.get('#sidenav_desktop a[href="/"]').click()
        cy.url().should('equal', `${Cypress.config('baseUrl')}`)
    })

    it('Navigation between categories in discover page', () => {
        // A custom command to shortcut the category navigation test
        // You can find commands on /cypress/support/commands.ts

        cy.visit('/discover')
        cy.navigateToGenre('Action')
        cy.navigateToGenre('Horror')
        cy.navigateToGenre('Adventure')
        cy.navigateToGenre('Animation')
        cy.navigateToGenre('Comedy')
        cy.navigateToGenre('Crime')
        cy.navigateToGenre('Documentary')
        cy.navigateToGenre('Drama')
        cy.navigateToGenre('Family')
        cy.navigateToGenre('Fantasy')
        cy.navigateToGenre('History')
        cy.navigateToGenre('Mystery')
        cy.navigateToGenre('Romance')
        cy.navigateToGenre('Science Fiction')
        cy.navigateToGenre('Thriller')
        cy.navigateToGenre('War')
    })
})

describe('Searcher', () => {
    beforeEach('login page when we visit web page first time', () => {
        cy.visit('/')
        cy.get('input[name="email"]').type('user@nextmail.com')
        cy.get('input[name="password"]').type('123456')
        cy.get('button').contains('Log in').click()
        cy.get('button').contains('Sign Out')
    })

    it('Modal Search is hidden at first', () => {
        cy.get('header dialog').should('be.hidden');
    })

    it('Modal Search is visible when click on magnifier icon', () => {
        cy.get('header #magnifier-btn').click()
        cy.get('header dialog').should('be.visible');
    })

    it('We can search and find a movie', () => {
        cy.get('header #magnifier-btn').click()
        cy.get('header dialog').should('be.visible');
        cy.get('header dialog input').type('Harry Potter')
        cy.wait(1000)
        cy.get('a').contains('Harry Potter')
    })

})

describe.only('Dark Mode', () => {
    beforeEach('login page when we visit web page first time', () => {
        cy.clearLocalStorage()
        cy.visit('/', {
            onBeforeLoad(win) {
                cy.stub(win, 'matchMedia')
                    .withArgs('(prefers-color-scheme: light)')
                    .returns({
                        matches: true,
                    })
            },
        })
        cy.get('input[name="email"]').type('user@nextmail.com')
        cy.get('input[name="password"]').type('123456')
        cy.get('button').contains('Log in').click()
        cy.get('button').contains('Sign Out')
    })

    it('Check light theme', () => {
        cy.wait(3000)
        cy.get('html').should('not.have.class', 'dark')
    })

})