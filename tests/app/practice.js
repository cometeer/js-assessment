if ( typeof window === 'undefined' ) {
  require('../../app/practice');
  var expect = require('chai').expect;
}

describe('practice', function() {
  // Set up variables and environment you want to have access to in all tests.
  var a;

  beforeEach(function() {
    // will be run before each test.
    a = [ 1, 2, 3, 4 ];
  });

  it('explain what you will be testing', function() {
    // do a thing, assert an outcome.
    practiceAnswers.functionThatWillBeCalledByTest(a, a);
    expect().to.eql();
  });
});
