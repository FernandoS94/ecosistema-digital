# 🌐 Ecosistema Digital — Buenos Aires
 
---
 
## 🚀 Demo
 
🔗 [Ver sitio en vivo](https://fernandos94.github.io/ecosistema-digital/)
 
---
 
## ✨ Características
 
- 🤖 **Avatares IA** — Asistentes pedagógicos por materia entrenados con Gemini
- 📱 **Diseño responsive** — Mobile first, adaptado a todos los dispositivos
- 🎠 **Carrusel táctil** — Navegación por swipe en mobile
- 🎬 **Reproductor de videos** — Tutoriales integrados con modal de YouTube
- 📣 **Modal de cursos** — Flyer de inscripción con control de sesión
- ♿ **Accesibilidad** — Navegación por teclado y atributos ARIA
 
---
 
## 🛠️ Tecnologías
 
| Tecnología | Uso |
|---|---|
| ⚛️ React 19 | Framework UI |
| ⚡ Vite 8 | Bundler y dev server |
| 🎨 CSS3 | Estilos y animaciones |
| 🔤 Nunito | Tipografía principal |
| 🎯 Font Awesome 6 | Íconos |
| 📦 gh-pages | Deploy a GitHub Pages |
 
---
 
## 📁 Estructura del proyecto
 
```
ecosistema-digital/
├── public/
│   ├── img/                  ← Imágenes y assets
│   └── css/
│       └── styles.css        ← Estilos globales
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── AvatarsSection.jsx
│   │   │   ├── AppsSection.jsx
│   │   │   ├── AccessSection.jsx
│   │   │   └── FaqSection.jsx
│   │   ├── ui/
│   │   │   ├── AvatarCard.jsx
│   │   │   ├── AvatarCategory.jsx
│   │   │   ├── AppCard.jsx
│   │   │   ├── FaqItem.jsx
│   │   │   └── HowToUseSteps.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FlyerModal.jsx
│   │   └── VideoModal.jsx
│   ├── context/
│   │   └── VideoContext.jsx
│   ├── data/
│   │   ├── avatars.js
│   │   ├── videos.js
│   │   ├── apps.js
│   │   └── faq.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
 
---
 

 
## 📦 Scripts disponibles
 
```bash
npm run dev        # Servidor local con hot-reload
npm run build      # Genera carpeta dist/ para producción
npm run preview    # Previsualiza el build localmente
npm run deploy     # Despliega en GitHub Pages
```
 
---
 
 
## 📄 Licencia
 
Los contenidos de buenosaires.gob.ar están licenciados bajo **Creative Commons Reconocimiento 2.5 Argentina License**.
 

 
