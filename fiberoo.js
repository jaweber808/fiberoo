function fib() {
  let returnArray = [0, 1];
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for(let i = 0; i < 98; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    returnArray.push(sum);
  }
  return returnArray;
}

console.log(fib());

function numToString(nums) {
  return _.map(nums, function (stringIt) { return `${stringIt}`; });
}

console.log(numToString(fib()));

function numEvenNums(nums) {
  let results = _.countBy(nums, list => list % 2 === 0);
  return results.true;
}

console.log(numEvenNums(fib()));
