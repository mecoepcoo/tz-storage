class Storage {
  constructor() {
    this._namespace = ''
    this._defaultValue = null
  }

  /**
   * check supported getter
   * @readonly
   * @memberof Storage
   */
  get _checkSupported() {
    return window.localStorage && (window.localStorage.setItem('tls', 'ls') , window.localStorage.getItem('tls') === 'ls') ?
    true : false
  }

  get isSupported() {
    return this._checkSupported
  }

  /**
   * namespace getter
   * @memberof Storage
   * @returns {string}
   */
  get namespace() {
    return this._namespace
  }

  /**
   * namespace setter
   * @memberof Storage
   */
  set namespace(value) {
    this._namespace = value ? `${value}.` : ''
  }

  set defaultValue(value) {
    this._defaultValue = value
  }

  /**
   * init config
   * @memberof Storage
   */
  config({
    namespace = '',
    defaultValue = null
  } = {}) {
    this.namespace = namespace
    this.defaultValue = defaultValue
  }

  /**
   * set localstorage value
   * @param {string} key 
   * @param {string} value 
   * @param {number} [expire] expire timestamp, pass 0 to disable expire
   * @returns
   * @memberof Storage
   */
  set(key, value, expire = 0) {
    if (!this._checkSupported) return false
    key = this._keyHandle(key)
    value = JSON.stringify({ data: value , expire: expire})
    window.localStorage.setItem(key, value)
    return true
  }

  /**
   * get localstorage value
   * @param {string} key 
   * @param {object} options
   * @param {any} options.defaultValue returned when the value is empty
   * @param {string=["string","number","boolean"]} options.type parse type of the value 
   */
  get(key, {defaultValue = this._defaultValue, type} = {}) {
    if (!this._checkSupported) return defaultValue
    key = this._keyHandle(key)
    let _value = JSON.parse(window.localStorage.getItem(key))
    if (_value === null) return defaultValue

    let { data, expire } = _value
    
    let now = new Date().getTime()
    if (expire && expire < now) {
      window.localStorage.removeItem(key)
      return defaultValue
    }

    try {
      if (type && (['number', 'string', 'boolean'].indexOf(type) < 0)) throw(`Type Error: unsupported type param.`)
    } catch (e) {
      console.error(e)
      return false
    }
      switch (type) {
        case 'string':
          data = `${data}`
          break
        case 'number':
          data = Number(data)
          break
        case 'boolean':
          data = Boolean(data)
          break
        default:
          break
      }
    
    return data === null ? defaultValue : data
  }

  /**
   * remove the specified localstorage
   * @param {string} key 
   */
  remove(key) {
    if (!this._checkSupported) return false
    key = this._keyHandle(key)
    window.localStorage.removeItem(key)
    return true
  }

  _keyHandle(key) {
    return this._namespace + key
  }

  create(){
    return new Storage()
  }
}

export default Storage
