import { test, expect } from '../../fixtures/baseTest.js'
import { baseURL, username, password } from '../../config/env.qa'

test('User login test', async ({ loginPage }) => {

  await loginPage.navigate(baseURL)

  await loginPage.login(username, password)

})