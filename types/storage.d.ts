export as namespace storage;

export let namespace: string;
export let defaultValue: any;
export let isSupported: boolean;

type configOptions = {
  namespace: string,
  defaultValue: any,
};

export function config (options?: configOptions): void;

/**
 * 增加缓存
 * set localstorage value
 * @param key 
 * @param value 
 * @param [expire=0] 过期时间戳，传0来禁用过期。expire timestamp, pass 0 to disable expire
 */
export function set(key: string, value: any, expire?: number): boolean;

/**
 * 取出缓存
 * get localstorage value
 */
export function get(key: string, params: {
  /**
   * 当取出的值为空时返回的默认值
   * returned when the value is empty
   */
  defaultValue?: any,
  /**
   * 转换值的类型
   * parse type of the value
   */
  type?: 'string' | 'number' | 'boolean'
}): any;

/**
 * 删除缓存
 * remove the specified localstorage
 * @param key 
 */
export function remove(key: string): boolean;
