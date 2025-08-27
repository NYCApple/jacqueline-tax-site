
const en = {
  nav: {home:"Home", services:"Services", how:"How It Works", portal:"Client Portal", faq:"FAQ", contact:"Contact"},
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
  servicesTitle: "Services",
  howTitle: "How It Works",
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
  nav: {home:"Inicio", services:"Servicios", how:"Cómo funciona", portal:"Portal de clientes", faq:"Preguntas", contact:"Contacto"},
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
  servicesTitle: "Servicios",
  howTitle: "Cómo funciona",
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

let t = en;

function translateNav() {
  const map = [
    ["nav_home", t.nav.home],
    ["nav_services", t.nav.services],
    ["nav_how", t.nav.how],
    ["nav_portal", t.nav.portal],
    ["nav_faq", t.nav.faq],
    ["nav_contact", t.nav.contact]
  ];
  map.forEach(([k, val]) => {
    const el = document.querySelector(`[data-i18n='${k}']`);
    if (el) el.textContent = val;
  });
}

function renderFaqs() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = '';
  t.faqs.forEach(([q, a]) => {
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

function applyTranslationsForPage() {
  const map = {
    tagline: t.tagline,
    ctaUpload2: t.ctaUpload,
    ctaBook: t.ctaBook,
    portalTitle: t.portalTitle,
    portalSub: t.portalSub,
    officeLabel: t.officeLabel,
    dropTitle: t.dropTitle,
    dropNote: t.dropNote,
    signTitle: t.signTitle,
    signNote: t.signNote,
    faqTitle: t.faqTitle,
    contactTitle: t.contactTitle,
    contactNote: t.contactNote
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el && val) el.textContent = val;
  });
  const servicesH2 = document.querySelector("[data-i18n='services_title']");
  if (servicesH2) servicesH2.textContent = t.servicesTitle;
  const howH2 = document.querySelector("[data-i18n='how_title']");
  if (howH2) howH2.textContent = t.howTitle;

  renderFaqs();
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang');
  btn?.addEventListener('click', () => {
    t = (btn.textContent === 'ES') ? es : en;
    btn.textContent = (btn.textContent === 'ES') ? 'EN' : 'ES';
    translateNav();
    applyTranslationsForPage();
  });
  t = en; // default English
  translateNav();
  applyTranslationsForPage();

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
});
