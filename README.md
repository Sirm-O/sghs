# Sengani Girls School Website

A modern, responsive website for Sengani Girls School with integrated Content Management System (CMS).

## Features

- **Responsive Design**: Beautiful galactic-themed design that works on all devices
- **Content Management**: Easy-to-use CMS for managing pages, images, and videos
- **Modern Technology**: Built with React, Tailwind CSS, and Decap CMS
- **SEO Optimized**: Structured content for better search engine visibility

## Live Website

Visit the live website at: [https://dotacnuy.manus.space](https://dotacnuy.manus.space)

## CMS Access

Content editors can access the CMS at: [https://dotacnuy.manus.space/admin/](https://dotacnuy.manus.space/admin/)

## Project Structure

```
├── public/
│   ├── admin/           # CMS admin interface
│   ├── content/         # Content files (JSON and Markdown)
│   └── images/uploads/  # Media uploads folder
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Navbar, Footer, etc.)
│   │   └── pages/       # Page components
│   ├── lib/            # Utility functions
│   └── assets/         # Static assets
├── dist/               # Built website files
└── docs/               # Documentation
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sengani-school-website.git
   cd sengani-school-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Content Management

### Accessing the CMS

1. Navigate to `/admin/` on your deployed site
2. Sign in with your Netlify Identity credentials
3. Start editing content!

### Content Types

- **Pages**: Home, About, Academics, Student Life, Contact
- **Gallery Photos**: Images with categories and descriptions
- **Gallery Videos**: YouTube/Vimeo videos with thumbnails

### Adding Content

Refer to the `CMS_USER_GUIDE.md` for detailed instructions on managing content.

## Deployment

This project is configured for deployment on Netlify with the following settings:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

For detailed deployment instructions, see `GITHUB_SETUP_GUIDE.md`.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Authentication**: Netlify Identity
- **Hosting**: Netlify
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Support

For support or questions about the website, please contact the school administration or refer to the documentation files:

- `DEPLOYMENT_SUMMARY.md` - Technical deployment details
- `CMS_USER_GUIDE.md` - Content management instructions
- `GITHUB_SETUP_GUIDE.md` - GitHub and Netlify setup

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with modern web technologies for optimal performance
- Designed with accessibility and user experience in mind
- CMS integration for easy content management by non-technical users

