export class LoginPage {

  constructor(page) {
    this.page = page
    this.username = '#user-name'
    this.password = '#password'
    this.loginBtn = '#login-button'
  }

  async navigate(baseURL) {
    await this.page.goto(baseURL)
  }

  async login(user, pass) {
    await this.page.fill(this.username, user)
    await this.page.fill(this.password, pass)
    await this.page.click(this.loginBtn)
  }
}

//export default { LoginPage }