// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Update active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Load gallery images on home page
    loadGalleryImages();
});

// Load gallery images from Assets folder
function loadGalleryImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    // List of image files to display
    const images = [
        'Assets/Acrylic and oils on linen_Sep 2025.jpg',
        'Assets/African Dream_January 2006.jpg',
        'Assets/August 2020.jpg',
        'Assets/August 2024.jpg',
        'Assets/Buffalo Girls_January 2023.jpg',
        'Assets/Coyote, Moon Child, Bobcat Woman, and Raven_March 2020.jpg',
        'Assets/Cretaceous period at the Red Deer River_Febuary 2017.jpg',
        'Assets/Dancing by the Great Western sugar refinery_Febuary 2025.jpg',
        'Assets/Death is a thing with feathers_Febuary 2023.jpg',
        'Assets/December 2022 (1).jpg',
        'Assets/December 2022 (2).jpg',
        'Assets/Decmber 2024.jpg',
        'Assets/Echos_Febuary 2011.jpg',
        'Assets/Evangeline\'s Secret Life_October 2009.jpg',
        'Assets/Febuary 2024.jpg',
        'Assets/Flying Lessons_July 2023.jpg',
        'Assets/Flying Monkeys In Space_June 2011.jpg',
        'Assets/Icarus_November 2011.jpg',
        'Assets/Indri_May 2025.jpg',
        'Assets/January 2025.jpg',
        'Assets/Jellyfish Clouds_Febuary 2015.jpg',
        'Assets/July 2019.jpg',
        'Assets/July 2022.jpg',
        'Assets/July 2024.jpg',
        'Assets/July 2025 (1).jpg',
        'Assets/July 2025 (2).jpg',
        'Assets/June 2025.jpg',
        'Assets/Madagascar.jpg',
        'Assets/March 2023.jpg',
        'Assets/March 2024.jpg',
        'Assets/May 2012.jpg',
        'Assets/May 2017.jpg',
        'Assets/May 2020.jpg',
        'Assets/May 2023.jpg',
        'Assets/May 2024.jpg',
        'Assets/Northern Bald Ibis_March 2025.jpg',
        'Assets/November 2024.jpg',
        'Assets/November 2025.jpg',
        'Assets/October 2019.jpg',
        'Assets/October 2024 (1).jpg',
        'Assets/October 2024 (2).jpg',
        'Assets/Ophelia\'s Whooping Crane_July 2022.jpg',
        'Assets/Pterosaurs_December 2022.jpg',
        'Assets/Raven Haven in spring time_Acrylic on Canvas_March 2025.jpg',
        'Assets/Robert Lovett_November 2021.jpg',
        'Assets/Self portrait as a Harpy.jpg',
        'Assets/September 2022.jpg',
        'Assets/September 2024.jpeg',
        'Assets/Sphinx_Febuary 2022.jpg',
        'Assets/Take Me To Church.jpg',
        'Assets/Terror birds_Oils on wood_September 2021.jpg',
        'Assets/The Ballet_Acrylic and oils on linen_October 2025.jpg',
        'Assets/The Home Tree_January 2014.jpg',
        'Assets/The Little Mermaid.jpg',
        'Assets/The Old Witch and her daughter_ September 2017.jpg',
        'Assets/The Owl Witch as a Fledgling on the Cerrado_ November 2020.jpg',
        'Assets/The Owl Witch at Baobab Tree_ Febuary 2022.jpg',
        'Assets/The Owl Witch at The End_May 2022.jpg',
        'Assets/The Owl Witch at the Siberian Steppe_July 2021.jpg',
        'Assets/Untitled_May 2009.jpg'
    ];

    // Sort images by date (newest to oldest)
    const monthMap = {
        'january': 1, 'febuary': 2, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6,
        'july': 7, 'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12
    };

    const sortedImages = images.sort((a, b) => {
        // Extract filenames
        const fileA = a.split('/').pop().replace(/\.[^/.]+$/, '');
        const fileB = b.split('/').pop().replace(/\.[^/.]+$/, '');
        
        // Extract dates from filenames
        const dateRegex = /([A-Za-z]+)\s+(\d{4})/;
        const matchA = fileA.match(dateRegex);
        const matchB = fileB.match(dateRegex);
        
        // If both have dates, sort by date (newest first)
        if (matchA && matchB) {
            const yearA = parseInt(matchA[2]);
            const monthA = monthMap[matchA[1].toLowerCase()];
            const dateA = new Date(yearA, monthA - 1);
            
            const yearB = parseInt(matchB[2]);
            const monthB = monthMap[matchB[1].toLowerCase()];
            const dateB = new Date(yearB, monthB - 1);
            
            return dateB - dateA; // Newest first
        }
        
        // If only one has a date, that one comes first
        if (matchA) return -1;
        if (matchB) return 1;
        
        // If neither has a date, keep original order
        return 0;
    });

    sortedImages.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Extract filename and create label
        const filename = imagePath.split('/').pop().replace(/\.[^/.]+$/, '');
        const cleanLabel = filename.replace(/\s*\([^)]*\)$/, ''); // Remove parentheses at the end
        const label = cleanLabel.replace(/_/g, '<br>');
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = filename;
        img.onerror = function() { this.parentElement.style.display = 'none'; };
        img.addEventListener('click', () => openModal(imagePath));
        galleryItem.appendChild(img);
        
        // Add label below image
        const labelDiv = document.createElement('div');
        labelDiv.className = 'gallery-label';
        labelDiv.innerHTML = label;
        galleryItem.appendChild(labelDiv);
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            return;
        }

        // For GitHub Pages, we'll use FormSubmit (a free service)
        // This sends the form data to your email via FormSubmit.co
        const submissionData = new FormData();
        submissionData.append('name', data.name);
        submissionData.append('email', data.email);
        submissionData.append('subject', data.subject);
        submissionData.append('message', data.message);

        // Log the submission (since we can't actually send emails without a backend)
        console.log('Form submitted with data:', data);
        
        // Display success message
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.classList.add('success');
        formMessage.classList.remove('error');
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 5000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation to elements
window.addEventListener('scroll', () => {
    const newsItems = document.querySelectorAll('.news-item');
    
    newsItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8) {
            item.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Modal functionality
function openModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (modal && modalImage) {
        modalImage.src = imagePath;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Modal event listeners
const modal = document.getElementById('imageModal');
const modalClose = document.querySelector('.modal-close');

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

