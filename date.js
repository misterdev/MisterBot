import { DateTime, Interval } from 'luxon'
const now = DateTime.local().setZone('Europe/Rome')
const t2045 = DateTime.local(now.year, now.month, now.day)
console.log(now.ts, now.hour)