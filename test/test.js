var should   = require ('should'),
    path     = require ('path'),
    fs       = require('fs'),
    stylus   = require('accord').load('stylus'),
    maneuver    = require('../'),
    cssparse = require('css-parse');

/**********************************
    Utilities
**********************************/

var test_path = path.join(__dirname, 'fixtures');

function compile(p) {
  return stylus.renderFile(p, { use: maneuver() });
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
    maneuver.path.should.match(/maneuver/);
  });
  it('exposes the correct version', function () {
    maneuver.version.should.eql($pkg.version);
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

describe('flipcard', function () {
  var $path;
  before(function () {
    $path = path.join(test_path, 'flipcard');
  });
  it('flipcard', function (done) {
    compile_and_match(path.join($path, 'flipcard.styl'), done);
  });
});