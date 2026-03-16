import { request } from '@playwright/test'

export async function getUsers() {

  const apiContext = await request.newContext()

  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts')

  return response.json()
}

//export default { getUsers }