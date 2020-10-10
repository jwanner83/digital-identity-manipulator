import config from '../config'
import { wait } from '../utils'

export async function init () {
  config.DEBUG && console.group('results handler')

  let results = Array.from(document.querySelectorAll('.rc'))
  config.DEBUG && console.log('results', results)

  results = results.slice(-1 * 8)
  config.DEBUG && console.log('sliced results', results)

  const result = results[Math.floor(Math.random() * results.length)]
  config.DEBUG && console.log('random result', result)

  const anchor = result.querySelector('a')
  config.DEBUG && console.log('result anchor', anchor)

  await wait(500, 1500)

  anchor.scrollIntoView({ behavior: 'smooth' })
  config.DEBUG && console.log('scrolled into view')

  await wait(500, 2500)

  anchor.click()
  config.DEBUG && console.log('clicked on result')

  config.DEBUG && console.log('done')
  config.DEBUG && console.groupEnd()
}