 // Tombol Hubungi Saya
const tombol = document.querySelector("button");
tombol.addEventListener("click", function() {
  alert("Halo! Silakan hubungi saya di Instagram @selvin 😊");
});

// Ganti teks sapaan otomatis
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


// Dark/Ligth Mode Toggle
// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

 // Form Kontak
const tombolKirim = document.getElementById("kirim");
tombolKirim.addEventListener("click", function() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  if (nama === "" || pesan === "") {
    alert("⚠️ Nama dan pesan tidak boleh kosong!");
  } else {
    alert("✅ Pesan terkirim! Terima kasih " + nama + "! 😊");
    document.getElementById("nama").value = "";
    document.getElementById("pesan").value = "";
  }
});

 // Typing Effect
const nama = "Selvin Damai Dohona";
const namaElement = document.getElementById("namaKetik");
let huruf = 0;

function ketik() {
  if (huruf < nama.length) {
    namaElement.textContent += nama.charAt(huruf);
    huruf++;
    setTimeout(ketik, 100);
  }
}

ketik();