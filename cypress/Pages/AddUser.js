
import elements from '../fixtures/elements.json'
import data from '../fixtures/data.json'

class AddUser{
    get ClickAdmin(){
        cy.get(elements.admin).click()
    }
    get User(){
        cy.contains(data.usermanagement).click({force:true})
    }
    get ClickAdd(){
        cy.get(elements.addbtn).click()
    }
    get AdminUserRoleWithEnabled(){
        cy.get(elements.userrole).select('Admin',{force:true})
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.adduserpwd)
        cy.get(elements.savebtn).click()
    }
    get AdminUserRoleWithDisabled(){
        cy.get(elements.userrole).select('Admin',{force:true})
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.status).select('Disabled',{force: true})
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.adduserpwd)
        cy.get(elements.savebtn).click()
    }
    get ESSUserRole(){
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.adduserpwd)
        cy.get(elements.savebtn).click()
    }
    get ESSUserRoleWithDisabled(){
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.status).select('Disabled',{force: true})
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.adduserpwd)
        cy.get(elements.savebtn).click()
    }
    get AdminEnabledInCrtConfirmPwd(){
        cy.get(elements.userrole).select('Admin',{force:true})
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.incrtpwd)
        cy.get(elements.savebtn).click()
        cy.get(elements.incrtpwdmsg).should('have.text',data.incrtpwdmsg)
    }
    get AdminDisabledInCrtConfirmPwd(){
        cy.get(elements.userrole).select('Admin',{force:true})
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.status).select('Disabled',{force: true})
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.incrtpwd)
        cy.get(elements.savebtn).click()
        cy.get(elements.incrtpwdmsg).should('have.text',data.incrtpwdmsg)
    }
    get ESSEnabledInCrtConfirmPwd(){
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.incrtpwd)
        cy.get(elements.savebtn).click()
        cy.get(elements.incrtpwdmsg).should('have.text',data.incrtpwdmsg)
    }
    get ESSDisabledInCrtConfirmPwd(){
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.status).select('Disabled',{force: true})
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.incrtpwd)
        cy.get(elements.savebtn).click()
        cy.get(elements.incrtpwdmsg).should('have.text',data.incrtpwdmsg)
    }
    get ClickCancel(){
        cy.get(elements.employeename).type(data.employeename)
        cy.get(elements.addusername).type(data.addusername)
        cy.get(elements.adduserpwd).type(data.adduserpwd)
        cy.get(elements.confirmpwd).type(data.adduserpwd)
        cy.get(elements.cancelbtn).click()
    }
}

export default new AddUser();
