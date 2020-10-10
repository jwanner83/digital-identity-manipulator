import config from '../config'
import { getRandomBetween, wait } from "../utils";

export async function init () {
  config.DEBUG && console.group('plain handler')

  const time = getRandomBetween(10000, 1000)
  config.DEBUG && console.log('waiting for', time)
  await wait(time)

  config.DEBUG && console.log('waiting done')
  config.DEBUG && console.log('returning to search')
  config.DEBUG && console.groupEnd()

  location.href = config.SEARCH.URL
}