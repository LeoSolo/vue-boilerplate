export default function dateParser (date) {
  let time = new Date(date).toLocaleTimeString() === '03:00:00'
    ? '' : new Date(date).toLocaleTimeString()
  return new Date(date).toLocaleDateString() + ' ' + time
}
