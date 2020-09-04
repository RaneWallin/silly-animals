# Silly Animals

This package allows you to create unique identifiers using animal names with descriptors, such as adjectives and adverbs. It is ideal for creating interesting random URLs, filenames, and IDs.

## Installation

```sh
npm install silly-animals
```

## Usage example

```javascript
const sillyAnimals = require("silly-animals");

// if no paramters are passed it returns a string in
// the form "{{adj}} {{adv}} {{n}}" i.e. "silly stuck panther"
let result = sillyAnimals();

// To create a custom template, use {{type}} where you want
// random words. There are current three word types
// {{adj}} - an adjective
// {{adv}} - an adverb
// {{n}} - a noun, always an animal
let customResult = sillyAnimals("{{adj}} {{adj}} {{n}}");
// example output: unpleased chiefly lapwing
```

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
npm install
```

## Release History

- 1.0.0 initial release

## Meta

Rane Wallin – [@rane_wallin](https://twitter.com/rane_wallin)

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/RaneWallin](https://github.com/RaneWallin/)

## Contributing

1. Fork it (<https://github.com/RaneWallin/silly-animals/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
