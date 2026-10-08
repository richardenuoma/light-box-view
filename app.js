const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Open lightbox when thumbnail clicked
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove -thumbnail to get full-size image
    const fullSizeSrc = item.src.replace('-thumbnail', '');
    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = 'flex';
  });
});

// Close function
function closeLightbox() {
  lightbox.style.display = 'none';
}

closeBtn.addEventListener('click', closeLightbox);

// When you click the lightbox background, close it
lightbox.addEventListener('click', (e) => {
  // If click is on the lightbox itself (not the image), close
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Also close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});