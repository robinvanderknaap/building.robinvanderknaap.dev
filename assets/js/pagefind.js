import MicroModal from 'micromodal';

window.addEventListener('DOMContentLoaded', (event) => {
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    resetStyles: false
  });
  MicroModal.init();
});
