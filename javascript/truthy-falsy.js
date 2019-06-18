
function testTruthyFalsy(param) {
  console.log(`the value: ${param} is of type: ${typeof(param)}
    and has a truthy falsy value of ${!!param}`);
}

testTruthyFalsy(1);
testTruthyFalsy(0);
testTruthyFalsy(4 < 5);
testTruthyFalsy(-1);
testTruthyFalsy('hello');
testTruthyFalsy('');
testTruthyFalsy(true);
testTruthyFalsy({});
testTruthyFalsy([]);
testTruthyFalsy(null);
testTruthyFalsy(undefined);
testTruthyFalsy(NaN);
testTruthyFalsy(new Date());
testTruthyFalsy(100);
testTruthyFalsy(false);
testTruthyFalsy(testTruthyFalsy);