import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'

class LoginPage{
    
    launchURL(){
        cy.visit(data.URL)
    }
    title(){
        cy.title().should('eq',data.title)
    }
    login(username,password){
        cy.get(elements.username).type(username)
        cy.get(elements.password).type(password)
        cy.get(elements.loginbtn).click()
    }
    errorMsg(){
        cy.get(elements.verificationfailed).should('have.text',data.verificationfailed)
    } 
}

export default new LoginPage();
