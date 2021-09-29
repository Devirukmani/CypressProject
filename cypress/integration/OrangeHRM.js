import LoginPage from '../Pages/Login'
import AddUser from '../Pages/AddUser'

describe('Login Functionality', () => {
    beforeEach(() =>{
        LoginPage.launchURL();
        LoginPage.title();
    })
    it('ValidUser & Password', () => {
        LoginPage.login(data.username, data.password)
    })
    it('InvalidUser & ValidPassword',() =>{
        LoginPage.login(data.invalidusername, data.password)
        LoginPage.errorMsg();
    })
    it('ValidUser & InvalidPassword',() =>{
        LoginPage.login(data.username, data.invalidpassword)
        LoginPage.errorMsg();
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
    it('User with Admin role, status enabled, crt pwd and save', () => {
        AddUser.AdminUserRoleWithEnabled
    });
    it('User with Admin role, status disabled, crt pwd and save', () => {
        AddUser.AdminUserRoleWithDisabled
    });
    it('User with ESS role, status enabled, crt pwd and save', () => {
        AddUser.ESSUserRole
    });
    it('User with ESS role, status disabled, crt pwd and save ', () => {
        AddUser.ESSUserRoleWithDisabled
    });
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
