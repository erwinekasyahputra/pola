var baris = 5;
var polaBintang = "*";
var polaSamaDgn = "=";
var PolaDolar = "$";
var spasi = "";
for (let indexx = baris; indexx > 0; indexx--) {
    var hasil = "";
    
    var jmlhCell = (indexx*2)-1;
    console.log(jmlhCell);
for (let indexx2 = jmlhCell; indexx2 > 0; indexx2--){    
    if ((indexx2 %2)==0) {
     hasil = hasil.concat(polaSamaDgn);
    }  
    else { 
    hasil = hasil.concat(polaBintang);
    }
}
spasi += " ";
console.log(spasi+hasil);

}