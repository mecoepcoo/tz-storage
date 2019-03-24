class Storage {
  constructor() {
    this._namespace = ''
    this._isSupported = this._checkSupported
  }

  /**
   * check supported getter
   * @readonly
   * @memberof Storage
   */
  get _checkSupported() {
    return window.localStorage && (window.localStorage.setItem('tls', 'ls') , window.localStorage.getItem('tls') === 'ls')
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

  /**
   * set localstorage value
   * @param {string} key 
   * @param {string} value 
   * @param {number} [expire] expire timestamp, pass 0 to disable expire
   * @returns
   * @memberof Storage
   */
  set(key, value, expire = 0) {
    if (!this._isSupported) return false
    key = this._keyHandle(key)
    value = JSON.stringify({ data: value , expire: expire})
    try {
      window.localStorage.setItem(key, value)
    } catch (e) {
      console.error(e, `Type Error: value is not supported.`)
    }
  }

  /**
   * get localstorage value
   * @param {string} key 
   * @param {object} options
   * @param {any} options.defaultValue it will be return when the value is empty
   * @param {string=["string","number","boolean"]} options.type parse type of the value 
   */
  get(key, {defaultValue = null, type} = {}) {
    // todo 增加d.ts
    if (!this._isSupported) return defaultValue
    key = this._keyHandle(key)
    let _value = JSON.parse(window.localStorage.getItem(key))
    if (_value === null) return defaultValue

    let { data, expire } = _value
    
    let now = new Date().getTime()
    if (expire && expire < now) {
      window.localStorage.removeItem(key)
      return defaultValue
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

  _keyHandle(key) {
    return this._namespace + key
  }
}

export default new Storage()
