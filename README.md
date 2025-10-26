# Futuristic Portfolio Web

A modern, dark-themed Next.js portfolio site with neon accents, interactive backgrounds, and robust contact/project sections.

## Features
- Futuristic black theme with neon gradients
- Interactive constellation background
- Section dividers (neon, dotted, solid-dot)
- Profile, Resume, Projects, Certifications, Extra, and Contact sections
- Responsive design for mobile and desktop
- External project links open in new tab
- Contact form with real email delivery (Nodemailer + Gmail SMTP)
- Toast notifications for form feedback
- Local profile image with fallback

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your SMTP/email settings.
   - Use a Gmail App Password for `SMTP_PASS`.
3. **Run locally:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000` (or your configured port).

## Deployment

- Recommended: [Vercel](https://vercel.com)
- Push your code to GitHub
- Import your repo in Vercel and add environment variables in the dashboard
- Deploy and test your live site

## Contact Form Setup
- Uses Nodemailer to send emails via Gmail SMTP
- Requires valid SMTP credentials in `.env.local`
- Reply-To is set to sender’s email for easy responses

## Folder Structure
```
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
├── public/
├── car-portfolio-game/
├── .env.local
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── README.md
```

## License
MIT

---
Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.
