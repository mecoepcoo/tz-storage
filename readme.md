# tz-storage
![GitHub file size in bytes](https://img.shields.io/github/size/mecoepcoo/tz-storage/dist/tz-storage.min.js.svg)
![GitHub](https://img.shields.io/github/license/mecoepcoo/tz-storage.svg)
![GitHub package.json version](https://img.shields.io/github/package-json/v/mecoepcoo/tz-storage.svg)

A light-weight localStorage tool.

- No dependency
- Supports any type of data
- Supports UMD
- JSON support
- ~3kb before gzipped

# Install
```shell
$ npm install tz-localstorage --save
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
Get with a default empty value:
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
