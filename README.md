# UI Component Library

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react&logoColor=white)](https://react.dev/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Storybook](https://img.shields.io/badge/Storybook-7.x-ff4785?logo=storybook&logoColor=white)](https://storybook.js.org/)

A **modern React + TailwindCSS UI component library** designed to help you build beautiful, accessible, and theme-friendly applications faster.

👉 Explore live stories: **[zop.dev/ui-components](https://zop.dev/ui-components)**

---

## ✨ Features

- 📦 **Ready-to-use components** with full Storybook documentation
- 🎨 **Theme-aware** — works across multiple design systems
- 🛠 **TailwindCSS utility classes only** (no arbitrary values)
- ⚡ **Fast development** — drop in and ship UI quickly
- 🔄 **Composable & flexible** — designed for reuse across projects

---

## 📖 Storybook

Run Storybook locally:

```bash
npm install
npm run start
```

This launches Storybook at [http://localhost:6006](http://localhost:6006).

---

## 📝 Developer Guidelines

To ensure **theme compatibility** and **design consistency**, follow these rules:

1. **No arbitrary values**

   - ❌ `bg-[#bada55] text-[22px]`
   - ✅ `bg-primary text-lg`

2. **Allowed color tokens only**

   - `primary`, `secondary`, `white`, `black`, `gray`, `red`, `yellow`, `green`
   - Use semantic Tailwind classes like `text-red-200` (error) or `text-yellow-500` (warning).
   - Actual values may be overridden by project themes.

3. **Font sizes**
   - Only use Tailwind’s default typography scale (`text-sm`, `text-lg`, etc).
