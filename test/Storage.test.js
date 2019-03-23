import './mock-localstorage'
import storage from '../src/Storage'

test('By default, it returns null if value is not exists', () => {
  expect(storage.get('testkey')).toBe(null)
})
