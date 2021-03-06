// @ts-ignore
import isSameUTCWeek from "date-fns/_lib/isSameUTCWeek";

var adjectivesLastWeek = {
  masculine: 'ostatni',
  feminine: 'ostatnia'
}

var adjectivesThisWeek = {
  masculine: 'ten',
  feminine: 'ta'
}

var adjectivesNextWeek = {
  masculine: 'następny',
  feminine: 'następna'
}

var dayGrammaticalGender = {
  0: 'feminine',
  1: 'masculine',
  2: 'masculine',
  3: 'feminine',
  4: 'masculine',
  5: 'masculine',
  6: 'feminine'
}

function getAdjectives(token:any, date:any, baseDate:any, options:any) {
  if (isSameUTCWeek(date, baseDate, options)) {
    return adjectivesThisWeek
  } else if (token === 'lastWeek') {
    return adjectivesLastWeek
  } else if (token === 'nextWeek') {
    return adjectivesNextWeek
  } else {
    throw new Error(`Cannot determine adjectives for token ${token}`)
  }
}

function getAdjective(token:any, date:any, baseDate:any, options:any) {
  var day = date.getUTCDay()
  var adjectives = getAdjectives(token, date, baseDate, options);
  // @ts-ignore
  var grammaticalGender = dayGrammaticalGender[day]
  // @ts-ignore
  return adjectives[grammaticalGender];
}

function dayAndTimeWithAdjective(token:any, date:any, baseDate:any, options:any) {
  var adjective = getAdjective(token, date, baseDate, options)
  return `'${adjective}' eeee 'o' p`
}

var formatRelativeLocale = {
  lastWeek: dayAndTimeWithAdjective,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: dayAndTimeWithAdjective,
  other: 'P'
}

export default function formatRelative(token:any, date:any, baseDate:any, options:any) {
  // @ts-ignore
  var format = formatRelativeLocale[token]
  if (typeof format === 'function') {
    return format(token, date, baseDate, options)
  }

  return format
}
