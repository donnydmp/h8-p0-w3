function palindrome(kata) {
  var kata1 = ''
  for(i=kata.length-1; i>=0; i--){
    kata1+= kata[i];
  }
return kata === kata1
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false