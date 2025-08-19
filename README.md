# Mr. Boss Portfolio Website

A sleek and classy portfolio website built with React.js, Three.js, and modern frontend technologies. This project showcases advanced animations, 3D graphics, and a professional design that stands out.

## 🚀 Features

### ✨ Modern Design
- **Dark Theme**: Elegant dark color scheme with accent colors
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations
- **Glass Morphism**: Modern glassmorphism effects

### 🎨 Three.js Integration
- **3D Backgrounds**: Animated 3D spheres and boxes
- **Interactive Elements**: Rotating 3D objects in project cards
- **Performance Optimized**: Efficient Three.js rendering

### 📱 Advanced UI/UX
- **Smooth Scrolling**: Locomotive Scroll for buttery smooth scrolling
- **Intersection Observer**: Scroll-triggered animations
- **Hover Effects**: Interactive hover states and micro-animations
- **Loading States**: Professional loading animations

### 🛠️ Technical Stack
- **React 18**: Latest React features and hooks
- **Three.js**: 3D graphics and animations
- **Framer Motion**: Advanced animations
- **Styled Components**: CSS-in-JS styling
- **Lucide React**: Modern icon library
- **GSAP**: Professional animations

## 📋 Sections

1. **Hero Section**: Animated introduction with 3D background
2. **About**: Personal story with animated statistics
3. **Skills**: Interactive skill bars and technology grid
4. **Projects**: Filterable project showcase with 3D elements
5. **Experience**: Timeline-based work history
6. **Contact**: Animated contact form with 3D background
7. **Footer**: Social links and quick navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mr-boss-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #0a0a0a;
  --secondary-color: #1a1a1a;
  --accent-color: #64ffda;
  /* ... more variables */
}
```

### Content
- Update personal information in each component
- Replace project data in `src/components/Projects.js`
- Modify experience data in `src/components/Experience.js`
- Update contact information in `src/components/Contact.js`

### 3D Elements
- Modify Three.js components in each section
- Adjust animation parameters in Three.js materials
- Customize 3D geometries and lighting

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: WebP format support
- **Code Splitting**: Automatic code splitting
- **Minified Assets**: Production-ready builds

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

### Animation & 3D
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Three.js helpers
- `three` - 3D graphics library
- `framer-motion` - Animation library
- `gsap` - Professional animations

### Styling & UI
- `styled-components` - CSS-in-JS
- `lucide-react` - Icon library
- `react-intersection-observer` - Scroll animations

### Utilities
- `locomotive-scroll` - Smooth scrolling
- `react-locomotive-scroll` - React wrapper

## 🎨 Design System

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Display Font**: Playfair Display (Serif)

### Color Palette
- **Primary**: #0a0a0a (Dark)
- **Secondary**: #1a1a1a (Dark Gray)
- **Accent**: #64ffda (Cyan)
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #8892b0 (Light Gray)

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 100px
- **Border Radius**: 8px
- **Transitions**: 0.3s cubic-bezier

## 🌟 Key Features

### Smooth Scrolling
Uses Locomotive Scroll for buttery smooth scrolling experience with custom easing.

### 3D Animations
Three.js powered 3D elements that respond to user interaction and scroll position.

### Intersection Observer
Components animate in as they come into view, creating a dynamic experience.

### Glass Morphism
Modern glassmorphism effects with backdrop blur and transparency.

### Responsive Grid
CSS Grid layouts that adapt beautifully to all screen sizes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: hello@mrboss.dev
- GitHub: [Your GitHub Profile]

---

**Made with ❤️ and lots of ☕ by Mr. Boss** 