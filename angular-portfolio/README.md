# Modern Angular Portfolio Website

A stunning, responsive one-page portfolio website built with Angular featuring 3D hover animations and modern design.

## 🚀 Features

- **Modern Hero Section** with streaming text animation
- **3D Interactive Skills Grid** with hover effects and category filtering
- **Responsive Contact Form** with validation and email integration
- **Smooth Scrolling Navigation** between sections
- **Fully Responsive Design** for all devices
- **3D Animations** using CSS transforms
- **Modern Glassmorphism UI** with backdrop filters

## 🛠️ Tech Stack

- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and mixins
- **Font Awesome** - Professional icons
- **CSS 3D Transforms** - Hardware-accelerated animations

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-portfolio
   ```

2. **Install Angular CLI globally (if not installed)**
   ```bash
   npm install -g @angular/cli
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```
   or for Windows users, run:
   ```bash
   start.bat
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 🛠️ Troubleshooting

### Common Issues:

1. **Angular CLI not found**
   ```bash
   npm install -g @angular/cli@latest
   ```

2. **Port already in use**
   ```bash
   ng serve --port 4201
   ```

3. **Dependencies issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Build errors**
   ```bash
   ng build --configuration development
   ```

### Fixed Issues:
- ✅ **Removed incorrect favicon.ico** - Was causing asset loading errors
- ✅ **Added BrowserAnimationsModule** - For smooth animations
- ✅ **Fixed TypeScript errors** - Added proper type annotations
- ✅ **Updated social links** - Replaced placeholder URLs
- ✅ **Added environment files** - For proper Angular configuration
- ✅ **Created polyfills.ts** - For browser compatibility

## 🎨 Sections Overview

### 1. Home Section
- **Streaming text animation**: "I'm a .NET Full-Stack Developer"
- **3D floating shapes** background
- **Interactive hero card** with technology icons
- **Call-to-action buttons** with hover effects

### 2. Skills Section
- **Filterable skills grid** by category (Frontend, Backend, Cloud, Database)
- **3D flip cards** with skill proficiency levels
- **Interactive hover animations** with rotation and glow effects
- **Technology icons** with brand colors:
  - HTML5, CSS3, JavaScript, TypeScript
  - .NET, Java, Angular, Bootstrap, PrimeNG
  - AWS, SQL

### 3. Contact Section
- **Professional contact form** with validation
- **Real-time form feedback** and error handling
- **Email integration** (opens default email client)
- **Social media links** with 3D hover effects
- **Responsive form layout**

## 🎯 Contact Form Integration

The contact form is configured to send emails to: **j1999amar@gmail.com**

When users submit the form, it will:
1. Validate all required fields
2. Show loading state during submission
3. Open the default email client with pre-filled content
4. Display success message
5. Reset form after 3 seconds

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Customization

### Colors
The color scheme uses a modern dark theme with cyan accents:
- **Primary**: `#00ffff` (Cyan)
- **Secondary**: `#0080ff` (Blue)
- **Background**: `#0c0c0c` to `#1a1a1a` (Dark gradient)
- **Text**: `#e0e0e0` (Light gray)

### Fonts
- **Primary font**: 'Inter' from Google Fonts
- **Weights used**: 300, 400, 500, 600, 700, 800

### Animations
- **CSS 3D transforms** for card flips and rotations
- **Smooth transitions** for hover effects
- **Keyframe animations** for floating elements
- **Backdrop filters** for glassmorphism effects

## 🔧 Build & Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

### Testing
```bash
ng test
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Hero section component
│   │   ├── skills/            # Skills grid component
│   │   └── contact/           # Contact form component
│   ├── app.component.*        # Main app component
│   └── app.module.ts          # App module configuration
├── assets/                    # Static assets
├── styles.scss               # Global styles
└── index.html                # Main HTML file
```

## 🌟 Key Features Implementation

### 3D Hover Effects
- **CSS transform-style: preserve-3d** for 3D context
- **perspective** for depth perception
- **rotateY() and rotateX()** for card flips
- **transform-origin** for rotation points

### Smooth Scrolling
- **CSS scroll-behavior: smooth** for native smooth scrolling
- **JavaScript scroll methods** for programmatic scrolling
- **Intersection Observer** for scroll-triggered animations

### Responsive Design
- **CSS Grid** and **Flexbox** for layouts
- **CSS custom properties** for consistent theming
- **Media queries** for breakpoint management
- **clamp()** function for fluid typography

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **CSS animations** instead of JavaScript for better performance
- **Optimized bundle size** with Angular CLI
- **Compressed assets** for faster loading
- **Efficient change detection** with OnPush strategy

## 📞 Contact Information

For any questions or collaborations, reach out via:
- **Email**: j1999amar@gmail.com
- **Form**: Use the contact form on the website

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Angular and modern web technologies**
