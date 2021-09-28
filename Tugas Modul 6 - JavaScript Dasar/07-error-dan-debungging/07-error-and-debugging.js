/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
   1. Type Error
   Terjadi kesalahan ketika menggunakan nilai yang berada di luar kisaran tipe yang diharapkan

   2. Reference Error
   Terjadi ketika menggunakan referensi variabel yang belum dideklarasikan

   3. Range Error
   Terjadi ketika menggunakan angka yang berada di luar rentang nilai legal

   4.Syntax Error
   Terjadi ketika terjadi kesalahan sintaks pada code
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
ReferenceError pada baris console.log(salaryWithConst) ini di karenakan mengakses variable yang belum di inisialisasi.
tidak error pada console.log(salaryWithVar) karena perlakuan javascript kepada var yang membuat dapat di akses sebelum inisialisasinya
namun tetap harus ada inisialisasinya
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
