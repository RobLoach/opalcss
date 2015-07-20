var testit = require('testit')
var opal = require('..')
var fs = require('fs')
var assert = require('assert')

function test (name) {
  testit(name, function (done) {
    var path = 'test/fixtures/' + name + '.'
    var encoding = { encoding: 'utf8' }
    fs.readFile(path + 'input', encoding, function (err, input) {
      if (err) {
        return done(new Error(err))
      }
      var opts = {
        from: path + 'input'
      }
      opal.process(input, opts).then(function (output) {
        fs.readFile(path + 'expected', encoding, function (err, expected) {
          if (err) {
            return done(new Error(err))
          }
          assert.equal(output.css.trim(), expected.trim())
          done()
        })
      }, function (err) {
        done(new Error(err))
      })
    })
  })
}

testit('opal-css', function () {
  test('vars')
  test('import')
  test('nested')
  test('autoprefixer')
})
