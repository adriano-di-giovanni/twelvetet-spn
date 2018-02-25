import format from '../format'
import data from '../data'

it('should be a function', () => {
    expect(typeof format).toBe('function')
})

it('should throw when value is not an array', () => {
    expect(() => format()).toThrowError(/Missing or invalid value/)
})

it('should throw when pitch class is not a number', () => {
    expect(() => format(['0'])).toThrowError(/Missing or invalid pitch class/)
})

it('should throw when octave is not a number', () => {
    expect(() => format([0, '-1'])).toThrowError(/Missing or invalid octave/)
})

const octaves = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const pitchClasses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

octaves.forEach(octave => {
    pitchClasses.forEach(pitchClass => {
        // NOTE: filter by pitch class.
        // The `format` function should return an array containing the same filtered elements.
        const filtered = data.filter(datum => datum[1] === pitchClass)
        filtered.forEach(datum => {
            const value = [datum[1], octave]
            it(`should format ${value}`, () => {
                expect(format(value)).toEqual(filtered.map(datum => datum[0] + octave))
            })
        })
    })
})
