# Natural Homeo Research Laboratory — Complete Website

A world-class pharmaceutical manufacturing and distribution website built with Next.js 15,
TypeScript, Tailwind CSS, and headless WordPress.

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 App Router, TypeScript, Tailwind CSS |
| UI | ShadCN UI, Framer Motion, Lucide Icons |
| Forms | React Hook Form + Zod validation |
| CMS | Headless WordPress with REST API |
| Database | MySQL (via WordPress) |
| Email | Nodemailer (SMTP) |
| Auth | JWT |
| Hosting | VPS + Docker + Nginx |
| CDN | Cloudflare |
| Analytics | Google Analytics 4, Microsoft Clarity |
| SEO | Dynamic metadata, Schema markup, Sitemap |

## 📁 Project Structure

```
naturalhomoeoresearchlaboratory/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout with Header/Footer
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About Us page
│   │   ├── products/             # Products catalog
│   │   ├── manufacturing/        # Manufacturing facility
│   │   ├── research/             # Research page
│   │   ├── quality-assurance/    # Quality standards
│   │   ├── certifications/       # Certifications
│   │   ├── distributor-network/  # Distributor map
│   │   ├── become-distributor/   # Distributor application
│   │   ├── become-dealer/        # Dealer registration
│   │   ├── franchise/            # Franchise opportunity
│   │   ├── blog/                 # Blog listing
│   │   ├── careers/              # Career openings
│   │   ├── contact/              # Contact page
│   │   ├── privacy-policy/       # Privacy policy
│   │   ├── terms/                # Terms & conditions
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   ├── robots.ts             # Robots.txt
│   │   └── api/                  # API routes
│   │       ├── contact/          # Contact form handler
│   │       ├── distributor/      # Distributor form handler
│   │       ├── dealer/           # Dealer form handler
│   │       └── careers/          # Career application handler
│   ├── components/
│   │   ├── layout/               # Header, Footer
│   │   ├── home/                 # Home page sections
│   │   ├── common/               # Shared components
│   │   ├── products/             # Product components
│   │   ├── about/                # About components
│   │   ├── contact/              # Contact components
│   │   ├── distributor/          # Distributor components
│   │   ├── dealer/               # Dealer components
│   │   ├── manufacturing/        # Manufacturing components
│   │   ├── blog/                 # Blog components
│   │   ├── careers/              # Career components
│   │   └── ui/                   # UI primitives
│   ├── lib/
│   │   ├── constants.ts          # Site configuration & data
│   │   ├── utils.ts              # Utility functions
│   │   └── wordpress.ts          # WordPress API client
│   └── types/
│       └── index.ts              # TypeScript type definitions
├── docker/
│   ├── Dockerfile                # Next.js production image
│   ├── docker-compose.yml        # Full stack Docker setup
│   └── nginx.conf                # Nginx reverse proxy config
├── wordpress/
│   └── setup.md                  # WordPress CMS setup guide
├── public/
│   ├── images/                   # Static images
│   └── favicon.ico
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── package.json                  # Dependencies
```

## 🛠️ Local Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd naturalhomoeoresearchlaboratory

npm install
```

### 2. Environment Setup

Copy `.env.local` and fill in your values:
```bash
cp .env.local .env.local.backup
# Edit .env.local with your actual values
```

Key variables to configure:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WORDPRESS_API_URL=https://cms.naturalhomeoresearch.com/wp-json
SMTP_HOST=smtp.gmail.com
SMTP_USER=your@email.com
SMTP_PASSWORD=your_password
ADMIN_EMAIL=admin@company.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Production Deployment

### 1. VPS Setup (Ubuntu 22.04)

```bash
# Install Docker
curl -fsSL https://get.docker.com | bash
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Deploy

```bash
# Clone repo
git clone <your-repo> /var/www/nhrl
cd /var/www/nhrl

# Configure environment
cp .env.local .env
nano .env  # Edit production values

# Deploy
cd docker
docker-compose up -d

# Check logs
docker-compose logs -f nextjs
```

### 3. SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot

# Generate certificate
sudo certbot certonly --standalone -d naturalhomeoresearch.com -d www.naturalhomeoresearch.com -d cms.naturalhomeoresearch.com

# Copy certs to Docker SSL directory
sudo cp /etc/letsencrypt/live/naturalhomeoresearch.com/fullchain.pem docker/ssl/
sudo cp /etc/letsencrypt/live/naturalhomeoresearch.com/privkey.pem docker/ssl/
```

### 4. Auto-renew SSL

```bash
# Add crontab for auto-renewal
crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 🔧 WordPress CMS Setup

See `wordpress/setup.md` for detailed instructions.

Quick setup:
1. Install WordPress at `cms.naturalhomeoresearch.com`
2. Install required plugins (ACF PRO, JWT Auth, Custom Post Types UI)
3. Create custom post types (Products, Testimonials, Team, FAQs, etc.)
4. Configure ACF field groups
5. Set up JWT authentication
6. Add sample content

## ☁️ Cloudflare Setup

1. Add domain to Cloudflare
2. Enable "Full SSL/TLS" encryption
3. Configure Page Rules:
   - Cache Level: Standard for static assets
   - Browser Cache TTL: 1 year for `/_next/static/*`
4. Enable Web Application Firewall (WAF)
5. Set up Rate Limiting rules
6. Enable Bot Fight Mode

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property at analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### Google Search Console
1. Add property at search.google.com/search-console
2. Verify domain ownership
3. Submit sitemap: `https://www.naturalhomeoresearch.com/sitemap.xml`

### Microsoft Clarity
1. Create project at clarity.microsoft.com
2. Get Project ID
3. Add to `.env.local`: `NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxx`

## 🎨 Customization

### Brand Colors (tailwind.config.ts)
```js
primary: {
  DEFAULT: "#0a7261",  // Main brand green
  ...
}
secondary: {
  DEFAULT: "#c5a028",  // Gold accent
  ...
}
```

### Company Info (src/lib/constants.ts)
Update `SITE_CONFIG` with actual company details:
- Phone number
- Email address
- WhatsApp number
- Address
- Social media links
- GST & Drug License numbers

## 📦 Pages Included

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, stats, categories, products, testimonials |
| About | `/about` | Company history, mission, team, timeline |
| Products | `/products` | Full catalog with search & filters |
| Product Detail | `/products/[slug]` | Product info, inquiry form |
| Manufacturing | `/manufacturing` | Facility overview, process |
| Research | `/research` | R&D information |
| Quality | `/quality-assurance` | QA processes |
| Certifications | `/certifications` | GMP, ISO, AYUSH certificates |
| Distributor Network | `/distributor-network` | State-wise distribution map |
| Become Distributor | `/become-distributor` | Application form |
| Become Dealer | `/become-dealer` | Registration form |
| Franchise | `/franchise` | Franchise opportunity |
| Blog | `/blog` | Articles listing |
| Blog Post | `/blog/[slug]` | Article detail |
| Careers | `/careers` | Job openings & application |
| Contact | `/contact` | Contact form & info |
| Privacy Policy | `/privacy-policy` | Legal page |
| Terms | `/terms` | Terms & conditions |
| Local SEO | `/homeopathic-manufacturer-india` | Local search page |

## 🔌 API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Contact form submission |
| `/api/distributor` | POST | Distributor application |
| `/api/dealer` | POST | Dealer registration |
| `/api/careers` | POST | Career application |

## 📧 Email Templates

All forms send:
1. **Admin notification** - Details to admin email
2. **User auto-reply** - Confirmation to applicant

Configure SMTP in `.env.local`.

## 🔒 Security Features

- Rate limiting on all API routes
- Input validation with Zod
- CSRF protection via Next.js
- Security headers (CSP, HSTS, X-Frame-Options)
- XSS protection
- Nginx rate limiting
- Cloudflare WAF

## 🚀 Performance Optimization

- Static generation (SSG) for all pages
- ISR (Incremental Static Regeneration) for dynamic pages
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Tailwind CSS purging
- Gzip compression via Nginx
- Cloudflare CDN caching
- Redis for session/rate limiting

## 📝 Content Management

All content is managed via WordPress Admin:
1. Products → Add/Edit products
2. Blog Posts → Write articles
3. Testimonials → Manage reviews
4. Team → Update team members
5. FAQs → Manage FAQ list
6. Certificates → Upload certificates
7. Career Openings → Post jobs

## 🆘 Support

For technical support or customization:
- Email: support@naturalhomeoresearch.com
- Phone: +91-XXXXXXXXXX

## 📄 License

Proprietary - Natural Homeo Research Laboratory. All rights reserved.
