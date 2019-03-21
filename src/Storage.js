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
   * @param {*} key
   * @param {*} value
   * @returns
   * @memberof Storage
   */
  set(key, value) {
    // todo 增加过期时间
    if (!this._isSupported) return false
    key = this._keyHandle(key)
    value = JSON.stringify({ data: value })
    try {
      window.localStorage.setItem(key, value)
    } catch (e) {
      console.error(e, `Type Error: value is not supported.`)
    }
  }

  get(key, {defaultValue = null, type = 'string'} = {}) {
    // todo 增加过期时间
    // todo 增加类型自动转换
    if (!this._isSupported) return defaultValue
    key = this._keyHandle(key)
    let { data } = JSON.parse(window.localStorage.getItem(key))
    return data === null ? defaultValue : data
  }

  _keyHandle(key) {
    return this._namespace + key
  }
}

export default Storage