import './mock-localstorage'
import storage from '../src/Storage'

window.localStorage.clear()

/* get test */
test('By default, it returns null if value is not exists', () => {
  expect(storage.get('testkey')).toBe(null)
})

test('It returns default value when value is empty if defaultValue is setted.', () => {
  let defaultValue = 'empty'
  expect(storage.get('testkey', { defaultValue: defaultValue })).toBe(defaultValue)
})

test('It returns default value when storage is expired.', () => {
  window.localStorage.clear()
  storage.set('testExpired', 'test', new Date().getTime() - 1)
  expect(storage.get('testExpired')).toBe(null)
})

test('It returns specified type when type is setted.', () => {
  let types = ['string', 'number', 'boolean']
  storage.set('typeTest', 'typeTest')
  types.forEach(type => {
    expect(typeof storage.get('typeTest', { type: type })).toBe(type)
  })
  window.localStorage.clear()
})

test('It returns default value if value is exactly null.', () => {
  let defaultValue = 'empty'
  expect(storage.get('testkey', { defaultValue: defaultValue })).toBe(defaultValue)
})

/* set test */
test('It is no doubt that set function works well without any options.', () => {
  window.localStorage.clear()
  // work with object
  storage.set('testSet', {data: true, label: 'helloword'})
  expect(storage.get('testSet').data).toBe(true)
  // work with array
  storage.set('testSet', [1, 2, 3, 4])
  expect(storage.get('testSet')).toEqual([1, 2, 3, 4])
  // work with string
  storage.set('testSet', 'hello')
  expect(storage.get('testSet')).toBe('hello')
  // work with number
  storage.set('testSet', -2)
  expect(storage.get('testSet')).toBe(-2)
  // work with boolean
  storage.set('testSet', true)
  expect(storage.get('testSet')).toBe(true)
})

// others
test('Namespace can be setted.', () => {
  storage.namespace = 'my'
  storage.set('key', 'value')
  expect(JSON.parse(window.localStorage.getItem('my.key')).data).toBe('value')
})
