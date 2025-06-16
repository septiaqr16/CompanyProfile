const daftarMakanan = [
  { nama: "Nasi Goreng", gambar: "assets/img/gallery/rujak nasi" },
  { nama: "Mie Ayam", gambar: "https://source.unsplash.com/160x100/?mie-ayam" },
  { nama: "Sate Ayam", gambar: "https://source.unsplash.com/160x100/?sate" },
  { nama: "Bakso", gambar: "https://source.unsplash.com/160x100/?bakso" },
  { nama: "Ayam Geprek", gambar: "https://source.unsplash.com/160x100/?ayam-geprek" },
];

const input = document.getElementById("searchInput");
const hasil = document.getElementById("hasilPencarian");

input.addEventListener("input", () => {
  const keyword = input.value.toLowerCase();
  const hasilFilter = daftarMakanan.filter(m => m.nama.toLowerCase().includes(keyword));

  hasil.innerHTML = "";

  hasilFilter.forEach((makanan, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `
      <img src="${makanan.gambar}" alt="${makanan.nama}">
      <p>${makanan.nama}</p>
    `;
    hasil.appendChild(card);
    <script>
  const searchInput = document.getElementById('searchInput');
  const searchOverlay = document.getElementById('searchOverlay');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();

    if (query === "nasi goreng") {
      searchOverlay.classList.remove("hidden");
    } else {
      searchOverlay.classList.add("hidden");
    }
  });
</script>

  });
});
