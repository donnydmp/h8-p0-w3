function tentukanDeretGeometri(arr) {
  var hitung = arr.slice(-1) / arr.slice(-2, -1);
  hasil = true;
  
  for (var i = 0; i <= arr.length-2 ; i++) {
    if (hitung * arr[i] !== arr[i+1]) {
      hasil = false;
    }
  }
  
  return hasil;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false