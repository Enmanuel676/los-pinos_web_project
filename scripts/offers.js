document.addEventListener('DOMContentLoaded', () => {
    // 1. Carousel Scroll Logic
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        // Scroll amount (roughly one card width + gap)
        const scrollAmount = 300;

        if (prevBtn && nextBtn && track) {
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    });

    // 2. Ingredients Modal Logic
    const modal = document.getElementById('ingredientsModal');
    const modalText = document.getElementById('modalIngredientsText');
    const closeBtn = document.getElementById('closeModalBtn');
    const infoBtns = document.querySelectorAll('.info-btn');

    if (modal && modalText && closeBtn) {
        // Open modal on click
        infoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ingredients = e.currentTarget.getAttribute('data-ingredients');
                if (ingredients) {
                    modalText.textContent = ingredients;
                    modal.showModal();
                }
            });
        });

        // Close modal on close button click
        closeBtn.addEventListener('click', () => {
            modal.close();
        });

        // Close modal when clicking outside of it
        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }
});