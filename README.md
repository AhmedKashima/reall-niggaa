# Ahmed Kashima - Full Stack Developer Portfolio

<!-- [![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge)](https://ahmedkashima.github.io)
[![GitHub License](https://img.shields.io/github/license/AhmedKashima/portfolio?style=for-the-badge)](LICENSE) -->


<div align="center">
  <img src="assets/1.png" alt="Portfolio Screenshot" width="800"/>
</div>

<div align="center">
  <img src="assets/2.png" alt="Portfolio Screenshot" width="800"/>
</div>
<!-- ![alt text](image.png) -->

## 🚀 Technologies Used

### Frontend
<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
</p>

### Backend
<p align="left">
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
</p>

## ✨ Features

- **Modern UI/UX** with smooth animations
- **Responsive Design** works on all devices
- **Multi-language** support (English/Russian)
- **Interactive Elements** with Framer Motion
- **Contact Form** with email integration
- **Project Showcase** with case studies


## Docker 
```bash
docker compose up --build
```

## npm
```bash
npm start
```
## Fast Compile
```bash 
cd reall-niggaa/deeppersonal/
docker compose up --build
```
## New window
```bash 
cd reall-niggaa/deeppersonal/frontend/
npm i 
npm start 
```



# 🚀 Deploying React (CRA or Vite) + TypeScript Frontend to GitHub Pages

This guide describes how to deploy your frontend (React + TypeScript) to GitHub Pages using `gh-pages`.

---

## ✅ Prerequisites

- Node.js and npm installed
- A GitHub repository, for example:  
  `https://github.com/ahmedkashima/reall-niggaa`
- React frontend already created inside the `/frontend` directory

---

## 📦 Step 1: Install `gh-pages`

Navigate to your frontend directory and install `gh-pages`:

```bash
cd frontend
npm install gh-pages --save-dev
```

## 📝 Step 2: Update package.json
Add the homepage field:
```bash
"homepage": "https://ahmedkashima.github.io/reall-niggaa",
```

### Add deploy scripts:
```bash
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```
## ⚙️ Step 3: Set base path for assets
If using Create React App (CRA):
Edit public/index.html and add inside (head>:

<(base href="%PUBLIC_URL%/" />

If using Vite:
In your vite.config.ts or vite.config.js, add:

```bash
typescript
base: "/reall-niggaa/",
```

## 🚀 Step 4: Deploy
From your /frontend directory, run:

```bash
npm run build
npm run deploy
```

<div align="center"> <a href="https://github.com/AhmedKashima"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/> </a> 
 <a href="mailto:kashimaahmed@email.com"> <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/> </a> </div> 
