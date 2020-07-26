let s = "abcabcbb"
let arr = []
let max = 0

for (let i = 0; i < s.length; i++) {
  if (arr.indexOf(s[i]) === -1) {
    arr.push(s[i])
    if (arr.length > max) {
      max = arr.length
    }
  }
  // if the character doesn't exist in temp arr, push it to temp arr and check length of arr to refresh max length
  else {
    arr = arr.slice(arr.indexOf(s[i]) + 1, arr.length)
      // arr = [] we cant use this incase of duplicated one happens next to it
    arr.push(s[i])
  }
  // if the character does exist in temp arr, remove elements in arr except current character
}
console.log(max)
