
const en = {
  nav: {home:"Home", services:"Services", how:"How It Works", portal:"Client Portal", faq:"FAQ", contact:"Contact"},
  tagline: "Your Trusted Partner for Tax Preparation — Individuals & Businesses",
  ctaUpload: "Get Started",
  ctaBook: "Client Portal",
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
    ["Can I still bring paper documents?","Absolutely. We'll scan them and upload to your secure portal so you can access them anytime."]
  ]
};

const es = {
  nav: {home:"Inicio", services:"Servicios", how:"Cómo funciona", portal:"Portal de clientes", faq:"Preguntas", contact:"Contacto"},
  tagline: "Su socio de confianza para la preparación de impuestos — Personas y Negocios",
  ctaUpload: "Comenzar",
  ctaBook: "Portal de clientes",
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
    ["¿Puedo llevar documentos en papel?","Claro. Los escaneamos y los subimos a su portal seguro para que los tenga siempre."]
  ]
};

let t = en;

function translateNav() {
  const ids=[["nav_home","home"],["nav_services","services"],["nav_how","how"],["nav_portal","portal"],["nav_faq","faq"],["nav_contact","contact"]];
  ids.forEach(([k,n])=>{ const el=document.querySelector(`[data-i18n='${k}']`); if(el) el.textContent=t.nav[n]; });
}

function renderFaqs(){
  const list=document.getElementById('faqList'); if(!list) return;
  list.innerHTML='';
  t.faqs.forEach(([q,a])=>{
    const d=document.createElement('details'); d.className='card';
    const s=document.createElement('summary'); s.style.cursor='pointer'; s.innerHTML=`<strong style="color: var(--blue)">${q}</strong>`;
    const p=document.createElement('p'); p.className='muted'; p.style.marginTop='8px'; p.textContent=a;
    d.appendChild(s); d.appendChild(p); list.appendChild(d);
  });
}

function applyTranslationsForPage(){
  const map={tagline:t.tagline, ctaUpload2:t.ctaUpload, ctaBook:t.ctaBook, portalTitle:t.portalTitle, portalSub:t.portalSub,
             officeLabel:t.officeLabel, dropTitle:t.dropTitle, dropNote:t.dropNote, signTitle:t.signTitle, signNote:t.signNote,
             faqTitle:t.faqTitle, contactTitle:t.contactTitle, contactNote:t.contactNote};
  for(const id in map){ const el=document.getElementById(id); if(el&&map[id]) el.textContent=map[id]; }
  const sH2=document.querySelector("[data-i18n='services_title']"); if(sH2) sH2.textContent=t.servicesTitle;
  const hH2=document.querySelector("[data-i18n='how_title']"); if(hH2) hH2.textContent=t.howTitle;
  if(document.getElementById('faqList')) renderFaqs();
}

function bindFlipCards(){
  document.querySelectorAll('.flip-card').forEach(card=>{
    const toggle=()=>card.classList.toggle('flip');
    card.querySelectorAll('.flip-btn').forEach(b=>b.addEventListener('click', e=>{e.preventDefault(); toggle();}));
    card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault(); toggle();}});
  });
}

function bindMobileMenu(){
  const menu=document.getElementById('menu');
  const links=document.getElementById('navlinks');
  if(!menu||!links) return;
  menu.addEventListener('click', ()=>{
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true':'false');
  });
  // Close menu when a link is clicked (mobile)
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    links.classList.remove('open'); menu.setAttribute('aria-expanded','false');
  }));
}

document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('lang');
  btn?.addEventListener('click',()=>{ t=(btn.textContent==='ES')?es:en; btn.textContent=(btn.textContent==='ES')?'EN':'ES'; translateNav(); applyTranslationsForPage(); });
  t=en; translateNav(); applyTranslationsForPage();
  bindFlipCards();
  bindMobileMenu();

  const file=document.getElementById('file');
  if(file){ file.addEventListener('change',()=>{ const ul=document.getElementById('fileList'); ul.innerHTML=''; Array.from(file.files).forEach(f=>{ const li=document.createElement('li'); li.textContent='• '+f.name; ul.appendChild(li); }); }); }
});
