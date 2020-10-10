import config from '../config'

export function init () {
  config.DEBUG && console.group('results handler')

  const results = Array.from(document.querySelectorAll('.rc'))
  config.DEBUG && console.log('results', results)
}