# EDX - Digital Marketing & Freelancing Brand Website

A fast, modern, and fully responsive website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Modern React with hooks and functional components
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Optimized for all devices
- 🎭 **Smooth Animations** - Framer Motion for beautiful transitions
- 🛣️ **React Router** - Client-side routing for SPA navigation
- ♿ **Accessible** - WCAG compliant components
- 📧 **Contact Form** - Working email functionality with Nodemailer

## Pages

- **Home** - Hero section, services showcase, stats, testimonials, and CTA
- **Services** - Detailed service offerings with pricing tiers
- **About** - Brand story, mission, values, and why choose EDX
- **Portfolio** - Project showcase with detail pages
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open the URL shown in the terminal (typically [http://localhost:5173](http://localhost:5173)) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

The built files will be in the `dist/` directory. Use `npm run preview` to preview the production build locally.

## Project Structure

```
EDX/
├── src/
│   ├── App.tsx           
│   ├── main.tsx          
│   ├── index.css        
│   ├── pages/            
│   │   ├── Home.tsx      
│   │   ├── Services.tsx  
│   │   ├── About.tsx     
│   │   ├── Portfolio.tsx 
│   │   ├── PortfolioDetail.tsx
│   │   ├── Contact.tsx   
│   │   └── NotFound.tsx  
│   └── components/     
│       ├── Header.tsx    
│       ├── Footer.tsx    
│       ├── ThemeProvider.tsx 
│       ├── Hero.tsx      
│       ├── ServicesShowcase.tsx 
│       └── ...           
├── public/               
├── index.html           
├── vite.config.ts        
├── tailwind.config.ts    
└── tsconfig.json         
```

## Tech Stack

- **Build Tool**: Vite 5
- **Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Email Configuration

The contact form sends emails to `elitedigitalxp@gmail.com`. To set up email functionality:

1. Create a `.env.local` file in the root directory
2. Add your Gmail credentials:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
3. See `EMAIL_SETUP.md` for detailed setup instructions

## Customization

- Update brand colors in `tailwind.config.ts`
- Modify content in component files
- Add/remove services in respective components
- Update portfolio projects in `PortfolioGrid.tsx`

## License

This project is private and proprietary.

