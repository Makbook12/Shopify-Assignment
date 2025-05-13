function updateMainImage(src) {
  document.getElementById('mainImg').src = src;
}

function selectColor(color) {
  document.getElementById('selectedColor').innerText = 'Selected: ' + color;
  localStorage.setItem('selectedColor', color);

  // Update active color button
  const colorButtons = document.querySelectorAll('.color');
  colorButtons.forEach(button => {
    if (button.style.background.toLowerCase().includes(color.toLowerCase())) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function selectSize(size) {
  document.getElementById('selectedSize').innerText = 'Selected: ' + size;
  localStorage.setItem('selectedSize', size);
}

function showTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  // Show selected tab
  document.getElementById(tabId).style.display = 'block';
  
  // Update active tab button
  document.querySelectorAll('.tabs button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function openSizeChart() {
  document.getElementById('modalOverlay').style.display = 'block';
  document.getElementById('sizeChartModal').style.display = 'block';
}

function openCompareColours() {
  document.getElementById('modalOverlay').style.display = 'block';
  document.getElementById('compareModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
  document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}

// Add to cart functionality
function addToCart() {
  const color = document.getElementById('selectedColor').innerText.replace('Selected: ', '') || 'Gold';
  const size = document.getElementById('selectedSize').innerText.replace('Selected: ', '') || 'Large';
  
  alert(`Added to cart: Luxury Watch - ${color}, Size ${size}`);
  
  // Update cart count if we had a cart icon
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.innerText = parseInt(cartCount.innerText || 0) + 1;
  }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Restore selections on load
window.onload = function () {
  const savedColor = localStorage.getItem('selectedColor') || 'Gold';
  const savedSize = localStorage.getItem('selectedSize') || 'L';
  
  document.getElementById('selectedColor').innerText = 'Selected: ' + savedColor;
  document.getElementById('selectedSize').innerText = 'Selected: ' + savedSize;
  
  // Set default active tab
  document.querySelector('.tabs button').classList.add('active');
  
  // Select the correct size in dropdown
  const sizeSelect = document.getElementById('size');
  if (sizeSelect) {
    for (let i = 0; i < sizeSelect.options.length; i++) {
      if (sizeSelect.options[i].value === savedSize) {
        sizeSelect.selectedIndex = i;
        break;
      }
    }
  }
  
  // Set active color button
  selectColor(savedColor);
};
