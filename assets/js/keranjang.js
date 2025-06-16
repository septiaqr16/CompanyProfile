<script>
  const cart = [];

  function toggleCart() {
    document.getElementById('sidebarCart').classList.toggle('show');
  }

  function addToCart(itemName, itemPrice) {
    // Simpan ke array
    cart.push({ name: itemName, price: itemPrice });

    // Update tampilan keranjang
    const cartList = document.getElementById('cartItems');
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${itemName} <span class="badge bg-primary rounded-pill">${itemPrice}</span>`;
    cartList.appendChild(li);

    // Tampilkan keranjang
    document.getElementById('sidebarCart').classList.add('show');
  }

  // Event listener tombol
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-danger');

    buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        const name = card.querySelector('h5').textContent.trim();
        const priceText = card.querySelector('.fw-bold.text-1000').textContent.trim();
        const price = priceText.replace('IDR ', '');
        addToCart(name, price);
      });
    });
  });
</script>
