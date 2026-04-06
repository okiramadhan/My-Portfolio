# 🚀 Muhammad Oki Ramadhan - Portfolio Website

A modern, fully responsive portfolio website showcasing my skills, projects, and experience as a Software Developer.

## ✨ Features

- 🌓 **Dark Mode** - Toggle between light and dark themes with persistent storage
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern Design** - Clean, professional UI using Tailwind CSS
- ✅ **Smooth Animations** - Engaging fade-in and slide-up animations
- 📧 **Contact Form** - Easy contact with integrated email functionality
- 🔗 **Social Links** - Connect on LinkedIn, Instagram, and GitHub
- 📊 **Skills Overview** - Visual representation of technical skills and proficiency
- 💼 **Project Showcase** - Display your best 4 projects with descriptions
- 📍 **Timeline** - Work experience and education timeline

## 🛠️ Tech Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** React Icons
- **Animations:** CSS Keyframes

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd Portfolio-MuhammadOkiR

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📝 Customization

### Update Your Information
Edit `src/constants/index.ts` to add:
- Personal details (name, email, phone)
- Biography
- Social media links
- Skills and proficiency levels
- Work experience
- Education
- Project portfolio

### Example: Adding a New Project
```typescript
{
  id: 5,
  title: 'Your Project Name',
  description: 'Project description here...',
  image: 'https://image-url.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],
  demoLink: 'https://project-demo.com',
  githubLink: 'https://github.com/username/project'
}
```

## 🎨 Customizing Styles

### Change Color Theme
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color-here'
  }
}
```

### Modify Animations
Animations can be customized in:
- `tailwind.config.js` - Global animations
- `src/App.css` - Component-specific animations

## 📧 Contact Form Integration

The current form uses `mailto:` for simplicity. For backend integration:

1. Choose a service (EmailJS, Formspree, SendGrid, etc.)
2. Update `Contact.tsx` with service credentials
3. Implement form submission handler

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚙️ Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview built site
npm run preview

# Lint code
npm run lint
```

## 📄 License

This project is open source and available for personal use.

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Project filtering and search
- [ ] Testimonials section
- [ ] Admin dashboard for content updates
- [ ] Multi-language support
- [ ] AI chatbot integration

## 📞 Contact

- Email: [okiramadhan05@gmail.com](mailto:okiramadhan05@gmail.com)
- LinkedIn: [@muhammad-oki-r](https://linkedin.com/in/muhammad-oki-r-a3a3272a9/)
- Instagram: [@okiramadhan_](https://instagram.com/okiramadhan_)

## 🎉 Ready to Deploy?

Your portfolio is production-ready! Choose your hosting platform and deploy with one of the methods above.

---

Made with ❤️ using React & TypeScript | Last Updated: April 2026

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
