import config from '../config'
import right from '../assets/right'
import { getRandomAlphabeticChar, getRandomBetween, wait } from "../utils";

export async function init () {
  config.DEBUG && console.group('search handler')

  let value = right[Math.floor(Math.random() * right.length)]
  config.DEBUG && console.log('value', value)

  // add 1 / 4 possibility to have a typo in the value
  if (getRandomBetween(4) === 1) {
    let chars = value.split('')
    chars.splice(getRandomBetween(chars.length, 0), 0, getRandomAlphabeticChar())
    value = chars.join('')
  }

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