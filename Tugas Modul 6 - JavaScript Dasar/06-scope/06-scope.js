/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
 Ada 2 variabel scope pada Javascript yaitu
      1. Local Scope
      Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.
      Maka variabel hanya bisa diakses didalam blocks saja. Tidak bisa diakses diluar blocks.

      2. Global Scope
      Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.
      Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.
 
 */

  //Implementasi
  /* Global  Scope */

  var makanan = "Bakso";   // disini kita bisa menggunakan variabel 'makanan'
  function simpleFunction() {   
 // disini kita bisa menggunakan variabel 'makanan'
}

  /*Local Scope */

 // dibagian kosong  ini variabel 'makanan' tidak dapat diakses
function simpleFunction(){
  var makanan = "Bakso";
  // jika variabel 'makanan' ditaruh di dalam sini maka variabel 'makanan' dapat diakses
}

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
 1. apa yang akan tampil didalam comsole.log ? 
    Mariah
  
 2. apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
    karena local variable akan di prioritaskan.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
