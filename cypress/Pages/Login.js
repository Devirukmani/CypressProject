import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'

class LoginPage{
    
    get LaunchURL(){
        cy.visit(data.URL)
    }
    get VerifyTitle(){
        cy.title().should('eq',data.title)
    }
    get ValidUsername(){
        cy.get(elements.username).type(data.username)
        cy.get(elements.password).type(data.password)
        cy.get(elements.loginbtn).click()
    }
    get InvalidUsername(){
        cy.get(elements.username).type(data.invalidusername)
        cy.get(elements.password).type(data.password)
        cy.get(elements.loginbtn).click()
        cy.get(elements.verificationfailed).should('have.text',data.verificationfailed)
    }
    get InvalidPassword(){
        cy.get(elements.username).type(data.username)
        cy.get(elements.password).type(data.invalidpassword)
        cy.get(elements.loginbtn).click()
        cy.get(elements.verificationfailed).should('have.text',data.verificationfailed)
    }
}

export default new LoginPage();