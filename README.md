# Package temp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pkg-temp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pkg-temp)

A temporary directory automatically created specifically for your package to use for caching or storage.

[![NPM Badge](https://nodei.co/npm/pkg-temp.png)](https://npmjs.com/package/pkg-temp)

## Install

```sh
npm install pkg-temp
```

## Usage

```js
const tempDir = require("pkg-temp");

console.log(tempDir);
//=> '/home/richiebendall/pkg-temp/node_modules/.cache/pkg-temp'
```

## API

### pkgTemp

Type: `string`

The directory to use.
