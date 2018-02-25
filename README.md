# twelvetet-spn

> Scientific pitch notation parser/formatter for Node.js and the browser.

## Installation

Install the latest stable version of `twelvetet-spn` using [npm](https://www.npmjs.com/):

```bash
npm install twelvetet-spn
```

You can also [access the files on unpkg.com](https://unpkg.com/twelvetet-spn/).

You can use `twelvetet-spn` with module bundlers.

The `twelvetet-spn` [npm package](https://www.npmjs.com/package/twelvetet-spn) includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the `dist/` folder. They can be used without a bundler.

The UMD builds make `twelvetet-spn` available as `window.TwelveTetSPN` global variable.

`twelvetet-spn` works in [any modern browser](http://caniuse.com/#feat=es5) and Node.js.

## Usage

```javascript
import { format, parse } from 'twelvetet-spn'

parse('A4') // [9, 4]
format([9, 4]) // ['Gx4', 'A4', 'Bbb4']

```

## API


* [twelvetet-spn](#module_twelvetet-spn)
    * [.format(value)](#module_twelvetet-spn.format) ⇒ <code>String</code>
    * [.parse(value)](#module_twelvetet-spn.parse) ⇒ <code>Array.&lt;Number&gt;</code>

<a name="module_twelvetet-spn.format"></a>

### twelvetet-spn.format(value) ⇒ <code>String</code>
Formats a musical pitch to scientific pitch notation.

**Kind**: static method of [<code>twelvetet-spn</code>](#module_twelvetet-spn)  
**Returns**: <code>String</code> - Scientific pitch notation of a musical pitch.  
**Throws**:

- <code>TypeError</code> Will throw an error if the `value` argument is not an array


| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;Number&gt;</code> | An array representing the musical pitch's class and octave. |
| value.0 | <code>Number</code> | The pitch class of the musical pitch. |
| value.1 | <code>Number</code> | The octave of the musical pitch. |

<a name="module_twelvetet-spn.parse"></a>

### twelvetet-spn.parse(value) ⇒ <code>Array.&lt;Number&gt;</code>
Parses scientific pitch notation of a musical pitch.

**Kind**: static method of [<code>twelvetet-spn</code>](#module_twelvetet-spn)  
**Returns**: <code>Array.&lt;Number&gt;</code> - An array representing the musical pitch's class and octave.  
**Throws**:

- <code>TypeError</code> Will throw an error if the `value` argument is not a string


| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | Scientific pitch notation of a musical pitch. |


## License

This project is [MIT-licensed](LICENSE)
