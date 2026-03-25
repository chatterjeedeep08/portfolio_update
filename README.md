# Deepargh Chatterjee Portfolio

A responsive React portfolio with a minimalist-techy visual style, light/dark themes, a 3D animated hero, and a modal-based About Me section.

## Overview

This project is a personal portfolio website built to showcase:

- Professional experience in frontend-heavy and mission-critical systems
- Selected projects, skills, certifications, and education
- A polished hero section with 3D animation
- A responsive UI that works across desktop, tablet, and mobile
- A contact section with direct email access

The site content is based on the included resume PDF and customized profile assets.

## Features

- React + Vite application
- Light and dark theme toggle
- 3D animated hero built with React Three Fiber
- Responsive portfolio sections for experience, projects, skills, and education
- Clickable About Me profile card that opens in a popup modal
- Blurred background while the modal is open
- Optimized profile image asset for better load performance
- Resume link included in the hero section

## Tech Stack

- React
- Vite
- Framer Motion
- `@react-three/fiber`
- `@react-three/drei`
- Lucide React
- CSS

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├── designs/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── OrbitalScene.jsx
│   ├── main.jsx
│   └── styles.css
├── Deepargh_Chatterjee_Resume_4.pdf
├── index.html
├── package.json
└── vite.config.js
```

## Customization Notes

- Main portfolio content lives in `src/App.jsx`
- Global styling and responsive layout live in `src/styles.css`
- The 3D hero scene lives in `src/OrbitalScene.jsx`
- The profile image is stored in `src/assets/`
- The resume PDF is bundled into the app and linked from the hero section

## Build Note

The production build currently works successfully, but Vite may warn that the lazy-loaded 3D scene chunk is large. This does not block the app from building or running.
