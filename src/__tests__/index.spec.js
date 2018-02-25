import { format, parse } from '../index'

it('format should be a function', () => {
    expect(typeof format).toBe('function')
})

it('parses should be a function', () => {
    expect(typeof parse).toBe('function')
})
