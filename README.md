# S Mercedes Lovett - Art Portfolio Website

A beautiful, responsive art portfolio website for artist S Mercedes Lovett, built with HTML, CSS, and vanilla JavaScript.

## Features

- **Home Page**: Hero section with featured gallery
- **About Page**: Detailed information about the artist
- **News Page**: Blog-style updates and announcements
- **Contact Page**: Contact form and social media links
- **Responsive Design**: Fully responsive and mobile-friendly
- **Smooth Navigation**: Sticky navbar with smooth scrolling
- **Image Gallery**: Automatic image loading from Assets

## Project Structure

```
S-Mercedes-Lovett-Art/
├── index.html          # Home page
├── about.html          # About me page
├── news.html           # News and updates page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── Assets/             # Art images folder
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd S-Mercedes-Lovett-Art
   ```

2. **Add your art images**
   - Place your art images in the root directory or Assets folder
   - Update the image paths in `js/script.js` if needed

3. **Update contact information**
   - Edit `contact.html` to add your actual email and social media links

4. **Deploy to GitHub Pages**
   - Push to your GitHub repository
   - Go to Settings → Pages → Source
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` directory
   - Your site will be available at `https://username.github.io/S-Mercedes-Lovett-Art/`

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
- Primary color: `#e74c3c` (red accent)
- Dark color: `#2c3e50` (dark blue-gray)

### Contact Form
The contact form displays a success message locally. To send actual emails, consider using:
- FormSubmit (free service for static sites)
- Netlify Forms
- A backend service like Firebase

### Gallery Images
Update the image paths in `js/script.js` in the `loadGalleryImages()` function to match your image locations.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 S Mercedes Lovett. All rights reserved.

## Support

For questions or issues, please contact S Mercedes Lovett through the contact page.
