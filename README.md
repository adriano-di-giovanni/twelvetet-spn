# twelvetet-spn

> Scientific pitch notation parser/formatter for Node.js and the browser.

## Installation

```bash
npm install twelvetet-spn
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
