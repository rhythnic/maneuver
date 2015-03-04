var should   = require ('should'),
    path     = require ('path'),
    fs       = require('fs'),
    stylus   = require('accord').load('stylus'),
    shift    = require('../'),
    cssparse = require('css-parse');

/**********************************
    Utilities
**********************************/

var test_path = path.join(__dirname, 'fixtures');

function compile(p) {
  return stylus.renderFile(p, { use: shift() });
}

function match_expected (out, p, done) {
  try {
    var expected_path = path.join(path.dirname(p), path.basename(p, '.styl')) + '.css';
    console.log(expected_path);
    if (!fs.existsSync(expected_path)) {
      throw new Error('"expected" file doesnt exist');
    }
    var expected_contents = fs.readFileSync(expected_path, 'utf8');
    cssparse(out).should.eql(cssparse(expected_contents));
  } catch (err) {
    return done(err);
  }
  done();
}

function compile_and_match (p, done) {
  compile(p).done( function (out) {
    match_expected(out.result, p, done);
  }, done);
}

/**********************************
    tests
**********************************/

describe('api', function () {
  var $pkg;
  before(function () {
    $pkg = require('../package.json');
  });
  it('exposes the library path', function () {
    shift.path.should.match(/shift/);
  });
  it('exposes the correct version', function () {
    shift.version.should.eql($pkg.version);
  });
});

describe('offcanvas', function () {
  var $path;
  before(function () {
    $path = path.join(test_path, 'offcanvas');
  });
  it('offcanvas', function (done) {
    compile_and_match(path.join($path, 'offcanvas.styl'), done);
  });
});

describe('toggle', function () {
  var $path;
  before(function () {
    $path = path.join(test_path, 'toggle');
  });
  it('toggle', function (done) {
    compile_and_match(path.join($path, 'toggle.styl'), done);
  });
});