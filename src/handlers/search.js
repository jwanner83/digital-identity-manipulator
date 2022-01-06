import config from '../config'
import { getKey, getRandomAlphabeticChar, getRandomBetween, wait } from "../utils";

export async function init (DEBUG) {
  DEBUG && console.group('search handler')

  let storage = await browser.storage.local.get()
  let keywords = storage.keywords ? storage.keywords.split(',') : ['no keywords']
  DEBUG && console.log('keywords', keywords)

  let value = keywords[Math.floor(Math.random() * keywords.length)]
  DEBUG && console.log('value', value)

  const TYPO = await getKey('addTypoChance')
  DEBUG && console.log('add typo', TYPO)

  if (TYPO) {
    // add 1 / 4 possibility to have a typo in the value
    if (getRandomBetween(4) === 1) {
      let chars = value.split('')
      chars.splice(getRandomBetween(chars.length, 0), 0, getRandomAlphabeticChar())
      value = chars.join('')
    }
  }

  const input = document.querySelector('input[name=q]')
  DEBUG && console.log('input element', input)

  const send = document.querySelector('input[value="Google Suche"], input[value="Google Search"], input[value="Recherche Google"], input[value="Cerca con Google"]')
  DEBUG && console.log('send element', send)

  await wait(700, 50)

  DEBUG && console.log('write value to element')
  await write(value, input)

  await wait(700, 200)

  DEBUG && console.log('send request')
  await send.click()

  DEBUG && console.log('done')
  DEBUG && console.groupEnd()
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