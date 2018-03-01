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
 * @returns {Array} An array of scientific pitch notation enharmonic equivalents of the musical pitch.
 * The array always has 5 elements. The order is always `[<double sharp>, <sharp>, <natural>, <flat>, <double flat>]`.
 * An element of the array is `null` if there is no corresponding enharmonic equivalent
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
