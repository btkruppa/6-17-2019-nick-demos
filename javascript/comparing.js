// in JS we can compare variables using == or ===
// or != vs !==
// === checks type and value
// == should probably be avoided because it attempts type coercion to ignore type and just compare value

function compare(one, two) {
  console.log(`one = ${one} and has type ${typeof(one)}
two = ${two} and has type ${typeof(two)}
  one == two evaluates to ${one == two}
  one === two evaluates to ${one === two}`)
}


compare(1, 1);
compare('1', 1);
compare(false, 'false');
compare(NaN, NaN);
compare(undefined, null);
compare(0, '');
compare(0, false);
compare({}, {});
compare({}, []);