# Opal [![NPM version](https://img.shields.io/npm/v/opal-css.svg)](https://www.npmjs.org/package/opal-css)

> Opal is a robust, elegant, feature-rich CSS processor for Node.js and the browser.

[![Build Status](https://img.shields.io/travis/RobLoach/opal-css/master.svg)](https://travis-ci.org/RobLoach/opal-css)
[![Dependency Status](https://img.shields.io/david/RobLoach/opal-css/master.svg)](http://david-dm.org/RobLoach/opal-css)

## Installation

    npm install opal-css --save

## Features

* [SASS-like Markup](https://github.com/jonathantneal/precss#precss-)
* [Autoprefixer](https://github.com/postcss/autoprefixer-core#quick-example)
* [Minification](http://cssnano.co/optimisations/)

## API

### Stand-Alone API
```js
var opal = require('opal-css')

opal.process('string of opal', options).then(function (css) {
  css
  //=> Compiled CSS
})
```

## License

MIT
