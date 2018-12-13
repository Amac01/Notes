function Test() {

}

Test.prototype.compare = function (comment, actual, expectation) {
  if (actual === expectation) {
    console.log(comment + ' Test Passed');
  } else {
    console.log(comment + ' Test Failed');
  }
};

Test.prototype.compareArray = function (actual, expectation) {
  var differencesCounter = actual.length;
  for (var i = 0; i < actual.length; i++) {
    if (actual[i] === expectation[i]) {
      differencesCounter --;
    }
  };

  (differencesCounter > 0)? console.log('Test Failed') : console.log('Test Passed');

};
