const moment = require('moment');
require('moment-timezone'); // moment.tz

const creatorTimeZone = 'Pacific/Honolulu'; // -10

const creationTimeLocal = moment(new Date());
console.log(creationTimeLocal.format());

const creationTimeUniversal = creationTimeLocal.utc();
console.log(creationTimeUniversal.format());

const creationTimeZoned = creationTimeLocal.tz(creatorTimeZone);
console.log(creationTimeZoned.format());

const observerTimeZone = 'Europe/Prague';

// The database transfer is in UTC
const observationTimeUniversal = creationTimeUniversal;

const observationTimeZoned = observationTimeUniversal.tz(observerTimeZone);
console.log(observationTimeZoned.format());
