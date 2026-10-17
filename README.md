# Dhruv Zanzmera — Portfolio

Personal portfolio for Dhruv Zanzmera, Senior Full-Stack Developer at PixerFect Solutions LLP. Built with React, Vite, Tailwind CSS, Motion, Three.js, and Lenis.

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Portfolio content

Update `src/data/content.js` to edit the profile, navigation, projects, work process, technologies, About text, and experience. Project and technology lists are currently empty so you can add confirmed details when they are ready. Add contact email and profile URLs to the `profile` object to display them in the Contact section.

The contact form submits JSON to `POST /api/contact`. To use a separately hosted API, set `VITE_API_URL` to its base URL in a local `.env` file. The API should accept `name`, `email`, and `message` fields.

## Production

```bash
npm run build
npm run preview
```
