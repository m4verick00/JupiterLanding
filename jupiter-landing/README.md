# Project Jupiter - Landing Page

A modern, high-performance landing page for Project Jupiter, a planet-scale security telemetry platform. Built with Next.js 14, Tailwind CSS, and Three.js.

## 🚀 Features

- **Modern Design**: Cyberpunk-inspired design with Jupiter's planetary theme
- **3D Jupiter Model**: Interactive Three.js Jupiter with mouse parallax
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, optimized assets, and performance budget compliance
- **SEO Ready**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation and reduced motion support
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono
- **Deployment**: Vercel-ready with static export support

## 🎨 Design System

### Colors
- **Jupiter Background**: `#05060b` (deep space)
- **Jupiter Deep**: `#0a0f1a` (darker space)
- **Jupiter Accent**: `#b36d28` (Jupiter bands copper)
- **Ion Neon**: `#16f2f2` (cyber cyan)
- **Ion Purple**: `#7c3aed`
- **Signal Green**: `#22c55e` (success)
- **Threat Red**: `#ef4444` (alert)

### Typography
- **Headings**: Inter (700/600)
- **Body/UI**: Inter (400/500/600)
- **Numeric/Metrics**: JetBrains Mono (500)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/projectjupiter/landing.git
cd landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation
│   ├── Features.tsx      # Features section
│   ├── Integrations.tsx  # Integrations carousel
│   ├── Pricing.tsx       # Pricing table
│   ├── Footer.tsx        # Footer
│   └── JupiterCanvas.tsx # 3D Jupiter model
└── lib/                  # Utility functions
    └── utils.ts          # Tailwind class utilities
```

## 🎯 Sections

- **Hero**: Main landing section with 3D Jupiter and CTAs
- **Value Props**: Key benefits and metrics
- **Features**: Detailed feature breakdown with visuals
- **Integrations**: Integration carousel with categories
- **Pricing**: Transparent pricing tiers
- **Footer**: Links, newsletter signup, and company info

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Newsletter API (optional)
BUTTONDOWN_API_KEY=your_buttondown_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_plausible_domain
```

### Customization

1. **Colors**: Update `tailwind.config.ts` and `globals.css`
2. **Content**: Modify component files in `src/components/`
3. **SEO**: Update metadata in `src/app/layout.tsx`
4. **3D Model**: Customize `src/components/JupiterCanvas.tsx`

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **3D Model**: Only renders on desktop (≥1024px) for performance

## ⚡ Performance

- **LCP**: < 2.5s on 4G
- **TTI**: < 3s
- **CLS**: < 0.1
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP/AVIF format support
- **Fonts**: Self-hosted with display: swap

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Self-Hosted

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Security

- Security.txt at `/security.txt`
- Content Security Policy headers
- No sensitive data in client-side code
- Secure API endpoints

## 📊 Analytics

Supports multiple analytics providers:
- Google Analytics
- Plausible (privacy-focused)
- PostHog (self-hosted)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.projectjupiter.in](https://docs.projectjupiter.in)
- **Issues**: [GitHub Issues](https://github.com/projectjupiter/landing/issues)
- **Discord**: [Join our community](https://discord.gg/jupiter)
- **Email**: hello@projectjupiter.in

## 🙏 Acknowledgments

- Design inspiration from modern cybersecurity tools
- Three.js community for 3D graphics examples
- shadcn/ui for beautiful component primitives
- Tailwind CSS for utility-first styling
