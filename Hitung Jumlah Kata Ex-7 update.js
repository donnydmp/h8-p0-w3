function hitungJumlahKata(kalimat) {
   
  var jumlahKata = 1
  var i =0;
  
  while(i<kalimat.length){
    if (kalimat.substring(i,i+1)==" "){
      jumlahKata ++;
      i++;
    }
    i++
  }
    
  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5