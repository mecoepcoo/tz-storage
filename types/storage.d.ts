declare class Storage {
  constructor();

  namespace: string;
  defaultValue: any;
  isSupported: boolean;

  /**
   * 增加缓存
   * set localstorage value
   * @param key 
   * @param value 
   * @param [expire=0] 过期时间戳，传0来禁用过期。expire timestamp, pass 0 to disable expire
   */
  set(key: string, value: any, expire? = 0)

  /**
   * 取出缓存
   * get localstorage value
   */
  get(key: string, params: {
    /**
     * 当取出的值为空时返回的默认值
     * returned when the value is empty
     */
    defaultValue?: any = null,
    /**
     * 转换值的类型
     * parse type of the value
     */
    type?: 'string' | 'number' | 'boolean'
  })

  /**
   * 删除缓存
   * remove the specified localstorage
   * @param key 
   */
  remove(key)
}

export = Storage
