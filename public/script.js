// Mendapatkan ukuran lebar dan tinggi layar
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Menampilkan ukuran layar dalam konsol
console.log("Lebar Layar: " + screenWidth);
console.log("Tinggi Layar: " + screenHeight);


// function setZoom() {
//     // Mendapatkan tingkat piksel per unit panjang
//     var devicePixelRatio = window.devicePixelRatio || 1;

//     // Sesuaikan dengan skala yang diinginkan, misalnya 100%
//     var desiredZoom = devicePixelRatio * 100;

//     // Atur zoom level
//     document.body.style.zoom = desiredZoom + "%";
// }

// // Panggil fungsi setZoom setelah halaman selesai dimuat
// window.onload = setZoom;
