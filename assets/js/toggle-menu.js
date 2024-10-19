(function() {
  const mobileMenu = document.getElementById('mobileMenu');

  document.querySelectorAll('[data-menu-toggle]').forEach(function(menuToggle) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenu.classList.toggle('translate-x-0');
    });
  });
})();
