import config from '../config'
import { getKey, getRandomBetween, wait } from '../utils'

export async function init (DEBUG) {
  DEBUG && console.group('external handler')

  const INTERACT = await getKey('interactResult')
  DEBUG && console.log('interact result', INTERACT)

  if (INTERACT) {
    const MAXIMAL_INTERACTION_AMOUNT = await getKey('maximalInteractions')
    DEBUG && console.log('maximal interaction amount', MAXIMAL_INTERACTION_AMOUNT)

    for (const item of new Array(getRandomBetween(MAXIMAL_INTERACTION_AMOUNT))) {
      DEBUG && console.log('interact')
      await wait(1500, 100)
      window.scrollTo({
        top: getRandomBetween(document.body.clientHeight),
        behavior: 'smooth'
      });
    }
  }

  await wait(1500, 100)

  DEBUG && console.log('interactions done')
  DEBUG && console.log('changing to plain')
  DEBUG && console.groupEnd()

  const NAVIGATE_TO_PLAIN = await getKey('navigateToPlain')
  DEBUG && console.log('navigate to plain', NAVIGATE_TO_PLAIN)

  window.location.href = NAVIGATE_TO_PLAIN ? config.PLAIN.URL : config.SEARCH.URL
}