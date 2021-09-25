

describe('MyTestSuite', () => {
    it('Title of the page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
    })
    it('Verify login', () => {
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('Admin123')
        cy.get('#btnLogin').click()
    })

    /* beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        })
    }) */

    it('Searching SystemUsers', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.contains('Users').click({force:true})
        cy.get('#searchSystemUser_userName').type('Ramoji')
        cy.get('#searchSystemUser_employeeName_empName').type('Aaliyah Haq')
        cy.get('#searchSystemUser_status').select('Enabled',{force: true})
        cy.get('#searchBtn').click()

    })
    it('AddingUser', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.contains('Users').click({force:true})
        cy.get('#btnAdd').click()
        cy.get('#systemUser_employeeName_empName').type('Andrew')
        cy.get('#systemUser_userName').type('AndreW')
        cy.get('#systemUser_password').type('Andrew123')
        cy.get('#systemUser_confirmPassword').type('Andrew123')
        cy.get('#btnSave').click()
    })
    it('DeletingUser_Cancel', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.contains('Users').click({force:true})
        cy.get('#ohrmList_chkSelectRecord_39').check()
        cy.get('#btnDelete').click()
        cy.get('#deleteConfModal > .modal-header > h3').contains('OrangeHRM - Confirmation Required')
        cy.get('#deleteConfModal > .modal-body > p').contains('Delete records?')
        cy.get('#deleteConfModal > .modal-footer > .reset').click()
    })
    it('DeletingUser_Ok', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.contains('Users').click({force:true})
        cy.get('#ohrmList_chkSelectRecord_39').check()
        cy.get('#btnDelete').click()
        cy.get('#deleteConfModal > .modal-header > h3').contains('OrangeHRM - Confirmation Required')
        cy.get('#deleteConfModal > .modal-body > p').contains('Delete records?')
        cy.get('#dialogDeleteBtn').click()
    })
    
  })