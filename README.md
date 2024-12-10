# AlphaNum

[![Version](https://img.shields.io/npm/v/@starc347/alpha-num.svg)](https://www.npmjs.com/package/@starc347/alpha-num)  
[![Downloads](https://img.shields.io/npm/dm/@starc347/alpha-num.svg)](https://www.npmjs.com/package/@starc347/alpha-num)

**AlphaNum** is a lightweight JavaScript utility for encoding and decoding alphanumeric text into numeric representations. It maps letters to their positions in the alphabet and converts them back.

## Features

- Encodes alphabetic characters (`a-z`) to their numeric positions (`1-26`).
- Decodes numeric representations back to text.
- Preserves spaces between words during encoding and decoding.
- Ignores non-alphabetic characters during decoding.
- Case-insensitive operation.

## Installation & Usage Via NPM

Install the package using npm:

```sh
npm install @starc347/alpha-num
```

### Usage

#### Import Methods

##### CommonJS Import

```js
const AlphaNum = require("@starc347/alpha-num");
```

##### ES Module Import

```js
import AlphaNum from "@starc347/alpha-num";
```

#### Encode & Decode

##### Encoding Text

The `encode` method converts a string into its numeric representation, where:

- `a` becomes `1`, `b` becomes `2`, ..., `z` becomes `26`.
- Spaces are preserved, and non-alphabetic characters are ignored.

```js
const encoded = AlphaNum.encode("hello world");
console.log(encoded); // Output: 8-5-12-12-15 23-15-18-12-4
```

##### Decoding Text

The `decode` method converts a numeric representation back into text.

```js
const decoded = AlphaNum.decode("8-5-12-12-15 23-15-18-12-4");
console.log(decoded); // Output: hello world
```

#### Example

Here's a complete example of encoding and decoding:

```js
const AlphaNum = require("@starc347/alpha-num");

// Input message
const message = "hello world";

// Encode the message
const encodedMessage = AlphaNum.encode(message);
console.log("Encoded:", encodedMessage); // Output: 8-5-12-12-15 23-15-18-12-4

// Decode the encoded message
const decodedMessage = AlphaNum.decode(encodedMessage);
console.log("Decoded:", decodedMessage); // Output: hello world
```

## Installation & Usage via CDN

### Installation

Use the library via CDN in your HTML file:

```html
<script src="https://unpkg.com/@starc347/alpha-num/dist/alpha-num.umd.js"></script>
```

### Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AlphaNum CDN Example</title>
    <!-- Import AlphNum -->
    <script src="https://unpkg.com/@starc347/alpha-num/dist/alpha-num.umd.js"></script>
  </head>
  <body>
    <h1>AlphaNum Example</h1>
    <script>
      // Use AlphNum
      console.log(AlphaNum.encode("hello world")); // Output: 8-5-12-12-15 23-15-18-12-4
      console.log(AlphaNum.decode("8-5-12-12-15 23-15-18-12-4")); // Output: hello world
    </script>
  </body>
</html>
```

### Notes on CDN Usage

- When included via the CDN, the library is available globally as `AlphaNum`.
- No installation or setup is required.

## Notes

- **Non-Alphabetic Characters:**  
  During decoding, only valid numeric positions (`1-26`) are converted to letters. All other characters are ignored.

- **Case Insensitivity:**  
  Encoding treats both uppercase and lowercase letters as the same.

## Contributing

Contributions are welcome!  
If you'd like to improve this library, please follow these steps:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

For any issues or feature requests, visit the [issues page](https://github.com/ArtMFM-70/AlphaNum/issues)

## Credits

**Created by:** [Farhan Madni](https://github.com/MFM-347)

## License

This library is licensed under the **Apache 2.0 License**.

[![License](https://img.shields.io/badge/License-Apache_2.0-0298c3.svg)](https://opensource.org/licenses/Apache-2.0)
