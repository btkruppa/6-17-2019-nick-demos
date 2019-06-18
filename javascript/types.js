
function checkType(param) {
  console.log(`param has value: ${param} and type ${typeof(param)}`);
}

checkType(5);
checkType(5.5);
checkType(5.7);
checkType('banana');
checkType(5000000000);
checkType({name: 'name'});
checkType(true);
checkType("purple");
checkType(undefined);
checkType(null);
checkType(NaN);
checkType(`bruno mars`);
checkType([1,2,10]);
checkType(checkType);
checkType(new Date());