import data from './data'

/**
 * Parses scientific pitch notation of a musical pitch.
 *
 * @function parse
 * @memberof module:twelvetet-spn
 * @param {String} value Scientific pitch notation of a musical pitch.
 * @returns {Array.<Number>} An array representing the musical pitch's class and octave.
 * @throws {TypeError} Will throw an error if the `value` argument is not a string
 */
export default value => {
    if (typeof value !== 'string') {
        throw new TypeError('Missing or invalid value. String expected.')
    }

    const re = /^(.*?)(-?\d+)$/i
    const found = value.match(re)

    if (found == null) {
        return null
    }

    const name = found[1].toLowerCase().replace(/^./, l => l.toUpperCase())
    const datum = data.find(datum => datum[0] === name)

    if (datum == null) {
        return null
    }

    return [datum[1], +found[2]]
}
