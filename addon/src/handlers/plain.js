import config from '../config'
import { getRandomBetween, wait } from "../utils";

export async function init (DEBUG) {
  DEBUG && console.group('plain handler')

  const time = getRandomBetween(10000, 1000)
  DEBUG && console.log('waiting for', time)
  await wait(time)

  DEBUG && console.log('waiting done')
  DEBUG && console.log('returning to search')
  DEBUG && console.groupEnd()

  location.href = config.SEARCH.URL
}