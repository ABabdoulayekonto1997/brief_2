document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.getElementById('carousel-items');
    const paginationItems = document.querySelectorAll('.carousel-pagination div');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Fonction de mise à jour du carousel
    function updateCarousel() {
        const offset = -100 * currentSlide; // Calcul de l'offset
        carouselItems.style.transform = `translateX(${offset}%)`; // Applique l'offset
        paginationItems.forEach((item, index) => {
            item.classList.toggle('bg-gray-300', index === currentSlide); // Met en surbrillance le point de la pagination
        });
    }

    // Fonction pour faire défiler automatiquement
    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    // Pagination
    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Initialisation du carousel
    updateCarousel();

    // Démarrer le défilement automatique
    setInterval(autoSlide, 3000); // Change d'image toutes les 3 secondes
});
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let index = 0;
    const totalTestimonials = testimonials.length;

    function updateCarousel() {
        const offset = -(index * 100) + '%';
        container.style.transform = `translateX(${offset})`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % totalTestimonials;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + totalTestimonials) % totalTestimonials;
        updateCarousel();
    });
});
