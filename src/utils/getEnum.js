export default function getEnum (object) {
  const res = {}

  Object.keys(object).forEach((value) => {
    let key = object[value]
    res[key] = value
  })

  return Object.freeze(Object.assign(object, res))
}
