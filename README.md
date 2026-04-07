# 🌐 Portfolio Website – Next.js + AI Chatbot

A modern, interactive personal portfolio website built using **Next.js 16** with an **AI-powered chatbot**. 
This portfolio showcases shailesh kumar's projects, skills, and experience with a clean UI, smooth animations, and an intelligent assistant.

## 🚀 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion
- **Backend**: Next.js API Routes (Node.js runtime)
- **AI & APIs**: 
  - Groq SDK (LLaMA 3.1 for chatbot)
  - Xenova Transformers (embeddings)
  - LeetCode Stats API
- **Utilities**: React Type Animation, HeroIcons, PDF.js, Resend (Email)
- **Styling**: Tailwind CSS with PostCSS
- **Code Quality**: ESLint, Babel React Compiler

## ✨ Features

- **🤖 AI Chatbot**: Intelligent assistant powered by LLaMA 3.1 that understands portfolio context and answers questions about projects, skills, and experience
- **📊 LeetCode Integration**: Real-time LeetCode statistics fetched via external API (1000+ problems solved)
- **✉️ Email Integration**: Contact form with email sending via Resend
- **🎨 Smooth Animations**: Framer Motion animations and React Type Animation for engaging UI
- **📱 Fully Responsive**: Design optimized for all screen sizes
- **⚡ Performance Optimized**: Next.js optimization, image handling, and API caching
- **🔄 Modular Components**: Reusable, maintainable component architecture
- **📈 Project Showcase**: Dynamic project cards with detailed descriptions
- **🎯 Skills Section**: Programming languages and web technologies displayed elegantly

---

## 📁 Project Structure

```bash
portfolio-website/
│
├── node_modules/
│
├── public/
│   ├── github-icon.svg
│   ├── linkedin-icon.svg
│   └── other-static-assets
│
├── src/
│   ├── api/
│   │   └── send/
│   │       └── route.js
│   │
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components/
│   │   ├── AboutMeSection.jsx
│   │   ├── EmailSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MenuCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavLink.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectSection.jsx
│   │   └── TabButton.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
