# Opal CSS [![NPM version](https://img.shields.io/npm/v/opalcss.svg)](https://www.npmjs.org/package/opalcss)

[![Build Status](https://img.shields.io/travis/RobLoach/opalcss/master.svg)](https://travis-ci.org/RobLoach/opalcss)
[![Dependency Status](https://img.shields.io/david/RobLoach/opalcss/master.svg)](http://david-dm.org/RobLoach/opalcss)

> Opal is a robust, elegant, feature-rich CSS pre-processor for Node.js and the browser, built using [PostCSS](https://github.com/postcss/postcss).

## Installation

    npm install opalcss --save

## Features

* [SASS-like Markup](https://github.com/jonathantneal/precss#precss-)
* [Autoprefixer](https://github.com/postcss/autoprefixer-core#quick-example)
* [Minification](http://cssnano.co/optimisations/)

## API

### Stand-Alone API
```js
var opal = require('opalcss')

opal.process('string of opal', options).then(function (result) {
  result.css
  //=> Compiled CSS
})
```

### [PostCSS](https://github.com/postcss/postcss)
```js
postcss([ require('opalcss')({ /* options */ }) ])
```

### CLI

    echo "TODO: Implement a CLI"

## License

MIT
