import data from './data'
import isArray from './isArray'
import isInteger from './isInteger'

/**
 * Formats a musical pitch to scientific pitch notation.
 *
 * @function format
 * @memberof module:twelvetet-spn
 * @param {Array.<Number>} value An array representing the musical pitch's class and octave.
 * @param {Number} value.0  The pitch class of the musical pitch.
 * @param {Number} value.1 The octave of the musical pitch.
 * @returns {String} Scientific pitch notation of a musical pitch.
 * @throws {TypeError} Will throw an error if the `value` argument is not an array
 */
export default value => {
    if (!isArray(value)) {
        throw new Error('Missing or invalid value. Array expected.')
    }

    const pitchClass = value[0]
    const octave = value[1]

    if (!isInteger(pitchClass)) {
        throw new Error('Missing or invalid pitch class. Integer expected.')
    }

    if (!isInteger(octave)) {
        throw new Error('Missing or invalid octave. Integer expected.')
    }

    return data.filter(datum => datum[1] === pitchClass).map(datum => datum[0] + octave)
}
