'use strict'

var Postcss = require('postcss')

/**
 * The processors to use with OpalCSS.
 */
var processors = {
  precss: require('precss'),
  cssnano: require('cssnano')
}

/**
 * Opal CSS PostCSS Plugin
 */
var opal = Postcss.plugin('opal', function (options) {
  var postcss = Postcss()
  options = options || {}

  // Initialize all the processors.
  for (var name in processors) {
    // Retrieve any of the given options for the processor.
    var opts = (name in options) ? options[name] : {}

    // Only enable the processor if it's not explicitly disabled.
    if (opts !== false) {
      // Initialize the processor with the given options.
      postcss.use(processors[name](opts))
    }
  }

  return postcss
})

module.exports = opal

module.exports.process = function (css, options) {
  return Postcss([opal(options)]).process(css, options || {})
}
