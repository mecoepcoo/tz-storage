# tz-storage
<a href="https://www.npmjs.com/package/tz-storage"><img src="https://img.shields.io/github/size/mecoepcoo/tz-storage/dist/tz-storage.min.js.svg" alt="size"></a>
<a href="https://github.com/mecoepcoo/tz-storage/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mecoepcoo/tz-storage.svg" alt="license"></a>
<a href="[https://github.com/mecoepcoo/tz-storage/blob/master/LICENSE](https://codecov.io/gh/mecoepcoo/tz-storage)"><img src="https://img.shields.io/codecov/c/github/mecoepcoo/tz-storage.svg" alt="coverage"></a>
<a href="https://github.com/mecoepcoo/tz-storage"><img src="https://img.shields.io/github/package-json/v/mecoepcoo/tz-storage.svg" alt="github version"></a>
<a href="https://www.npmjs.com/package/tz-storage"><img src="https://img.shields.io/npm/v/tz-storage.svg?color=blueviolet" alt="npm version"></a>
<a href="https://npmcharts.com/compare/tz-storage"><img src="https://img.shields.io/npm/dt/tz-storage.svg" alt="downloads"></a>

A light-weight localStorage tool.

- No dependency
- Supports any type of data
- Supports UMD
- JSON support
- ~3kb before gzipped

# Install
## npm
```shell
$ npm install tz-storage --save
```
## browser
```javascript
<script src="tz-storage.min.js"></script>
```

# Usage
Check compatibility:
```javascript
storage.isSupported // return true or false
```

Set a storage namespace, it turns key to 'namespace.key':
```javascript
storage.namespace = 'mystorage'
```

Set a default value in advance:
```javascript
storage.defaultValue = 'nothing'
```

## Set
Set a storage with any types:
```javascript
storage.set('key', {active: true, label: 'helloword'})
storage.set('key', [1, 2, 3, 4])
storage.set('key', 'hello')
```

Set a expire time, it returns default value when expired:
```javascript
storage.set('key', 'value', new Date().getTime() + 8640000)
```

## Get
Replace with a custom value when the value is empty.
```javascript
storage.get('key', { defaultValue: 'empty' })
```

Get with specified type(only worked in string, number and boolean)
```javascript
storage.get('key', { type: 'number' })
```

## Remove
```javascript
storage.get('key')
```
