import config from '../config'
import { getKey, getRandomBetween, wait } from '../utils'

export async function init (DEBUG) {
  DEBUG && console.group('results handler')

  let results = Array.from(document.querySelectorAll('.g'))
  DEBUG && console.log('results', results)

  results = results.slice(-1 * 8)
  DEBUG && console.log('sliced results', results)

  results = results.filter(result => {
    const anchor = result.querySelector('a')
    return anchor && !anchor.getAttribute('href').endsWith('.pdf')
  })
  DEBUG && console.log('filtered results without pdf', results)

  const result = results[Math.floor(Math.random() * results.length)]
  DEBUG && console.log('random result', result)

  const anchor = result.querySelector('a')
  DEBUG && console.log('result anchor', anchor)

  const INTERACT = await getKey('interactResults')
  DEBUG && console.log('interact results', INTERACT)

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

  anchor.scrollIntoView({ behavior: 'smooth' })
  DEBUG && console.log('scrolled into view')

  await wait(2500, 500)

  anchor.click()
  DEBUG && console.log('clicked on result')

  DEBUG && console.log('done')
  DEBUG && console.groupEnd()
}