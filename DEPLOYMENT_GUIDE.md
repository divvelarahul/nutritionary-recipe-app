# Nutritionary Recipe Finder - Vercel Deployment Guide

## Overview
This guide explains how to deploy a React + Vite application to Vercel from start to finish.

## Prerequisites
- Node.js installed on your system
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment Process

### 1. Project Setup
```bash
# Navigate to project directory
cd "Nutritionary Recipe Finder Website (1)"

# Install dependencies
npm install
```

### 2. Fix Build Configuration

#### Update package.json
Add the following to package.json:
```json
{
  "type": "module",
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3",
    "vite": "^4.5.0"
  }
}
```

#### Create Configuration Files

**tailwind.config.js:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**vercel.json:**
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

#### Update vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  // ... other config
});
```

#### Fix CSS (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Git Repository Setup
```bash
# Initialize git repository
git init

# Create .gitignore
echo "node_modules/
npm-debug.log*
build/
dist/
.env
.DS_Store" > .gitignore

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Nutritionary Recipe Finder Website"
```

### 4. GitHub Repository Creation
1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name: `nutritionary-recipe-app`
4. Keep public/private as preferred
5. Don't initialize with README
6. Click "Create repository"

### 5. Push to GitHub
```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/nutritionary-recipe-app.git

# Push to GitHub
git push -u origin main
```

### 6. Vercel Deployment
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub account
3. Click "New Project"
4. Import your repository: `YOUR_USERNAME/nutritionary-recipe-app`
5. Vercel auto-detects Vite project
6. Click "Deploy"

### 7. Build Settings (Auto-configured)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Common Issues & Solutions

### Issue 1: Node.js Version Compatibility
**Problem:** Vite 6.x requires Node.js 20+
**Solution:** Downgrade to Vite 4.x in package.json

### Issue 2: CSS Build Errors
**Problem:** Tailwind v4 syntax in v3 project
**Solution:** Use simple Tailwind directives in index.css

### Issue 3: Output Directory Not Found
**Problem:** Vercel can't find build output
**Solution:** Add vercel.json with explicit configuration

### Issue 4: ES Module Errors
**Problem:** Import statement outside module
**Solution:** Add `"type": "module"` to package.json

## Project Structure
```
nutritionary-recipe-app/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── HomePage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── AuthPage.tsx
│   │   └── ...
│   ├── data/
│   │   └── recipes.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## Final Result
- **Live URL:** `https://nutritionary-recipe-app.vercel.app`
- **Features:** Recipe finder, nutrition tracking, user authentication
- **Tech Stack:** React, TypeScript, Vite, Tailwind CSS
- **Deployment:** Automatic deployment on git push

## Commands Summary
```bash
# Local development
npm install
npm run dev

# Build for production
npm run build

# Git operations
git add .
git commit -m "message"
git push origin main
```

## Troubleshooting
1. **Build fails:** Check Node.js version and dependencies
2. **404 on deployment:** Verify vercel.json configuration
3. **CSS issues:** Ensure Tailwind is properly configured
4. **Import errors:** Check "type": "module" in package.json

---
**Created:** November 2024  
**Author:** Deployment Guide for Nutritionary Recipe Finder  
**Repository:** https://github.com/divvelarahul/nutritionary-recipe-app