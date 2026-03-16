import { test, expect } from '@playwright/test'
import { getUsers } from '../../api/userAPI.js'

test('Get users API', async () => {

  const users = await getUsers()

  expect(users.length).toBeGreaterThan(0)

})