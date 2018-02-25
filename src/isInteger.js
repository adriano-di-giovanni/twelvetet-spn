export default value => typeof value === 'number' && isFinite(value) && Math.floor(value) === value
