import format from '../format'

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

it('should return an array', () => {
    expect(Array.isArray(format([9, 4]))).toBe(true)
})

it('should always return an array of 5 elements', () => {
    expect(format([9, 4]).length).toBe(5)
})

it('should always return an array of nulls and strings', () => {
    expect(format([9, 4]).every(e => e == null || typeof e === 'string'))
})
