import LoginPage from '../Pages/Login'
import AddUser from '../Pages/AddUser'

describe('Login Functionality', () => {
    beforeEach(() =>{
        LoginPage.LaunchURL
        LoginPage.VerifyTitle
    })
    it('ValidUser & Password', () => {
        LoginPage.ValidUsername
    })
    it('InvalidUser & ValidPassword',() =>{
        LoginPage.InvalidUsername
    })
    it('ValidUser & InvalidPassword',() =>{
        LoginPage.InvalidPassword
    })
});

describe('AddUser Functionality', () => {
    beforeEach(() => {
        LoginPage.LaunchURL
        LoginPage.ValidUsername
        AddUser.ClickAdmin
        AddUser.User
        AddUser.ClickAdd
    })
    it('User with Admin role, status enabled, incrt pwd and save', () => {
        AddUser.AdminEnabledInCrtConfirmPwd
    });
    it('User with Admin role, status disabled, incrt pwd and save', () => {
        AddUser.AdminDisabledInCrtConfirmPwd
    });
    it('User with ESS role, status enabled, incrt pwd and save', () => {
        AddUser.ESSEnabledInCrtConfirmPwd
    });
    it('User with ESS role, status disabled, incrt pwd and save', () => {
        AddUser.ESSDisabledInCrtConfirmPwd
    });
    it('Click Cancel for ESS role user with status enabled', () => {
        AddUser.ClickCancel
    });
});
