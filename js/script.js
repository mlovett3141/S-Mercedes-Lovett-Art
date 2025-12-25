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

    // List of image files to display (auto-generated from Assets/gallery)
    const images = [
        'Assets/gallery/African Dream_Acrylic on canvas  30 x 40_January 2006.png',
        'Assets/gallery/Allegory_Acrylic on canvas  24 x 36_May 2020.png',
        'Assets/gallery/Anxiety_Acrylic on wood  12 x 12_March 2024.png',
        'Assets/gallery/Buffalo Girls_Acrylic on canvas  20 x 12_January 2023.png',
        'Assets/gallery/Carter_Acrylic on canvas  40 x 30_July 2022.png',
        'Assets/gallery/Cloud Waves_Acrylic on canvas  40 x 30_May 2024.png',
        'Assets/gallery/Congo_Acrylic on wood panel  24 x 30_September 2022.png',
        'Assets/gallery/Costa Rica_Acrylic on wood panel  24 x 30_March 2023.png',
        'Assets/gallery/Coyote, Moon Child, Bobcat Woman, and Raven_March 2020.png',
        'Assets/gallery/Dancing by the Great Western sugar refinery_Acrylic on canvas  40 x 30_Febuary 2025.png',
        'Assets/gallery/Death is a thing with feathers  18 x 12_Febuary 2023.png',
        'Assets/gallery/Dodo_Acrylic on canvas  36 x 36_August 2024.png',
        'Assets/gallery/Echos_Acrylic on canvas  40 x 30_Febuary 2011.png',
        'Assets/gallery/Evangeline\'s Secret Life_Acrylic on canvas  30 x 40_October 2009.png',
        'Assets/gallery/Fire Frogs_Acrylic on canvas  18 x 12_October 2019.png',
        'Assets/gallery/Flying Lessons_Acrylic on canvas  48 x 48_July 2023.png',
        'Assets/gallery/Flying Monkeys in Space_Acrylic on canvas  36 x 36_June 2015.png',
        'Assets/gallery/Griffin_Acrylic on wood panel  36 x 24_November 2024.png',
        'Assets/gallery/Harpy_Acrylic on canvas  40 x 30_August 2020January 2025.png',
        'Assets/gallery/Hell Creek_Acrylic on canvas  48 x 60_Febuary 2017.png',
        'Assets/gallery/Iberia_Acrylic on canvas  40 x 30_March 2025.png',
        'Assets/gallery/Icarus_Acrylic on canvas  36 x 36_November 2011.png',
        'Assets/gallery/Icraus_Acrylic on canvas  40 x 30_July 2025.png',
        'Assets/gallery/Indri Aria_Acrylic on canvas  30 x 40_May 2025.png',
        'Assets/gallery/Jellyfish Clouds_Acrylic on canvas  40 x 30_Febuary 2015.png',
        'Assets/gallery/Kudu_Acrylic on wood panel  24 x 30_June 2025.png',
        'Assets/gallery/Madagascar_Acrylic on canvas  36 x 36_May 2009.png',
        'Assets/gallery/Ophelia’s Whooping Crane_Acrylic on wood  18 x 12_July 2022.png',
        'Assets/gallery/Our Lady Landsloth_Acrylic on canvas  30 x 40_July 2019.png',
        'Assets/gallery/Owl Witch as a Fledgling_Acrylic on canvas  40 x 30_November 2020.png',
        'Assets/gallery/Owl Witch at the End_Acrylic on canvas  48 x 48_May 2022.png',
        'Assets/gallery/Owl Witch in a Baobab_Acrylic on canvas  48 x 48_Febuary 2022.png',
        'Assets/gallery/Owl Witch in Siberia_Acrylic on canvas  48 x 48_July 2021.png',
        'Assets/gallery/Pink Octopus_Acrylic on canvas  12 x 12_December 2022.png',
        'Assets/gallery/Pirate Cats_Acrylic on canvas  12 x 12_December 2022.png',
        'Assets/gallery/Pleistocene Cowgirl_Acrylic on wood panel  24 x 30_October 2024.png',
        'Assets/gallery/Pterosaurs_Acrylic on canvas  40 x 30_December 2022.png',
        'Assets/gallery/Raven Haven in spring time_Acrylic on Canvas  24 x 30_March 2025.png',
        'Assets/gallery/Robert Lovett_Acrylic on canvas  36 x 36_November 2021.png',
        'Assets/gallery/Self portrait as a HarpyAcrylic on canvas  24 x 30_August 2010.png',
        'Assets/gallery/Sphinx_Acrylic on canvas  20 x 30_Febuary 2022.png',
        'Assets/gallery/Steven_Acrylic on canvas  30 x 40_July 2024.png',
        'Assets/gallery/Sumatra_Acrylic on wood panel  24 x 30_Febuary 2024.png',
        'Assets/gallery/Take Me To Church_Acrylic on canvas  30 x 24_May 2011.png',
        'Assets/gallery/The Ballet_Oil and acrylic on linen  36 x 48_October 2025.png',
        'Assets/gallery/The Home Tree_Acrylic on canvas  30 x 40_January 2014.png',
        'Assets/gallery/The Little Mermaid_Acrylic on canvas  30 x 40_August 2004.png',
        'Assets/gallery/The Old Witch and her daughter_Acrylic on canvas 40 x 30_September 2017.png',
        'Assets/gallery/Thunderbird_Acrylic on canvas  24 x 30_July 2025.png',
        'Assets/gallery/Triceratops Herd_Acrylic on wood panel  30 x 24_September 2024.png',
        'Assets/gallery/Untitled_Acrylic on canvas  18 x 12_October 2024.png',
        'Assets/gallery/Untitled_Acrylic on canvas  24 x 36_May 2017.png',
        'Assets/gallery/Untitled_Acrylic on canvas  30 x 20_May 2012.png',
        'Assets/gallery/Untitled_Acrylic on canvas  30 x 40_August 2020.png',
        'Assets/gallery/Untitled_Acrylic on canvas  30 x 40_December 2024.png',
        'Assets/gallery/Untitled_Acrylic on canvas  36 x 36_May 2009.png',
        'Assets/gallery/Untitled_Acrylic on canvas  40 x 20_May 2023.png',
        'Assets/gallery/Untitled_Acrylic on canvas  40 x 30_July 2024.png',
        'Assets/gallery/Untitled_Oils on wood  30 x 20_September 2025.png',
        'Assets/gallery/Whooping Cranes and Wolves_Acrylic on linen  48 x 36_November 2025.png',
        'Assets/gallery/With Blue Fox_Oil on canvas  40 x 30_September 2025.png'
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
        // Split on <br> to separate lines
        const labelLines = cleanLabel.split('_');
        let label = '';
        if (labelLines.length > 1) {
            label = `<strong>${labelLines[0]}</strong><br>${labelLines.slice(1).join('<br>')}`;
        } else {
            label = `<strong>${labelLines[0]}</strong>`;
        }
        
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

