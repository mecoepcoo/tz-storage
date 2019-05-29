# tz-storage
<a href="https://www.npmjs.com/package/tz-storage"><img src="https://img.shields.io/github/size/mecoepcoo/tz-storage/dist/tz-storage.min.js.svg" alt="size"></a>
<a href="https://github.com/mecoepcoo/tz-storage/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mecoepcoo/tz-storage.svg" alt="license"></a>
<a href="[https://github.com/mecoepcoo/tz-storage/blob/master/LICENSE](https://codecov.io/gh/mecoepcoo/tz-storage)"><img src="https://img.shields.io/codecov/c/github/mecoepcoo/tz-storage.svg" alt="coverage"></a>
<a href="https://github.com/mecoepcoo/tz-storage"><img src="https://img.shields.io/github/package-json/v/mecoepcoo/tz-storage.svg" alt="github version"></a>
<a href="https://www.npmjs.com/package/tz-storage"><img src="https://img.shields.io/npm/v/tz-storage.svg?color=blueviolet" alt="npm version"></a>
<a href="https://npmcharts.com/compare/tz-storage"><img src="https://img.shields.io/npm/dt/tz-storage.svg" alt="downloads"></a>

[English](https://github.com/mecoepcoo/tz-storage/blob/develop/readme.md)

轻量的localStorage工具。

- 无依赖
- 支持任意类型的数据
- 支持UMD
- 支持JSON
- 未压缩时不超过3kb

# 安装
## npm
```shell
$ npm install tz-storage --save
```
## 浏览器
下载dist目录中的文件并导入

```javascript
<script src="tz-storage.min.js"></script>
```

# 用法
检查兼容性:
```javascript
storage.isSupported // 返回 true 或者 false
```

设置命名空间，storage 的 key 将统一变为 “namespace.key” 的形式
```javascript
storage.namespace = 'mystorage'
```

统一设置取到空值时的返回值
```javascript
storage.defaultValue = 'nothing' // 当使用get方法取到空值时，将返回 'nothing'
```

也可以用 config 来初始化配置（推荐）
```javascript
storage.config({
  namespace: 'space', // 默认值: ''
  defaultValue: 'empty'
})
```

## Set
你可以保存任意数据类型:
```javascript
storage.set('key', {active: true, label: 'helloword'})
storage.set('key', [1, 2, 3, 4])
storage.set('key', 'hello')
```

设置过期时间，不设置则不会过期。如果取值时已经过期，则返回默认的或者由配置指定的空值:
```javascript
storage.set('key', 'value', new Date().getTime() + 8640000)
```

## Get
可以自定义空值:
```javascript
storage.get('key', { defaultValue: 'empty' }) // 当取值为空或过期时，返回 'empty'
```

取值时指定返回值的类型（只对 String，Number，Boolean 类型有效）:
```javascript
storage.get('key', { type: 'number' }) // 取出的值将自动转为number类型
```

## Remove
```javascript
storage.get('key') // 删除指定的key
```
