export default (val) => {
  if (typeof val !== 'string')
    val = val.toString()

  return val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}