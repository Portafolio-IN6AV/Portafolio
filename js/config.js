/* =========================================================
   CONFIG.JS
   -----------------------------------------------------------
   ÚNICO ARCHIVO QUE DEBES EDITAR PARA PERSONALIZAR TU PORTAFOLIO.
   No necesitas tocar el HTML ni el CSS: solo cambia los
   valores de este objeto por tu información real.

   Guía rápida:
   - Textos: reemplaza los strings entre comillas "..."
   - Listas (arrays []): agrega o elimina bloques { ... } según
     cuántos elementos quieras mostrar (proyectos, experiencia, etc.)
   - Iconos de redes sociales disponibles: "github", "linkedin",
     "twitter", "instagram", "mail", "whatsapp", "website"
   - Para quitar una sección de tarjetas de contacto, redes, etc.,
     simplemente borra el bloque correspondiente del array.
   ========================================================= */

window.PORTFOLIO_DATA = {

  /* ---------- METADATOS DEL SITIO (pestaña del navegador) ---------- */
  meta: {
    title: "Portafolio",
    description: "Portafolio de Fred Pacheco, programador junior especializado en desarrollo web."
  },

  /* ---------- MARCA / LOGO EN EL MENÚ ---------- */
  brand: {
    name: "Fred Pacheco"
  },

  /* ---------- SECCIÓN PRINCIPAL (HERO) ---------- */
  hero: {
    eyebrow: "ficha de perfil",
    name: "Fred Pacheco",
    role: "Programador junior · Guatemala",
    tagline: "Construyo interfaces rápidas, accesibles y cuidadas al detalle, desde el boceto hasta el último pixel en producción.",
    
    coords: "GT-01 · Ciudad de Guatemala",
    ctaPrimary: { text: "Ver proyectos", href: "#proyectos" },
    photo: "assets/profile1.jpeg",
    socials: [
      { type: "github",   url: "https://github.com/fpacheco-2024237" },
      { type: "linkedin", url: "https://www.linkedin.com/in/fred-garcia-132512275" },
    { type: "mail",     url: "mailto:alexandref042007@gmail.com" }
    ]
  },

  /* ---------- SOBRE MÍ ---------- */
  about: {
    paragraphs: [
      "Soy estudiante de Informática con tres años de formación académica y una fuerte orientación hacia el desarrollo Full Stack. Durante este tiempo he adquirido experiencia construyendo aplicaciones web, APIs REST y bases de datos utilizando tecnologías modernas.",
      "Me gusta aprender constantemente, enfrentar nuevos retos y aplicar buenas prácticas de programación. Actualmente me encuentro próximo a realizar mis prácticas profesionales con el objetivo de seguir creciendo como desarrollador y aportar soluciones de calidad."
    ],
    stats: [
      { value: "3", label: "Años de formación" },
      { value: "10+", label: "Tecnologías aprendidas" },
    ]
  },

  /* ---------- STACK / HABILIDADES ----------
     Agrupa tus habilidades por categoría. Puedes agregar
     tantas categorías y chips como necesites. */
  skills: [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Java", "Java EE", "Python (Básico)"]
    },
    {
      category: "Bases de datos",
      items: ["MySQL", "NoSQL"]
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Docker", "Postman"]
    },
    {
      category: "Tecnologías",
      items: ["MERN Stack", "REST API", "JWT"]
    }
  ],

  /* ---------- EXPERIENCIA ----------
     Ordena del más reciente al más antiguo. */
  experience: [
    {
      role: "Programador Junior",
      company: "Proyectos Académicos",
      period: "2024 — Pasado",
      description: "Estuve desarrollando con Notepad++, cmd y en NetBeans aplicaciones y programas locales.",
      tags: ["CSS", "HTML", "Java", "SQL"]
    },
    {
      role: "Programador Junior",
      company: "Proyectos Académicos",
      period: "2025 — Pasado",
      description: "Me dedique a desarrollar aplicaciones locales con XAMPP, metodología SCRUM y vi algo de manejo web.",
      tags: ["JavaScript", "CSS", "Java EE", "MySQL", "HTML", "Java"]
    },
    {
      role: "Desarrollador Full Stack",
      company: "Proyectos Académicos",
      period: "2026 — Presente",
      description: "Desarrollo de aplicaciones web utilizando Stack MERN y .NET, aplicando creación de APIs REST, autenticación con JWT, integración de bases de datos MySQL y MongoDB y desarrollo de lógica de negocio. ",
      tags: ["Node.js", ".NET", "JWT", "React", "MongoDB", "Postgres", "Git", "Docker"]
    }
  ],

  /* ---------- FORMACIÓN ---------- */
  education: [
    {
      degree: "Perito en Informática",
      school: "Centro Educativo Técnico Laboral Kinal",
      period: "2024 — 2026"
    },
  ],

  /* ---------- PROYECTOS ----------
     Agrega tantos proyectos como quieras, cada uno es una tarjeta. */
  projects: [
    {
      title: "Life Friend",
      year: "2025",
      description: "Proyecto que desarrollé en el marco de la formación académica se hizo de forma individual para aplicar los conocimientos adquiridos.",
      tags: ["JavaFX, Java, JavaEE", "MySQL"],
      links: { demo: "assets/Veterinaria.png", code: "https://github.com/Portafolio-IN6AV/Veterinaria.git" }
    },
    {
      title: "Ta-Kito",
      year: "2025",
      description: "Proyecto que se desarrolló en el marco de la formación académica de forma grupal con el metodo SCRUM.",
      tags: ["JavaFX, Java, JavaEE", "MySQL"],
      links: { demo: "assets/Restaurante.jpeg", code: "https://github.com/Portafolio-IN6AV/Ta-Kito.git" }
    },
    {
      title: "Ahorcado",
      year: "2024",
      description: "Este juego lo desarrollé en el marco de la formación académica de forma individual se presenta como un desafío.",
      tags: ["JavaScript, HTML, CSS", "Accesibilidad"],
      links: { demo: "assets/Ahorcado.png", code: "https://github.com/Portafolio-IN6AV/Ahorcado.git" }
    },
    {
      title: "Gekoni",
      year: "2026",
      description: "Proyecto que se desarrolló en el marco de la formación académica de forma individual.",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "MERN Stack", "REST API", "Docker"],
      links: { demo: "assets/Gekoni.png", code: "https://github.com/fpacheco-2024237/GEKONI.git" }
    }
  ],

  /* ---------- CONTACTO ---------- */
  contact: {
    intro: "Actualmente estoy próximo a graduarme y me encuentro abierto a oportunidades para seguir creciendo como desarrollador Full Stack.",
    email: "alexandref042007@gmail.com",
    phone: "+502 2024-2373",
    location: "Ciudad de Guatemala, Guatemala",
    socials: [
      { type: "github",   url: "https://github.com/fpacheco-2024237" },
      { type: "linkedin", url: "https://www.linkedin.com/in/fred-garcia-132512275" },
    ]
  },

  /* ---------- PIE DE PÁGINA ---------- */
  footer: {
    text: "© 2026 Fred Pacheco. Todos los derechos reservados."
  }
};
