import { test } from '@playwright/test'

test.beforeEach(async () => {

  console.log("Starting test")

})

test.afterEach(async () => {

  console.log("Test finished")

})