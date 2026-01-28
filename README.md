# Owneo Dashboard

A modern, responsive property management dashboard built with Vue.js 3 and Vite.

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
owneo-dashboard/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── Sidebar.vue      # Navigation sidebar
│   │   ├── Navbar.vue       # Top navigation bar
│   │   └── EmptyState.vue   # Empty state placeholder
│   ├── views/               # Page components (routes)
│   │   ├── HomeView.vue     # Dashboard home
│   │   ├── InboxView.vue    # Messages
│   │   ├── MeineImmosView.vue       # Properties
│   │   ├── MieterVerwaltungView.vue # Tenants
│   │   └── ControllingView.vue      # Finance
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── assets/              # Images, fonts, styles
│   │   ├── main.css         # Global styles
│   │   └── *.png            # Images & icons
│   ├── App.vue              # Root component
│   └── main.js              # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

---

## 🎯 Features

### ✨ Core Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Sidebar Navigation** - Slide-out drawer on mobile, fixed on desktop
- **Dashboard Cards** - Display rental income and upcoming appointments
- **Interactive Charts** - Wealth forecast with SVG visualization
- **Empty States** - User-friendly placeholders for empty pages
- **Vue Router** - Multi-page navigation with lazy loading

### 📱 Responsive Behavior
- **Desktop** - Full sidebar always visible
- **Tablet** - Drawer sidebar, optimized layout
- **Mobile** - Drawer sidebar, stacked layout, touch-friendly

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Vue 3** | 3.4+ | Progressive JavaScript framework |
| **Vite** | 5.2+ | Fast build tool and dev server |
| **Vue Router** | 4.3+ | Client-side routing |
| **Lucide Vue** | 0.563+ | Beautiful icon library |
| **CSS3** | - | Custom responsive styling |

---

## 📱 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeView | Main dashboard with cards and charts |
| `/inbox` | InboxView | Message center and notifications |
| `/meine-immos` | MeineImmosView | Property management |
| `/mieter-verwaltung` | MieterVerwaltungView | Tenant management |
| `/controlling` | ControllingView | Financial overview and analytics |

---

## 🎨 Styling

### Design System
- **Primary Color**: `#2aa14e` (Green)
- **Font Family**: `Inter` (Google Fonts)
- **Responsive**: Mobile-first approach
- **Layout**: CSS Grid & Flexbox

### Breakpoints
```css
Mobile, Tablet, and Desktop breakpoints
```

 

## 🧩 Components

### Sidebar (`Sidebar.vue`)
- Navigation menu with icons
- Collapsible on mobile/tablet
- Route-based active states
- User profile section

### Navbar (`Navbar.vue`)
- Dynamic page title
- Notification icon with badge
- Add button (FAB on mobile)
- Hamburger menu toggle

### EmptyState (`EmptyState.vue`)
- Reusable placeholder component
- Customizable emoji, title, buttons
- Responsive button layout

---

## 📊 Dashboard Features

### Home Page
1. **Banner** - Call-to-action message
2. **Rental Income Card** - Monthly revenue tracking
3. **Appointments Card** - Upcoming tasks/meetings
4. **Wealth Forecast Chart** - Interactive SVG line chart

### Other Pages
- Currently show empty states
- Ready for feature implementation
- Consistent layout and styling

---

## 🔧 Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Environment
No environment variables required for basic setup.

### Scripts
```bash
# Development with hot reload
npm run dev

# Preview production build locally
npm run preview
```

 
### Breakpoints
Adjust responsive breakpoints in `main.css`:
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

---

## 📦 Dependencies

### Production
- `vue` - Core framework
- `vue-router` - Routing
- `lucide-vue-next` - Icons

### Development
- `@vitejs/plugin-vue` - Vue 3 support for Vite
- `vite` - Build tool

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

---

## 📝 Notes

### Language
All UI text is in **German** (Deutsch).

### Icons
Uses [Lucide Icons](https://lucide.dev/) - a beautiful, consistent icon set.

### Responsive Strategy
Mobile-first CSS with progressive enhancement for larger screens.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built with Vue.js and Vite
- Icons by Lucide
- Font by Google Fonts (Inter)


