import { getType, TYPES } from './types'
import * as search from './handlers/search'
import * as results from './handlers/results'
import * as external from './handlers/external'
import * as plain from './handlers/plain'
import * as un from './handlers/undefined'
import { getKey } from './utils'


(async function () {
  const DEBUG = await getKey('debug')
  
  DEBUG && console.group('Digital Identity Generator')

  DEBUG && console.log('check if enabled')
  const ACTIVE = await getKey('active')

  if (ACTIVE === true) {
    DEBUG && console.log('generator is enabled')
  } else {
    DEBUG && console.log('generator is disabled')
    DEBUG && console.groupEnd()
    return
  }

  const type = getType(window.location)
  DEBUG && console.log('type', type)
  DEBUG && console.groupEnd()

  switch (type) {
    case TYPES.SEARCH: search.init(DEBUG); break;
    case TYPES.RESULTS: results.init(DEBUG); break;
    case TYPES.EXTERNAL: external.init(DEBUG); break;
    case TYPES.PLAIN: plain.init(DEBUG); break;
    case TYPES.UNDEFINED: un.init(DEBUG); break;
    default: un.init(DEBUG)
  }
})()