const tombol = document.querySelector("button");
tombol.addEventListener("click", function() {
  alert("Halo! Silakan hubungi saya di Instagram @selvin 😊");
});

// Ganti warna background saat di tap
const warna = ["#000000", "#1a1a2e", "#16213e", "#0f3460", "#533483"];
let index = 0;
document.body.addEventListener("click", function() {
  index++;
  if (index >= warna.length) index = 0;
  document.body.style.backgroundColor = warna[index];
});

// Ganti teks sapaan otomatis setiap 2 detik
const sapaan = [
  "Mahasiswa & Web Developer Pemula 🚀",
  "Suka Belajar Coding 💻",
  "HTML & CSS Enthusiast 🎨",
  "Future Full Stack Developer ⚡"
];
let i = 0;
const teks = document.querySelector("section p");
setInterval(function() {
  i++;
  if (i >= sapaan.length) i = 0;
  teks.textContent = sapaan[i];
}, 2000);



