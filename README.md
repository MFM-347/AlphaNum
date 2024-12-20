# AlphaNum

[![Version](https://img.shields.io/npm/v/@tfs-8/alphanum.svg)](https://www.npmjs.com/package/@tfs-8/alphanum)  
[![Downloads](https://img.shields.io/npm/dm/@tfs-8/alphanum.svg)](https://www.npmjs.com/package/@tfs-8/alphanum)

**AlphaNum** is a lightweight JavaScript utility for encoding and decoding alphanumeric text into numeric representations. It maps letters to their positions in the alphabet and converts them back.

## Features

- Encodes alphabetic characters (`a-z` and `A-Z`) to their numeric positions (`1-26` for lowercase and `27-52` for uppercase).
- Decodes numeric representations back to text.
- Customizable separator for encoded numbers.
- Preserves spaces between words during encoding and decoding.
- Ignores non-alphabetic characters during decoding.
- Case-insensitive by default, with support for mixed-case encoding.
- Option to trim spaces and ignore special characters.
- Supports both NPM and CDN installations.

### What's New in v1.0.0 (December 2024)

- **Added support for uppercase letters:** You can now encode and decode both lowercase and uppercase letters.
- **Customizable separator:** You can customize the separator used between numbers during encoding.
- **New `ignoreSpecial` option:** Skip non-alphabetic characters during encoding and decoding.
- **Improved case insensitivity:** Now more robust handling of mixed-case input.
- **Trim spaces:** Option to trim leading/trailing spaces during encoding/decoding.
- **Enhanced CDN usage:** CDN now includes both UMD and ESM builds for broader compatibility.

#### New Features

- **Custom Separator:**  
  You can now customize the separator used between numbers during encoding and decoding. Use the `separator` option:

  ```js
  encode('hello world', { separator: '|' })
  // Output: 8|5|12|12|15 23|15|18|12|4
  ```

- **Uppercase Support:**  
  You can enable encoding for uppercase letters by setting the `uppercase` option:

  ```js
  encode('Hello World', { uppercase: true })
  // Output: 8_5_12_12_15 23_15_18_12_4
  ```

- **Ignore Special Characters:**  
  Add the `ignoreSpecial` option to skip characters that are not alphabetic during encoding and decoding.

  ```js
  encode('Hello, World!', { ignoreSpecial: true })
  // Output: 8_5_12_12_15 23_15_18_12_4
  ```

- **Trim Spaces:**  
  Trim leading or trailing spaces using the `trim` option.

  ```js
  encode('  Hello World  ', { trim: true })
  // Output: 8_5_12_12_15 23_15_18_12_4
  ```

## Installation

### Via NPM

Install the package using npm:

```sh
npm install @tfs-8/alphanum
```

### Via CDN

Use the library via CDN in your HTML file:

```html
<script src="https://unpkg.com/@tfs-8/alphanum/dist/alpha-num.umd.js"></script>
```

## Usage

### Import Methods

#### CommonJS Import

If you're using CommonJS, you can import the methods like this:

```js
const { encode, decode } = require('@tfs-8/alphanum')
```

#### ES Module Import

If you're using ES Modules, you can import the methods like this:

```js
import { encode, decode } from '@tfs-8/alphanum'
```

### Encode & Decode

#### Encoding Text

The `encode` method converts a string into its numeric representation, where:

- `a` becomes `1`, `b` becomes `2`, ..., `z` becomes `26`.
- Uppercase letters (`A-Z`) are encoded to `27-52`.
- Spaces are preserved, and non-alphabetic characters are ignored.

```js
const encoded = encode('Hello World', { separator: '_', uppercase: true })
console.log(encoded) // Output: 8_5_12_12_15 23_15_18_12_4
```

#### Decoding Text

The `decode` method converts a numeric representation back into text.

```js
const decoded = decode('8_5_12_12_15 23_15_18_12_4', { separator: '_' })
console.log(decoded) // Output: hello world
```

### Full Example

Here's a complete example of encoding and decoding:

```js
const { encode, decode } = require('@tfs-8/alphanum')

// Input message
const message = 'Hello World'

// Encode the message
const encodedMessage = encode(message, { separator: '_', uppercase: true })
console.log('Encoded:', encodedMessage) // Output: 8_5_12_12_15 23_15_18_12_4

// Decode the encoded message
const decodedMessage = decode(encodedMessage, { separator: '_' })
console.log('Decoded:', decodedMessage) // Output: hello world
```

## Notes

- **Non-Alphabetic Characters:**  
  During decoding, only valid numeric positions (`1-26` for lowercase, `27-52` for uppercase) are converted to letters. All other characters are ignored.
- **Case Insensitivity:**  
  Encoding treats both uppercase and lowercase letters as the same by default. If you enable `uppercase: true`, the function will also encode uppercase letters (`A-Z`) to positions `27-52`.

## Contributing

We welcome contributions! Please check the [CONTRIBUTING.md](https://github.com/MFM-347/AlphaNum/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

Created with ❤️ by [@MFM-347](https://github.com/mfm-347).

## License

The code in this repository is licensed under the **MIT License**.

[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
