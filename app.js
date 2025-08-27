
const en = {
  tagline: "Your Trusted Partner for Tax Preparation — Individuals & Businesses",
  ctaUpload: "Upload Your Documents",
  ctaBook: "Book an Appointment",
  portalTitle: "Secure Client Document Portal",
  portalSub: "Upload, download, and sign your tax documents safely.",
  officeLabel: "Select Your Office",
  dropTitle: "Drag & drop files here or click to browse",
  dropNote: "(Mock demo — no files are uploaded)",
  signTitle: "Pending e‑Signatures",
  signNote: "Documents ready for your signature appear here.",
  faqTitle: "Frequently Asked Questions",
  contactTitle: "Contact & Locations",
  contactNote: "Reach out to the nearest office or book online.",
  faqs: [
    ["What documents do I need to start my return?","Typically W‑2, 1099s, prior‑year returns, receipts for deductions, your ID, and any pertinent forms like 1098‑T or 1098‑E."],
    ["Is my information safe when uploaded to the portal?","Yes. All files are encrypted in transit and at rest. Access is protected with secure logins and optional MFA."],
    ["Can I sign my tax documents online?","Yes. We use IRS‑compliant electronic signatures for a fast and secure experience."],
    ["Do you accept both individuals and small businesses?","Yes. We serve individuals, families, and businesses of all sizes."],
    ["How long does it take to prepare my return?","Most individual returns are completed within 5–7 business days after receiving all documents."],
    ["Can I still bring paper documents?","Absolutely. We'll scan them and upload to your secure portal so you can access them anytime."],
    ["Do you provide services in Spanish?","Yes. Our portal and staff support both English and Spanish."],
    ["Where are your offices located?","We serve clients across California, Colorado, and Texas. See the Contact section for details."],
    ["How do I check my return’s status?","Log into the client portal and open the Return Status card on your dashboard."],
    ["Do you handle IRS letters or audits?","Yes. We provide guidance and representation for notices and audits."]
  ]
};

const es = {
  tagline: "Su socio de confianza para la preparación de impuestos — Personas y Negocios",
  ctaUpload: "Suba sus documentos",
  ctaBook: "Reserve una cita",
  portalTitle: "Portal Seguro de Documentos",
  portalSub: "Suba, descargue y firme sus documentos de forma segura.",
  officeLabel: "Seleccione su oficina",
  dropTitle: "Arrastre y suelte archivos o haga clic para buscar",
  dropNote: "(Demostración — no se suben archivos)",
  signTitle: "Firmas pendientes",
  signNote: "Los documentos listos para su firma aparecerán aquí.",
  faqTitle: "Preguntas Frecuentes",
  contactTitle: "Contacto y Sucursales",
  contactNote: "Comuníquese con la oficina más cercana o reserve en línea.",
  faqs: [
    ["¿Qué documentos necesito para empezar?","Normalmente W‑2, 1099, declaración del año anterior, recibos de deducciones, identificación y formularios pertinentes como 1098‑T o 1098‑E."],
    ["¿Mi información está segura al subirla?","Sí. Los archivos se cifran en tránsito y en reposo. El acceso está protegido con inicios de sesión seguros y MFA opcional."],
    ["¿Puedo firmar mis documentos en línea?","Sí. Utilizamos firmas electrónicas compatibles con el IRS para una experiencia rápida y segura."],
    ["¿Atienden a personas y negocios?","Sí. Atendemos a personas, familias y negocios de todos los tamaños."],
    ["¿Cuánto tardan en preparar mi declaración?","La mayoría se completa en 5–7 días hábiles después de recibir todos los documentos."],
    ["¿Puedo llevar documentos en papel?","Claro. Los escaneamos y los subimos a su portal seguro para que los tenga siempre."],
    ["¿Ofrecen servicio en español?","Sí. Nuestro portal y personal brindan soporte en inglés y español."],
    ["¿Dónde están sus oficinas?","Atendemos en California, Colorado y Texas. Vea la sección de Contacto."],
    ["¿Cómo reviso el estado de mi declaración?","Entre al portal y abra la tarjeta 'Estado de la declaración'."],
    ["¿Atienden cartas o auditorías del IRS?","Sí. Brindamos orientación y representación."]
  ]
};

let current = en;

function setLang(lang) {
  current = lang === 'es' ? es : en;
  document.getElementById('lang').textContent = lang === 'es' ? 'EN' : 'ES';
  document.getElementById('tagline').textContent = current.tagline;
  document.getElementById('ctaUpload').textContent = current.ctaUpload;
  document.getElementById('ctaUpload2').textContent = current.ctaUpload;
  document.getElementById('ctaBook').textContent = current.ctaBook;
  document.getElementById('portalTitle').textContent = current.portalTitle;
  document.getElementById('portalSub').textContent = current.portalSub;
  document.getElementById('officeLabel').textContent = current.officeLabel;
  document.getElementById('dropTitle').textContent = current.dropTitle;
  document.getElementById('dropNote').textContent = current.dropNote;
  document.getElementById('signTitle').textContent = current.signTitle;
  document.getElementById('signNote').textContent = current.signNote;
  document.getElementById('faqTitle').textContent = current.faqTitle;
  document.getElementById('contactTitle').textContent = current.contactTitle;
  document.getElementById('contactNote').textContent = current.contactNote;
  renderFaqs();
}

function renderFaqs() {
  const list = document.getElementById('faqList');
  list.innerHTML = '';
  current.faqs.forEach(([q, a]) => {
    const card = document.createElement('details');
    card.className = 'card';
    const sum = document.createElement('summary');
    sum.style.cursor = 'pointer';
    sum.innerHTML = `<strong style="color: var(--blue)">${q}</strong>`;
    const p = document.createElement('p');
    p.style.marginTop = '8px';
    p.style.opacity = '.85';
    p.textContent = a;
    card.appendChild(sum); card.appendChild(p);
    list.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Language toggle
  const btn = document.getElementById('lang');
  btn.addEventListener('click', () => {
    const next = btn.textContent === 'ES' ? 'es' : 'en';
    setLang(next);
  });
  setLang('en'); // English default

  // Fake upload list
  const file = document.getElementById('file');
  if (file) {
    file.addEventListener('change', () => {
      const ul = document.getElementById('fileList');
      ul.innerHTML = '';
      Array.from(file.files).forEach(f => {
        const li = document.createElement('li');
        li.textContent = '• ' + f.name;
        ul.appendChild(li);
      });
    });
  }

  // Scroll progress + active nav
  const progress = document.getElementById('progress');
  const links = Array.from(document.querySelectorAll('.navlinks a'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(s => s && io.observe(s));
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    progress.style.width = Math.max(0, Math.min(1, pct)) * 100 + '%';
  }, { passive: true });
});
