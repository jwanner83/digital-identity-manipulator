import config from './config'
import { getType, TYPES } from './types'
import * as search from './handlers/search'
import * as results from './handlers/results'
import * as external from './handlers/external'
import * as plain from './handlers/plain'
import * as un from './handlers/undefined'


(async function () {
  config.DEBUG && console.group('Digital Identity Generator')
  const type = getType(window.location)
  config.DEBUG && console.log('type', type)

  switch (type) {
    case TYPES.SEARCH: search.init(); break;
    case TYPES.RESULTS: results.init(); break;
    case TYPES.EXTERNAL: external.init(); break;
    case TYPES.PLAIN: plain.init(); break;
    case TYPES.UNDEFINED: un.init(); break;
    default: un.init()
  }
})()