// @ts-ignore
import buildFormatLongFn from "date-fns/locale/_lib/buildFormatLongFn";

var dateFormats = {
  full: 'EEEE, do MMMM y',
  long: 'do MMMM y',
  medium: 'do MMM y',
  short: 'dd.MM.y'
}

var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
}

var dateTimeFormats = {
  full: '{{date}} {{time}}',
  long: '{{date}} {{time}}',
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

export default formatLong
