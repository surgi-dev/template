const lagu = document.getElementById("lagu");

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("halaman1").classList.add("hidden");
  document.getElementById("halaman2").classList.remove("hidden");
  lagu.play();
  lagu.loop = true;
});

document.getElementById("gift").addEventListener("click", () => {
  document.getElementById("halaman2").classList.add("hidden");
  document.getElementById("halaman3").classList.remove("hidden");
});

// Teks dengan 214 karakter.
const fullText =
  "Terimakasih sudah jadi bagiannn terbahagianya aku selama inii. semoga besok, besoknya lagi, lusa, lusanya lagi, Seterusnyaaa bisaa terus bersamaaa sampe pulang ke rumah yg samaaa. AAMMIIINNN";

const textElement = document.getElementById("typingText");
const totalCharacters = fullText.length;

// Waktu pengetikan per karakter dalam milidetik (ms).
// 50ms = sangat cepat; 150ms = kecepatan normal.
const typingSpeed = 120;

let charIndex = 0;

// Fungsi untuk mengetik satu karakter
function type() {
  if (charIndex < totalCharacters) {
    // Tambahkan karakter berikutnya
    textElement.textContent += fullText.charAt(charIndex);
    charIndex++;

    // Panggil fungsi type lagi setelah jeda typingSpeed
    setTimeout(type, typingSpeed);
  } else {
    // Setelah selesai, tambahkan kelas 'finished' untuk memunculkan kursor berkedip
    textElement.classList.add("finished");
  }
}

// Mulai animasi
type();
