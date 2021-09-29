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
