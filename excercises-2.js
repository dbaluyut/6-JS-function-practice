// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------
function max(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.assert(max(2, 3) === 3)
console.assert(max(23, 24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  if (b > a && c) {
    return b
  } else if (a > b && c) {
    return a
  } else if (c > a && b) {
    return c
  }
}
console.log(maxOfThree(2, 56, 3))
console.assert(maxOfThree(2, 56, 3) === 56)
console.assert(maxOfThree(12, 3, 4) === 12)
console.assert(maxOfThree(-12, 4, -5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------
function isVowel(a) {
  if (
    a == "a" ||
    a == "e" ||
    a == "i" ||
    a == "o" ||
    a == "u" ||
    a == "A" ||
    a == "E" ||
    a == "I" ||
    a == "O" ||
    a == "U"
  ) {
    return true
  } else {
    return false
  }
}

console.assert(isVowel(0) === false)
console.assert(isVowel("B") === false)
console.assert(isVowel("b") === false)
console.assert(isVowel("a") === true)
console.assert(isVowel("E") === true)
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

// function rovarspraket(a) {
//   // Length of the String
//   len = a.length
//   res = ""

//   // Run till length of String
//   for (i = 0; i < len; i++) {
//     // checking if character is vowel,
//     // if yes then append it as it is
//     if (
//       a.charAt(i) == "a" ||
//       a.charAt(i) == "e" ||
//       a.charAt(i) == "i" ||
//       a.charAt(i) == "o" ||
//       a.charAt(i) == "u"
//     ) {
//       res = res + a.charAt(i)
//     }

//     // if space then append as it is
//     else if (a.charAt(i) == " ") {
//       res = res + a.charAt(i)
//     }

//     // else double the consonant and
//     // put o in between
//     else {
//       res = res + a.charAt(i) + "o" + a.charAt(i)
//     }
//   }

//   // return translated String
//   return res
// }

console.log(rovarspraket(0))

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

function reverse(a) {
  let res = ""
  for (let i = a.length - 1; i >= 0; i--) {
    res += a[i]
  }
  return res
}

console.assert(reverse("books") === "skoob")
console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
)
