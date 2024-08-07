document.addEventListener("DOMContentLoaded", function() {
    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    menuToggle.addEventListener('click', () => {
        menuItems.classList.toggle('active');
    });

    // Image carousel
    const carouselImages = document.querySelectorAll('.image-carousel img');
    let currentImageIndex = 0;
    const totalImages = carouselImages.length;

    function showImage(index) {
        carouselImages.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds
});
