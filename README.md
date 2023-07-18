# untildify-commonjs

* Convert a tilde path to an absolute path: `~/dev` → `/Users/john/dev`
* Inspired by [untilify](https://github.com/sindresorhus/untildify) by [Sindre Sorhus](https://github.com/sindresorhus)
* Since untildify uses ES6 syntax, I created this package to for those who use CommonJS environment.

  
## Install

```sh
npm install untildify-commonjs
```

## Usage

```js
const untildify = require('untildify-commonjs');

untildify('~/dev');
//=> '/Users/sindresorhus/dev'
```

## Related

See [tildify-commonjs](https://github.com/mehmetcanfarsak/tildify-commonjs) for the inverse.