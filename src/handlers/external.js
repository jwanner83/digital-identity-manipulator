import config from '../config'

export function init () {
  config.DEBUG && console.log('external handler')
}