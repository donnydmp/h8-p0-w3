var dataHandling2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

dataHandling2.splice(1, 1, 'Roman Alamsyah Elsharawy');
dataHandling2.splice(2,1, 'Provisi Bandar Lampung');
dataHandling2.splice(4,1,'Pria', 'SMA Internasional Metro');
console.log(dataHandling2);

var bulan = dataHandling2[3].split('/')
var namaBulan = bulan[1];

switch(namaBulan){
  case '01' : {console.log ('Januari'); break}
  case '02' : {console.log ('Februari'); break}
  case '03' : {console.log ('Maret'); break}
  case '04' : {console.log ('April'); break}
  case '05' : {console.log ('Mei'); break}
  case '06' : {console.log ('Juni'); break}
  case '07' : {console.log ('Juli'); break}
  case '08' : {console.log ('Agustus'); break}
  case '09' : {console.log ('September'); break}
  case '10' : {console.log ('Oktober'); break}
  case '11' : {console.log ('November'); break}
  case '12' : {console.log ('Desember'); break}
  default : {console.log ('ada kesalahan bulan'); break}
}

var bulan1 = dataHandling2[3].split('/')
bulan1.sort(function(value1, value2){return value2 - value1})
console.log(bulan1)

console.log(bulan.join('-'));

var nama = dataHandling2[1].slice (0,15)
console.log(nama)
