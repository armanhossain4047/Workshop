const carouselItems = document.querySelectorAll('#electricalCarousel .carousel-item');
  let currentCarouselIndex = 0;

  function updateCarousel() {
    carouselItems.forEach((item, index) => {
      item.classList.toggle('hidden', index !== currentCarouselIndex);
    });
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
  }

  setInterval(updateCarousel, 5000); // Rotate slides every 3 seconds