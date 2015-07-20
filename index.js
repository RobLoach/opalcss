'use strict'

var Postcss = require('postcss')
var clone = require('clone')

var processors = {
  precss: require('precss'),
  cssnano: require('cssnano'),
  autoprefixer: {
    processor: require('autoprefixer-core'),
    opts: { browsers: ['last 2 versions'] }
  }
}

var opal = Postcss.plugin('opal', function (options) {
  options = options || {}

  var postcss = Postcss()

  for (var i in processors) {
    if (typeof processors[i] === 'function') {
      postcss.use(processors[i]())
    } else {
      var opts = processors[i].opts
      postcss.use(clone(processors[i].processor(opts)))
    }
  }

  return postcss
})

module.exports = opal

module.exports.process = function (css, options) {
  return Postcss([opal(options)]).process(css, options || {})
}
