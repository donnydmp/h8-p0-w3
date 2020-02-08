function targetTerdekat(arr) {
  var hasil = 0
  if (arr.indexOf('x') - arr.indexOf('o') > 0){
    hasil = (arr.indexOf('x') - arr.indexOf('o'));
  }  
  else{
    hasil = (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
  }
  return hasil
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2