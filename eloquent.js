
//Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function isEven(x) {
  if (x == 0)
    return true;
  else if (x == 1)
    return false;
  else if (x < 0)
    return isEven(-x);
  else
    return isEven(x - 2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
