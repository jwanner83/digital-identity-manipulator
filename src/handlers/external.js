import config from '../config'
import { getRandomBetween, wait } from '../utils'

export async function init () {
  config.DEBUG && console.group('external handler')

  for (const item of new Array(getRandomBetween(8))) {
    config.DEBUG && console.log('interact')
    await wait(1500, 100)
    window.scrollTo({
      top: getRandomBetween(document.body.clientHeight),
      behavior: 'smooth'
    });
  }

  await wait(1500, 100)

  config.DEBUG && console.log('interactions done')
  config.DEBUG && console.log('changing to plain')
  config.DEBUG && console.groupEnd()

  window.location.href = config.PLAIN.URL
}