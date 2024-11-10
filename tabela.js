function toggleDropdown(event) {
  event.preventDefault(); // Zapobiega domyślnemu działaniu linku
  const dropdownContent = event.target.nextElementSibling;

  // Zamknięcie wszystkich rozwijanych menu
  document.querySelectorAll('.dropdown-content').forEach(content => {
    if (content !== dropdownContent) {
      content.style.display = 'none';
    }
  });

  // Przełączanie widoczności rozwijanego menu
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function toggleModelDropdown(event, brandId) {
  event.preventDefault(); // Zapobiega domyślnemu działaniu linku
  const modelDropdown = document.getElementById(brandId);

  // Zamknięcie wszystkich rozwijanych modeli
  document.querySelectorAll('.model-dropdown').forEach(model => {
    if (model !== modelDropdown) {
      model.style.display = 'none';
    }
  });

  // Przełączanie widoczności modelu
  modelDropdown.style.display = modelDropdown.style.display === 'block' ? 'none' : 'block';
}

// Zamknięcie rozwijanych menu po kliknięciu poza nimi
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content, .model-dropdown').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});