# Creative Agency Landing Page

This is a modern landing page built with [Next.js](https://nextjs.org) and React, designed for a creative agency or company. The project features a clean, responsive design and highlights the agency's services, featured project, and brand identity.

## Features & App Structure

- **Navbar**: Simple navigation bar with branding and links to Home, Work, About, and Contact Us.
- **Hero Section**: Eye-catching headline, short description, and call-to-action button to showcase the agency's value proposition.
- **Services**: Highlights three main services—Branding, Web & App Development, and SEO—each with a custom icon and description.
- **Featured Project**: Showcases a sample project (#VegFest) with project stats, description, and a call-to-action button.

## File Structure

- `src/app/page.tsx`: Main page layout, imports and arranges all sections.
- `src/components/Navbar.tsx`: Navigation bar component.
- `src/components/Hero.tsx`: Hero/landing section component.
- `src/components/Services.tsx`: Services listing component.
- `src/components/Project.tsx`: Featured project showcase component.

## Getting Started

To run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Customization

- Update content and branding in the respective components under `src/components/`.
- Add or modify services and projects as needed.
- Styles use Tailwind CSS utility classes for easy customization.

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

Made with ❤️ using Next.js and React.
