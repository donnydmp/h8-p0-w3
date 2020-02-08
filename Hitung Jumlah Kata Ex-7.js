function hitungJumlahKata(kalimat) {
   
  var hasil= kalimat.split(' ')
  
  var temp =0;
  for (var x =0; x < hasil.length; x++){
    temp +=1;
  }
  return temp;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5