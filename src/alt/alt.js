import { DEBUG } from '../settings/settings';

const Alt = require('alt');

const alt = new Alt();

if (DEBUG) {
  Alt.debug('alt', alt);
}

export default alt;