# Portfolio Website - Copilot Instructions

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

**Name:** Muhammad Oki Ramadhan - Portfolio Website
**Technologies:** React 19, TypeScript, Tailwind CSS, Vite, React Icons
**Type:** Single Page Application (SPA)

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Deployment
Deploy the generated `dist` folder to Vercel, Netlify, or any static hosting service.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── index.ts
├── pages/              # Page-specific components (future use)
├── hooks/              # Custom React hooks
│   └── useDarkMode.ts  # Dark mode management
├── utils/              # Utility functions
│   └── helpers.ts      # Helper functions
├── constants/          # Constants and configuration
│   └── index.ts        # Portfolio data (skills, projects, experience)
├── types/              # TypeScript type definitions
│   └── index.ts        # Data type interfaces
├── App.tsx             # Main application component
├── App.css             # Global styles
├── index.css           # Tailwind directives and global CSS
└── main.tsx            # Application entry point
```

## Key Features

### 1. Dark Mode
- Automatic detection of system preference
- Manual toggle via navbar button
- Persistent storage using localStorage

### 2. Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Fully responsive on all devices

### 3. Sections
- **Hero:** Eye-catching introduction with CTA buttons
- **About:** Personal introduction and highlights
- **Skills:** Technical skills organized by category with proficiency levels
- **Experience:** Work history and education timeline
- **Projects:** Portfolio of 4+ sample projects
- **Contact:** Contact form and social media links
- **Footer:** Quick navigation and additional info

### 4. Animations
- Smooth scroll behavior  
- Fade-in and slide-up animations
- Hover effects on interactive elements

## Customization Guide

### Update Personal Information
Edit `src/constants/index.ts`:
- Update `PERSONAL_INFO` with your details
- Add your actual social links
- Replace placeholder project data with real projects

### Add Skills
```typescript
// In src/constants/index.ts
const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', ...]
  },
  // ...
]
```

### Add Projects
```typescript
// In src/constants/index.ts
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description...',
    image: 'image-url',
    technologies: ['tech1', 'tech2'],
    demoLink: 'https://...',
    githubLink: 'https://...',
  },
  // ...
]
```

### Update Colors/Theme
Edit `tailwind.config.js` to customize:
- Primary colors
- Font families
- Animations
- Breakpoints

## Contact Form

The contact form in the Contact section uses `mailto:` links to send emails. For a fully functional backend:

1. Install email service (e.g., EmailJS, Nodemailer)
2. Update the `handleSubmit` function in `src/components/Contact.tsx`
3. Add backend endpoint for email sending

## Deployment Steps

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Netlify
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Other Services
Use the build artifacts in the `dist` folder for any static hosting service.

## Notes

- Replace placeholder images with actual project screenshots
- Add your real GitHub, LinkedIn, and social media links
- Update the CV download link with your actual resume
- Test dark mode functionality across all browsers
- Optimize images for web before deployment

## Future Enhancements

- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add testimonials section
- [ ] Create admin panel for content updates
- [ ] Add multi-language support
- [ ] Implement AI chatbot for inquiries

---

**Last Updated:** April 2026
**Website Status:** ✅ Ready for Production
