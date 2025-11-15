# EDX - Digital Marketing & Freelancing Brand Website

A fast, modern, and fully responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - Latest Next.js with App Router
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Optimized for all devices
- 🎭 **Smooth Animations** - Framer Motion for beautiful transitions
- 🔍 **SEO Optimized** - Built-in metadata and optimization
- 🖼️ **Image Optimization** - Next.js Image component
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
EDX/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ThemeProvider.tsx # Dark/light mode provider
│   └── ...               # Other components
├── public/               # Static assets
└── ...config files
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
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

