let s = "babbabbaba"

var str = '';
for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < 1; j++) {
    var left = i;
    var right = left + j;
    while (s[left] && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > str.length) {
      str = s.slice(left + 1, right);
    }
  }
}
console.log(str)

// for each unit we expand left and right to check whether they match
// we expand two units in case of duplicated characters
// once they dont match anymore, we slice a part of an array and return it
