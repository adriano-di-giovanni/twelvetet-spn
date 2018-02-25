export default value => /^\[object Array\]$/.test(Object.prototype.toString.call(value))
