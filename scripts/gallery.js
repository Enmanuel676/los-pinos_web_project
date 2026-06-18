 // Script to handle the image popup (lightbox) functionality
        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            const closeModalBtn = document.querySelector('.close-modal');

            // Open modal
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    const caption = item.querySelector('.gallery-overlay span').textContent;
                    
                    modalImg.src = img.src;
                    modalCaption.textContent = caption;
                    modal.showModal();
                    
                    // Prevent body scroll when modal is open
                    document.body.style.overflow = 'hidden';
                });
            });

            // Close modal by button
            closeModalBtn.addEventListener('click', () => {
                modal.close();
                document.body.style.overflow = '';
            });

            // Close modal by clicking outside the image
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.close();
                    document.body.style.overflow = '';
                }
            });

            // Mobile menu toggle logic
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            if(menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        });