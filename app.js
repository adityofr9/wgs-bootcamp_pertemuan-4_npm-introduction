//Mencoba npm Validator
const validator = require('validator');

console.log(validator.isEmail('adityofr9@gmail.com')); //Hasil validasi bernilai true
console.log(validator.isMobilePhone('08123456789', 'id-ID')); //Hasil akan bernilai true apabila format sesuai nomor telp Indonesia