const daftarMakanan = [
  { nama: "Nasi Goreng", gambar: "https://source.unsplash.com/160x100/?nasi-goreng" },
  { nama: "Mie Ayam", gambar: "https://source.unsplash.com/160x100/?mie-ayam" },
  { nama: "Sate Ayam", gambar: "https://source.unsplash.com/160x100/?sate" },
  { nama: "Bakso", gambar: "https://source.unsplash.com/160x100/?bakso" },
  { nama: "Ayam Geprek", gambar: "https://source.unsplash.com/160x100/?ayam-geprek" }
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const closeButton = document.getElementById("closeButton");
  const hasil = document.getElementById("hasilPencarian");

  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();
    const hasilFilter = daftarMakanan.filter(m => m.nama.toLowerCase().includes(keyword));
    hasil.innerHTML = "";

    if (keyword !== "") {
      closeButton.style.display = "inline";
    } else {
      closeButton.style.display = "none";
    }

    hasilFilter.forEach((makanan, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.animationDelay = `${index * 0.2}s`;
      card.innerHTML = `
        <img src="${makanan.gambar}" alt="${makanan.nama}">
        <p>${makanan.nama}</p>
      `;
      hasil.appendChild(card);
    });
  });

  closeButton.addEventListener("click", () => {
    input.value = "";
    hasil.innerHTML = "";
    closeButton.style.display = "none";
    input.focus();
  });
});
