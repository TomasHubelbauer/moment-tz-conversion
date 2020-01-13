# Moment Time Zone Conversion

This is a demonstration of converting between time zones in Moment.

See [`index.js`](index.js).

If the requirement is to take date and time (without time zone info) and pretend it is in a certain time zone and convert it to UTC:

```js
moment(dateAndTime).tz(tz.name, true /* Do not convert, just cast to the other time zone */).utc().toDate()
```

An opposite calculation (get UTC, treat as if in a given time zone and display in local time):

```js
moment(dateAndTime).tz(tz.name).local(true).toDate()
```

## To-Do
