# ⚡ DailyLife Tools

> **A modern, fully responsive all-in-one utility web platform designed for everyday productivity with complete client-side privacy.**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/Built_with-HTML5_|_CSS3_|_JavaScript-orange.svg)
![Privacy: 100% Client-Side](https://img.shields.io/badge/Privacy-100%25_Client--Side-brightgreen.svg)
![Responsive](https://img.shields.io/badge/Design-Fully_Responsive-purple.svg)

---

## 🌟 Overview

**DailyLife Tools** is an international SaaS-style utility suite featuring **12 real, working client-side tools**. Engineered with zero server uploads, modern dark-mode glassmorphism aesthetics, glowing accents, and instant local execution.

---

## 🛠️ The 12 Working Tools

| Tool | Category | Description |
| :--- | :--- | :--- |
| **📄 PDF Compressor** | Document | In-browser PDF optimization & stream compression with PDF-Lib. Zero uploads. |
| **🖼️ Image Compressor** | Media | Canvas-based image compression for JPG, PNG, and WebP with quality & dimension sliders. |
| **📱 QR Code Generator** | Utilities | HD QR generation for URLs, WiFi networks, vCards, and text with custom colors. |
| **🎂 Age Calculator** | Calculators | Chronological age, live ticking seconds, birthday countdown, heartbeats & Zodiac trivia. |
| **📝 Word Counter** | Text | Real-time word, character, and sentence counts, reading times, density, and 8 case transforms. |
| **📏 Unit Converter** | Calculators | Bi-directional multi-metric converter across 8 measurement dimensions. |
| **💱 Currency Converter** | Finance | Multi-currency FX converter supporting 32+ world currencies with quick matrix. |
| **🔒 Password Generator** | Security | Cryptographic (`crypto.getRandomValues`) generator with Shannon entropy meter. |
| **💼 Resume Builder** | Productivity | ATS-friendly CV builder with live A4 visual preview and one-click PDF print export. |
| **⏱️ Study Planner & Pomodoro** | Productivity | 25/5/15-minute interval timer with animated SVG circular ring and synth audio alerts. |
| **💳 Expense Tracker** | Finance | Personal budget manager with Net Balance, Income/Expense breakdown, and CSV export. |
| **✨ AI Text Helper** | Text & NLP | Client-side NLP for paraphrasing, grammar fixing, summarization, and action items. |

---

## 🚀 Daily Life Hub & Productivity Features

- **Daily Inspirational Quotes:** Curated quote engine with one-click clipboard copy and refresh.
- **Interactive Daily Planner:** Task checklist with dynamic progress bar and `localStorage` persistence.
- **Starred Favorites & Recents:** Pin preferred tools directly to a personalized homepage shelf.
- **Instant Search Modal (`Ctrl + K`):** Real-time fuzzy filtering of all tools and categories.
- **Monetag Ad Placement Areas:** Clean, non-intrusive container slots optimized for Monetag high-CPM banners.
- **Static Suite:** Includes dedicated About, Contact, Privacy Policy, and Terms of Service pages.

---

## 💻 Tech Stack

- **Frontend:** Semantic HTML5, Vanilla CSS3 (Custom Glassmorphism, CSS Variables, Flexbox/Grid)
- **Scripting:** Modern ECMAScript (ES6+), Web APIs (`Canvas`, `Web Audio`, `crypto`, `localStorage`)
- **Libraries:**
  - [PDF-Lib](https://pdf-lib.js.org/) for browser-based PDF optimization
  - [QRCode.js](https://davidshimjs.github.io/qrcodejs/) for high-contrast QR generation
  - Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`)

---

## 📂 Project Structure

```
DailyLife-Tools/
├── index.html              # Homepage with hero, search, hub & tools grid
├── about.html              # About DailyLife Tools & architecture
├── contact.html            # Contact & support inquiry page
├── privacy.html            # GDPR/CCPA zero-upload privacy policy
├── terms.html              # Terms of service
├── css/
│   ├── style.css           # Global theme, variables, header, footer & cards
│   ├── tools.css           # Tool-specific UI components & controls
│   └── print-resume.css    # Dedicated print & PDF stylesheet for resume builder
├── js/
│   ├── app.js              # Global registry, search, quotes, planner & favorites
│   └── tools.js            # Fully functional client-side engine for all 12 tools
└── tools/
    ├── pdf-compressor.html
    ├── image-compressor.html
    ├── qr-generator.html
    ├── age-calculator.html
    ├── word-counter.html
    ├── unit-converter.html
    ├── currency-converter.html
    ├── password-generator.html
    ├── resume-builder.html
    ├── study-planner.html
    ├── expense-tracker.html
    └── ai-text-helper.html
```

---

## ⚡ Getting Started

1. Clone or download this repository:
   ```bash
   git clone https://github.com/shishantchabbira7-arch/DailyLifeTools.git
   ```
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
3. No build step, node modules, or web servers required — it runs 100% out of the box!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
