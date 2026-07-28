/* =========================================================
   MAIN.JS
   -----------------------------------------------------------
   Motor de renderizado del portafolio. Lee los datos de
   js/config.js (objeto PORTFOLIO_DATA) y construye el DOM.
   No necesitas editar este archivo para personalizar tu
   portafolio: todos los datos viven en config.js.
   ========================================================= */

(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;

  if (!D) {
    console.error("No se encontró PORTFOLIO_DATA. Revisa js/config.js");
    return;
  }

  /* ---------- ICONOS (SVG en línea, sin dependencias externas) ---------- */
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.5 8.98h4.96V23.5H.5V8.98Zm7.7 0h4.76v1.98h.07c.66-1.19 2.27-2.44 4.67-2.44 5 0 5.92 3.16 5.92 7.27v8.71h-4.96v-7.72c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.96 1.99-2.96 4.06v7.86H8.2V8.98Z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 4.9c-.85.38-1.76.63-2.72.75a4.76 4.76 0 0 0 2.08-2.62 9.5 9.5 0 0 1-3.01 1.15 4.74 4.74 0 0 0-8.08 4.32A13.44 13.44 0 0 1 1.64 3.66a4.74 4.74 0 0 0 1.47 6.32 4.7 4.7 0 0 1-2.15-.59v.06a4.74 4.74 0 0 0 3.8 4.65 4.8 4.8 0 0 1-2.14.08 4.74 4.74 0 0 0 4.43 3.29A9.5 9.5 0 0 1 .5 19.55a13.4 13.4 0 0 0 7.26 2.13c8.71 0 13.47-7.22 13.47-13.48 0-.2 0-.41-.02-.61a9.6 9.6 0 0 0 2.29-2.4Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.41.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.22-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.41a3.72 3.72 0 0 1-1.38-.89 3.72 3.72 0 0 1-.89-1.38c-.17-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.22.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38a5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 5.5h20v13H2v-13Z"/><path d="m2 6 10 8 10-8"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2.04 6.46 2.04 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.36A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.54 22 12S17.55 2 12.02 2Zm5.85 14.15c-.25.7-1.45 1.34-2 1.42-.51.08-1.16.11-1.87-.12-.43-.14-.99-.32-1.7-.63-3-1.3-4.95-4.34-5.1-4.54-.15-.2-1.22-1.62-1.22-3.1s.77-2.2 1.05-2.5c.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.77 1.28 1.66 2.07 1.14 1.02 2.1 1.34 2.4 1.49.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.13.07.72-.18 1.41Z"/></svg>',
    website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>'
  };

  const iconSvg = (type) => ICONS[type] || ICONS.website;

  /* ---------- HELPERS ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  /* ---------- METADATOS ---------- */
  if (D.meta) {
    document.title = D.meta.title || document.title;
    let metaDesc = $('meta[name="description"]');
    if (metaDesc && D.meta.description) metaDesc.setAttribute("content", D.meta.description);
  }

  /* ---------- MARCA ---------- */
  document.querySelectorAll('[data-bind="brand.name"]').forEach(n => n.textContent = D.brand.name);

  /* ---------- HERO ---------- */
  const H = D.hero || {};
  const setText = (sel, val) => { const n = $(sel); if (n && val !== undefined) n.textContent = val; };

  setText('[data-bind="hero.eyebrow"]', H.eyebrow);
  setText('[data-bind="hero.name"]', H.name);
  setText('[data-bind="hero.role"]', H.role);
  setText('[data-bind="hero.tagline"]', H.tagline);
  setText('[data-bind="hero.status"]', H.status);
  setText('[data-bind="contact.location"]', (D.contact && D.contact.location) || H.coords);
  setText('[data-bind="hero.coords"]', H.coords);
  setText('[data-bind="hero.ctaPrimary.text"]', H.ctaPrimary && H.ctaPrimary.text);
  setText('[data-bind="hero.ctaSecondary.text"]', H.ctaSecondary && H.ctaSecondary.text);

  const ctaPrimary = document.getElementById("heroCtaPrimary");
  if (ctaPrimary && H.ctaPrimary) ctaPrimary.setAttribute("href", H.ctaPrimary.href || "#");
  const ctaSecondary = document.getElementById("heroCtaSecondary");
  if (ctaSecondary && H.ctaSecondary) ctaSecondary.setAttribute("href", H.ctaSecondary.href || "#");

  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto && H.photo) heroPhoto.setAttribute("src", H.photo);

  const heroSocials = document.getElementById("heroSocials");
  if (heroSocials && Array.isArray(H.socials)) {
    H.socials.forEach(s => {
      const li = el("li");
      const a = el("a", null, iconSvg(s.type));
      a.setAttribute("href", s.url);
      a.setAttribute("aria-label", s.type);
      a.setAttribute("target", s.url.startsWith("http") ? "_blank" : "_self");
      a.setAttribute("rel", "noopener noreferrer");
      li.appendChild(a);
      heroSocials.appendChild(li);
    });
  }

  /* ---------- SOBRE MÍ ---------- */
  const aboutText = document.getElementById("aboutText");
  if (aboutText && D.about) {
    (D.about.paragraphs || []).forEach(p => aboutText.appendChild(el("p", null, p)));
  }
  const aboutStats = document.getElementById("aboutStats");
  if (aboutStats && D.about) {
    (D.about.stats || []).forEach(s => {
      const wrap = el("div");
      wrap.appendChild(el("dt", null, s.value));
      wrap.appendChild(el("dd", null, s.label));
      aboutStats.appendChild(wrap);
    });
  }

  /* ---------- SKILLS ---------- */
  const skillsWrap = document.getElementById("skillsWrap");
  if (skillsWrap && Array.isArray(D.skills)) {
    D.skills.forEach(cat => {
      const block = el("div", "skill-cat");
      block.appendChild(el("h3", null, cat.category));
      const itemsWrap = el("div", "skill-cat__items");
      (cat.items || []).forEach(item => itemsWrap.appendChild(el("span", "skill-chip", item)));
      block.appendChild(itemsWrap);
      skillsWrap.appendChild(block);
    });
  }

  /* ---------- EXPERIENCIA ---------- */
  const expList = document.getElementById("experienceList");
  if (expList && Array.isArray(D.experience)) {
    D.experience.forEach(job => {
      const li = el("li");
      li.appendChild(el("span", "tl__period", job.period));
      li.appendChild(el("h3", "tl__role", job.role));
      li.appendChild(el("span", "tl__company", job.company));
      if (job.description) li.appendChild(el("p", "tl__desc", job.description));
      if (Array.isArray(job.tags) && job.tags.length) {
        const tagsWrap = el("div", "tl__tags");
        job.tags.forEach(t => tagsWrap.appendChild(el("span", null, t)));
        li.appendChild(tagsWrap);
      }
      expList.appendChild(li);
    });
  }

  /* ---------- EDUCACIÓN ---------- */
  const eduList = document.getElementById("educationList");
  const eduWrap = document.getElementById("educationWrap");
  if (eduList && Array.isArray(D.education)) {
    if (D.education.length === 0 && eduWrap) {
      eduWrap.style.display = "none";
    } else {
      D.education.forEach(ed => {
        const li = el("li");
        const left = el("div");
        left.appendChild(el("div", "edu__degree", ed.degree));
        left.appendChild(el("div", "edu__school", ed.school));
        li.appendChild(left);
        li.appendChild(el("div", "edu__period", ed.period));
        eduList.appendChild(li);
      });
    }
  }

  /* ---------- PROYECTOS ---------- */
  const projectsWrap = document.getElementById("projectsWrap");
  if (projectsWrap && Array.isArray(D.projects)) {
    D.projects.forEach(proj => {
      const card = el("article", "project-card");

      const head = el("div", "project-card__head");
      head.appendChild(el("h3", "project-card__title", proj.title));
      if (proj.year) head.appendChild(el("span", "project-card__year", proj.year));
      card.appendChild(head);

      card.appendChild(el("p", "project-card__desc", proj.description));

      if (Array.isArray(proj.tags) && proj.tags.length) {
        const tagsWrap = el("div", "project-card__tags");
        proj.tags.forEach(t => tagsWrap.appendChild(el("span", null, t)));
        card.appendChild(tagsWrap);
      }

      if (proj.links) {
        const linksWrap = el("div", "project-card__links");
        if (proj.links.demo) {
          const a = el("a", null, "Ver demo →");
          a.href = proj.links.demo; a.target = "_blank"; a.rel = "noopener noreferrer";
          linksWrap.appendChild(a);
        }
        if (proj.links.code) {
          const a = el("a", null, "Código →");
          a.href = proj.links.code; a.target = "_blank"; a.rel = "noopener noreferrer";
          linksWrap.appendChild(a);
        }
        card.appendChild(linksWrap);
      }

      projectsWrap.appendChild(card);
    });
  }

  /* ---------- CONTACTO ---------- */
  const contactIntro = document.getElementById("contactIntro");
  if (contactIntro && D.contact) contactIntro.textContent = D.contact.intro || "";

  const contactList = document.getElementById("contactList");
  if (contactList && D.contact) {
    const rows = [
      { label: "Correo", value: D.contact.email, href: D.contact.email ? "mailto:" + D.contact.email : null },
      { label: "Teléfono", value: D.contact.phone, href: D.contact.phone ? "tel:" + D.contact.phone.replace(/\s+/g, "") : null },
      { label: "Ubicación", value: D.contact.location, href: null }
    ];
    rows.forEach(r => {
      if (!r.value) return;
      const li = el("li");
      li.appendChild(el("span", "label", r.label));
      if (r.href) {
        const a = el("a", "value", r.value);
        a.href = r.href;
        li.appendChild(a);
      } else {
        li.appendChild(el("span", "value", r.value));
      }
      contactList.appendChild(li);
    });

    if (Array.isArray(D.contact.socials) && D.contact.socials.length) {
      const li = el("li");
      li.appendChild(el("span", "label", "Redes"));
      const socialsRow = el("div", "hero__socials");
      D.contact.socials.forEach(s => {
        const a = el("a", null, iconSvg(s.type));
        a.href = s.url;
        a.target = s.url.startsWith("http") ? "_blank" : "_self";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", s.type);
        socialsRow.appendChild(a);
      });
      li.appendChild(socialsRow);
      contactList.appendChild(li);
    }
  }

  /* ---------- FOOTER ---------- */
  const footerText = document.getElementById("footerText");
  if (footerText && D.footer) footerText.textContent = D.footer.text || "";

  const footerSocials = document.getElementById("footerSocials");
  if (footerSocials && D.contact && Array.isArray(D.contact.socials)) {
    D.contact.socials.forEach(s => {
      const li = el("li");
      const a = el("a", null, s.type.charAt(0).toUpperCase() + s.type.slice(1));
      a.href = s.url;
      a.target = s.url.startsWith("http") ? "_blank" : "_self";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      footerSocials.appendChild(li);
    });
  }

  /* =========================================================
     INTERACTIVIDAD (no depende de config.js)
     ========================================================= */


  /* Menú móvil */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Formulario de contacto -> abre el cliente de correo con el mensaje */
  // Inicializar EmailJS
  emailjs.init({
      publicKey: "SiEHJyQPw-DI_yhJL",
  });

  contactForm.addEventListener("submit", async (e) => {

      e.preventDefault();

      const btn = contactForm.querySelector("button[type='submit']");

      const originalText = btn.textContent;

      btn.disabled = true;
      btn.textContent = "Enviando...";

      try {

          await emailjs.send(
              "service_pbgmr3i",
              "template_lq4tr0q",
              {
                  name: document.getElementById("cf-name").value.trim(),
                  email: document.getElementById("cf-email").value.trim(),
                  message: document.getElementById("cf-msg").value.trim(),
                  time: new Date().toLocaleString("es-GT")
              }
          );

          alert("¡Mensaje enviado correctamente!");

          contactForm.reset();

      } catch (error) {

          console.error(error);

          alert("Ocurrió un error al enviar el mensaje.");

      } finally {

          btn.disabled = false;
          btn.textContent = originalText;

      }

  });

})();
