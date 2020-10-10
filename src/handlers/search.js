import config from '../config'
import right from '../assets/right'
import { getRandomBetween, wait } from "../utils";

export async function init () {
  config.DEBUG && console.group('search handler')

  const value = right[Math.floor(Math.random() * right.length)]
  config.DEBUG && console.log('value', value)

  const input = document.querySelector('input[name=q]')
  config.DEBUG && console.log('input element', input)

  const send = document.querySelector('input[value="Google Suche"]')
  config.DEBUG && console.log('send element', send)

  await wait(700, 50)

  config.DEBUG && console.log('write value to element')
  await write(value, input)

  await wait(700, 200)

  config.DEBUG && console.log('send request')
  await send.click()

  config.DEBUG && console.log('done')
  config.DEBUG && console.groupEnd()
}

async function write (value, element) {
  return new Promise(async function(resolve) {
    let chars = value.split('')
    for (const char of chars) {
      await wait(400, 50)
      element.value = element.value + char
    }
    resolve()
  })
}

