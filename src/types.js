import config from './config'

export const TYPES = Object.freeze({
  SEARCH: 'SEARCH',
  RESULTS: 'RESULTS',
  EXTERNAL: 'EXTERNAL',
  PLAIN: 'PLAIN',
  UNDEFINED: 'UNDEFINED'
})

export function getType ({ host, pathname }) {
  config.DEBUG && console.log('host', host)
  config.DEBUG && console.log('pathName', pathname)

  if (host === config.SEARCH.HOST) {
    if (pathname === '/search') {
      return TYPES.RESULTS
    } else if (pathname === '/' || pathname === '/webhp') {
      return TYPES.SEARCH
    } else {
      return TYPES.UNDEFINED
    }
  } else if (host === config.PLAIN.HOST) {
    return TYPES.PLAIN
  } else {
    return TYPES.EXTERNAL
  }
}