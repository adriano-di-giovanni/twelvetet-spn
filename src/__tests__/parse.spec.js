import parse from '../parse'
import data from '../data'

it('should be a function', () => {
    expect(typeof parse).toBe('function')
})

it('should throw when value is not a string', () => {
    expect(() => parse()).toThrowError(/Missing or invalid/)
})

it('should return null if octave is missing', () => {
    expect(parse('A')).toBeNull()
})

it('should return null if name is invalid', () => {
    expect(parse('H0')).toBeNull()
})

const octaves = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

octaves.forEach(octave => {
    data.forEach(datum => {
        const value = datum[0] + octave
        it(`should parse ${value}`, () => {
            expect(parse(value)).toEqual([datum[1], octave])
        })
    })
})
