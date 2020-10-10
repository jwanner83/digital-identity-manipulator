import config from '../config'
import right from '../assets/right'
import { wait } from "../utils";

export async function init () {
  config.DEBUG && console.group('search handler')

  const value = right[Math.floor(Math.random() * right.length)]
  config.DEBUG && console.log('value', value)

  const input = document.querySelector('input[name=q]')
  config.DEBUG && console.log('input element', input)

  const send = document.querySelector('input[value="Google Suche"]')
  config.DEBUG && console.log('send element', send)

  await wait(50, 700)

  config.DEBUG && console.log('write value to element')
  await write(value, input)

  config.DEBUG && console.log('send request')
  await click(send)

  config.DEBUG && console.log('done')
  config.DEBUG && console.groupEnd()
}

async function write (value, element) {
  return new Promise(async function(resolve) {
    let chars = value.split('')
    for (const char of chars) {
      await writeChar(element, char, Math.floor(Math.random() * 400) + 50)
    }
    resolve()
  })
}

async function writeChar (element, char, time) {
  return new Promise(async function(resolve) {
    setTimeout(() => {
      element.value = element.value + char
      resolve()
    }, time)
  })
}

function click (element) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      element.click()
      resolve()
    }, Math.floor(Math.random() * 750) + 100)
  })
}
