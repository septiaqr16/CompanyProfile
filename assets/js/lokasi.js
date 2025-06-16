// Deteksi lokasi pengguna dan tampilkan
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    const alamat = data.display_name || 'Tidak ditemukan';
    document.getElementById("user-location").textContent = alamat;
  }, function(error) {
    document.getElementById("user-location").textContent = "Gagal mendeteksi lokasi.";
  });
} else {
  document.getElementById("user-location").textContent = "Geolocation tidak didukung.";
}
