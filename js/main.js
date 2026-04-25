
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});


document.querySelectorAll('.slider-dots').forEach(dotsContainer => {

  const sliderId = dotsContainer.getAttribute('data-slider');
  const slider = document.getElementById(sliderId);

  if (!slider) return;

  const cards = slider.querySelectorAll('.plan-card');
  const dots = dotsContainer.querySelectorAll('.dot');

  function updateDots() {
    const center = slider.scrollLeft + slider.offsetWidth / 2;

    let activeIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[activeIndex]) {
      dots[activeIndex].classList.add('active');
    }
  }

  // 👆 detecta scroll (swipe)
  slider.addEventListener('scroll', updateDots);

  // 👇 click en puntitos
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
      });
    });
  });

  // inicial
  updateDots();
});



 const langBtns = document.querySelectorAll(".lang-toggle");
let currentLang = localStorage.getItem("lang") || "es";

const translations = {
es: {
  // NAV
  "nav.home": "Inicio",
  "nav.benefits": "Beneficio",
  "nav.features": "Funcionalidades",
  "nav.about": "Quienes Somos",
  "nav.plans": "Planes",
  "nav.contact": "Contacto",
  "nav.login": "Iniciar Sesion",

  // HOME
  "home.title": "Low cortisol",

  "home.subtitle": `Controla tus recursos,
<span>previene fugas</span>`,

  "home.description": `Monitoreo en tiempo real de redes de agua y gas para hogares y
profesionales, que previene fugas, mejora la seguridad y reduce
costos mediante alertas inteligentes.`,

  "home.primaryButton": "Ver Planes",
  "home.secondaryButton": "Solicitar Demo",

  // BENEFITS
  "benefits.badge": "Beneficios",

  "benefits.title": `¿Por qué elegir LowCortisol?`,

  "benefits.description": `Tecnología IoT avanzada que transforma la gestión de recursos en tu hogar o empresa`,

  "benefits.card1.title": "Seguridad Mejorada",

  "benefits.card1.text": `Detecta fugas de gas y agua al instante con alertas automáticas.
Protege tu propiedad y a las personas con notificaciones en tiempo real.`,

  "benefits.card2.title": "Ahorro Significativo",

  "benefits.card2.text": `Reduce hasta un 40% en costos operativos eliminando desperdicios.
Identifica patrones de consumo y optimiza el uso de recursos.`,

  "benefits.card3.title": "Monitoreo en Tiempo Real",

  "benefits.card3.text": `Visualiza el consumo de agua y gas desde cualquier lugar.
Dashboard intuitivo con gráficos y métricas actualizadas cada segundo.`,

  // FEATURES
  "features.badge": "Funcionalidades",

  "features.title": `Funcionalidades diseñadas para un monitoreo inteligente`,

  "features.description": `Nuestra plataforma te ayuda a supervisar el consumo, detectar fugas a tiempo
y optimizar el uso de agua y gas con información clara y alertas oportunas.`,

  "features.card1.title": "Monitoreo en tiempo real",
  "features.card1.text": `Visualiza el consumo de agua y gas al instante desde una sola plataforma.`,
  "features.card1.item1": "Datos actualizados en segundos",
  "features.card1.item2": "Visualización desde web y móvil",
  "features.card1.item3": "Control centralizado de múltiples redes",

  "features.card2.title": "Alertas inteligentes",
  "features.card2.text": `Recibe notificaciones automáticas ante comportamientos inusuales.`,
  "features.card2.item1": "Alertas por email, SMS y app",
  "features.card2.item2": "Detección de consumos anormales",
  "features.card2.item3": "Configuración personalizada",

  "features.card3.title": "Historial y reportes",
  "features.card3.text": `Consulta datos históricos y analiza patrones.`,
  "features.card3.item1": "Reportes diarios, semanales y mensuales",
  "features.card3.item2": "Gráficos claros e intuitivos",
  "features.card3.item3": "Análisis de tendencias de consumo",

  "features.card4.title": "Detección temprana de fugas",
  "features.card4.text": `Identifica anomalías antes de que se conviertan en riesgos.`,
  "features.card4.item1": "Identificación automática de fugas",
  "features.card4.item2": "Prevención de daños estructurales",
  "features.card4.item3": "Reducción de pérdidas económicas",

  "features.card5.title": "Panel intuitivo",
  "features.card5.text": `Accede a información clara desde cualquier dispositivo.`,
  "features.card5.item1": "Interfaz simple y amigable",
  "features.card5.item2": "Diseño responsive",
  "features.card5.item3": "Acceso rápido a funciones clave",

  "features.card6.title": "Optimización de costos",
  "features.card6.text": `Reduce gastos operativos con un control eficiente.`,
  "features.card6.item1": "Reducción de consumo innecesario",
  "features.card6.item2": "Prevención de fugas costosas",
  "features.card6.item3": "Ahorro hasta 40% en recursos",

  // ABOUT
  "about.badge": "Quiénes Somos",

  "about.title": "LowCortisol: Innovación en Monitoreo IoT",

  "about.description": `Transformamos la gestión de recursos hídricos y energéticos con tecnología de
vanguardia`,

  "about.vision.title": "Nuestra Visión",

  "about.vision.text": `Convertirnos en el líder global de soluciones IoT para la gestión inteligente de recursos, empoderando a hogares y empresas con tecnología accesible que previene desperdicios, protege infraestructuras y contribuye a un futuro sostenible.`,

  "about.mission.title": "Nuestra Misión",

  "about.mission.text": `Proporcionar sistemas de monitoreo IoT en tiempo real que detectan y previenen fugas de agua y gas, optimizando el consumo, reduciendo costos operativos y garantizando la seguridad mediante tecnología inteligente, accesible y escalable para todos nuestros clientes.`,

  "about.why.title": "¿Por qué LowCortisol?",

  "about.why.text": `Nuestro nombre refleja nuestro compromiso: eliminar el estrés (cortisol) asociado a la gestión de recursos críticos. Con sensores inteligentes, alertas proactivas y control total desde tu dispositivo móvil, transformamos la ansiedad de posibles fallas en tranquilidad y eficiencia.`,

// SOLUTIONS
"solutions.title": "Soluciones para Todos",

"solutions.subtitle": "Adaptado a tus necesidades",

"solutions.description": `Ya sea que administres un hogas, un hotel o una ciudad entera, tenemos la solución perfecta`,

"solutions.residential.title": "Usuarios Residenciales",

"solutions.residential.subtitle": `Protege tu hogar y ahorra desde tu celular.`,

"solutions.residential.text": `Solución diseñada para personas con bajo o medio nivel técnico que buscan prevenir fugas, reducir costos y controlar su hogar de manera simple e intuitiva.`,

"solutions.residential.item1": "Instalación rápida y sencilla, sin conocimientos técnicos",
"solutions.residential.item2": "Control total desde tu smartphone",
"solutions.residential.item3": "Alertas automáticas de seguridad 24/7",
"solutions.residential.item4": "Reducción de costos hasta 30-40%",
"solutions.residential.item5": "Interfaz intuitiva y fácil de usar",

"solutions.business.title": "Profesionales de Infraestructura",

"solutions.business.subtitle": `Gestión operativa centralizada y eficiente`,

"solutions.business.text": `Para administradores, jefes de mantenimiento y gestores que requieren monitoreo centralizado, prevención de fallas y control eficiente de múltiples instalaciones (hoteles, municipalidades, edificios, industrias).`,

"solutions.business.item1": "Monitoreo centralizado de múltiples instalaciones",
"solutions.business.item2": "Dashboard profesional con métricas avanzadas",
"solutions.business.item3": "Prevención proactiva de fallas y fugas",
"solutions.business.item4": "Reportes automáticos y análisis predictivo",
"solutions.business.item5": "Gestión multi-sede y multi-usuario",

"solutions.button": "Solicita Información",



// PLANS
"plans.badge": "Planes y Precios · Suscripción Mensual",

"plans.title": "Elige el plan perfecto para ti",

"plans.description": `Servicio por suscripción con facturación mensual. Sin compromisos a largo plazo.
Cancela cuando quieras.`,

// RESIDENCIAL
"plans.residential.title": "Planes Residenciales",
"plans.residential.subtitle": "Para hogares y familias",

// BASICO
"plans.basic.title": "Básico",
"plans.basic.subtitle": `Ideal para departamentos y casas pequeñas`,

"plans.basic.item1": "Monitoreo de 1 red (agua o gas)",
"plans.basic.item2": "Alertas básicas por email",
"plans.basic.item3": "App móvil intuitiva",
"plans.basic.item4": "Histórico de 30 días",
"plans.basic.item5": "1 sensor incluido",
"plans.basic.item6": "Sin conocimientos técnicos requeridos",

// FAMILIAR
"plans.popular": "Más Popular",

"plans.family.title": "Familiar",

"plans.family.subtitle": `Perfecto para hogares completos`,

"plans.family.item1": "Monitoreo de hasta 3 redes",
"plans.family.item2": "Alertas avanzadas (email + SMS + push)",
"plans.family.item3": "Control remoto de válvulas desde el celular",
"plans.family.item4": "Histórico de 12 meses",
"plans.family.item5": "Hasta 3 sensores incluidos",
"plans.family.item6": "Análisis de consumo y ahorro",
"plans.family.item7": "Instalación guiada paso a paso",

// PREMIUM
"plans.premium.title": "Premium",

"plans.premium.subtitle": `Para casas grandes y múltiples propiedades`,

"plans.premium.item1": "Monitoreo ilimitado de redes",
"plans.premium.item2": "Alertas prioritarias multicanal",
"plans.premium.item3": "Control remoto avanzado",
"plans.premium.item4": "Histórico ilimitado",
"plans.premium.item5": "Hasta 5 sensores incluidos",
"plans.premium.item6": "IA predictiva para prevención de fugas",
"plans.premium.item7": "Ahorro garantizado hasta 40%",
"plans.premium.item8": "Soporte premium 24/7",

// EMPRESARIAL
"plans.business.title": "Planes Empresariales",
"plans.business.subtitle": "Para empresas, hoteles y municipalidades",

// EMPRESARIAL 1
"plans.enterprise1.title": "Empresarial",

"plans.enterprise1.subtitle": `Para edificios y pequeñas empresas`,

"plans.enterprise1.item1": "Hasta 20 puntos de monitoreo",
"plans.enterprise1.item2": "Dashboard centralizado profesional",
"plans.enterprise1.item3": "Múltiples usuarios (hasta 5)",
"plans.enterprise1.item4": "Reportes automáticos y análisis",
"plans.enterprise1.item5": "API para integración con sistemas",
"plans.enterprise1.item6": "Prevención proactiva de fallas",
"plans.enterprise1.item7": "Soporte técnico dedicado",

// CORPORATIVO
"plans.enterprise2.title": "Corporativo",

"plans.enterprise2.subtitle": `Para hoteles, municipios e industrias`,

"plans.enterprise2.item1": "Monitoreo ilimitado",
"plans.enterprise2.item2": "Gestión multi-sede centralizada",
"plans.enterprise2.item3": "Usuarios ilimitados con roles",
"plans.enterprise2.item4": "Alertas personalizadas por rol y equipo",
"plans.enterprise2.item5": "Integración con sistemas existentes",
"plans.enterprise2.item6": "IA y análisis predictivo avanzado",
"plans.enterprise2.item7": "Reportes ejecutivos automáticos",
"plans.enterprise2.item8": "Ingeniero de soporte asignado 24/7",
"plans.month": "/mes",

// ENTERPRISE
"plans.enterprise3.title": "Enterprise",

"plans.enterprise3.subtitle": `Soluciones a medida para grandes infraestructuras`,

"plans.enterprise3.price": "Personalizado",

"plans.enterprise3.item1": "Todo lo incluido en Corporativo",
"plans.enterprise3.item2": "Infraestructura dedicada y aislada",
"plans.enterprise3.item3": "Desarrollo de funcionalidades personalizadas",
"plans.enterprise3.item4": "Consultoría técnica especializada",
"plans.enterprise3.item5": "Cumplimiento normativo garantizado",
"plans.enterprise3.item6": "Control operativo multi-instalación",

// BOTON
"plans.buy": "Comprar",


// CONTACT
"contact.badge": "Contacto",

"contact.title": `Comienza a monitorear tus recursos hoy`,

"contact.description": `Agenda una demo personalizada y descubre cómo LowCortisol puede ayudarte
a prevenir fugas, ahorrar costos y mejorar la seguridad`,

"contact.questions": "¿Tienes preguntas?",

"contact.text": `Contáctanos y descubre cómo LowCortisol puede transformar la gestión
de tus recursos.`,

"contact.email": "Email",
"contact.phone": "Teléfono",
"contact.schedule": "Lun - Vie: 9:00 - 18:00",
"contact.office": "Oficina",

// FORM
"form.name": "Nombre Completo *",
"form.email": "Email *",
"form.clientType": "Tipo de cliente *",
"form.selectOption": "Selecciona una opción",
"form.residential": "Personas Residencial",
"form.infrastructure": "Profesionales de Infraestructura",
"form.message": "Mensaje *",
"form.submit": "ENVIAR MENSAJE",

"form.namePlaceholder": "Escribe tu nombre",
"form.emailPlaceholder": "ejemplo@gmail.com",
"form.messagePlaceholder": "Cuéntanos más",

// FOOTER
"footer.description": `Monitoreo inteligente para prevenir fugas y optimizar recursos.`,

"footer.home": "Inicio",
"footer.features": "Funcionalidades",
"footer.plans": "Planes",
"footer.contact": "Contacto",

"footer.copy": `© 2026 LowCortisol. Todos los derechos reservados.`


},

en: {
  // NAV
  "nav.home": "Home",
  "nav.benefits": "Benefits",
  "nav.features": "Features",
  "nav.about": "About Us",
  "nav.plans": "Plans",
  "nav.contact": "Contact",
  "nav.login": "Log In",

  // HOME
  "home.title": "Low cortisol",

  "home.subtitle": `Control your resources,
<span>prevent leaks</span>`,

  "home.description": `Real-time monitoring of water and gas networks for homes and professionals,
preventing leaks, improving safety, and reducing costs
through smart alerts.`,

  "home.primaryButton": "View Plans",
  "home.secondaryButton": "Request Demo",


"benefits.badge": "Benefits",

"benefits.title": `Why choose LowCortisol?`,

"benefits.description": `Advanced IoT technology that transforms resource management in your home or business`,

// CARD 1
"benefits.card1.title": "Enhanced Security",

"benefits.card1.text": `Detect gas and water leaks instantly with automatic alerts.
Protect your property and people with real-time notifications.`,

// CARD 2
"benefits.card2.title": "Significant Savings",

"benefits.card2.text": `Reduce up to 40% in operational costs by eliminating waste.
Identify consumption patterns and optimize resource usage.`,

// CARD 3
"benefits.card3.title": "Real-Time Monitoring",

"benefits.card3.text": `Monitor water and gas consumption from anywhere.
Intuitive dashboard with real-time metrics.`,

// FEATURES
"features.badge": "Features",

"features.title": `Features designed for intelligent monitoring`,

"features.description": `Our platform helps you monitor consumption, detect leaks early
and optimize the use of water and gas with clear insights and timely alerts.`,

// CARD 1
"features.card1.title": "Real-time monitoring",

"features.card1.text": `View water and gas consumption instantly from a single platform.`,

"features.card1.item1": "Data updated in seconds",
"features.card1.item2": "Web and mobile visualization",
"features.card1.item3": "Centralized control of multiple networks",

// CARD 2
"features.card2.title": "Smart alerts",

"features.card2.text": `Receive automatic notifications for unusual behavior.`,

"features.card2.item1": "Alerts via email, SMS, and app",
"features.card2.item2": "Detection of abnormal consumption",
"features.card2.item3": "Custom configuration",

// CARD 3
"features.card3.title": "History and reports",

"features.card3.text": `Access historical data and analyze patterns.`,

"features.card3.item1": "Daily, weekly, and monthly reports",
"features.card3.item2": "Clear and intuitive charts",
"features.card3.item3": "Consumption trend analysis",

// CARD 4
"features.card4.title": "Early leak detection",

"features.card4.text": `Identify anomalies before they become risks.`,

"features.card4.item1": "Automatic leak detection",
"features.card4.item2": "Prevention of structural damage",
"features.card4.item3": "Reduction of economic losses",

// CARD 5
"features.card5.title": "Intuitive dashboard",

"features.card5.text": `Access clear information from any device.`,

"features.card5.item1": "Simple and user-friendly interface",
"features.card5.item2": "Responsive design",
"features.card5.item3": "Quick access to key features",

// CARD 6
"features.card6.title": "Cost optimization",

"features.card6.text": `Reduce operational costs with efficient control.`,

"features.card6.item1": "Reduction of unnecessary consumption",
"features.card6.item2": "Prevention of costly leaks",
"features.card6.item3": "Up to 40% savings in resources",

// ABOUT
"about.badge": "About Us",

"about.title": "LowCortisol: Innovation in IoT Monitoring",

"about.description": `We transform water and energy resource management with cutting-edge technology`,

// VISION
"about.vision.title": "Our Vision",

"about.vision.text": `To become the global leader in IoT solutions for intelligent resource management, empowering homes and businesses with accessible technology that prevents waste, protects infrastructure, and contributes to a sustainable future.`,

// MISSION
"about.mission.title": "Our Mission",

"about.mission.text": `To provide real-time IoT monitoring systems that detect and prevent water and gas leaks, optimizing consumption, reducing operational costs, and ensuring safety through intelligent, accessible, and scalable technology for all our clients.`,

// WHY
"about.why.title": "Why LowCortisol?",

"about.why.text": `Our name reflects our commitment: eliminating stress (cortisol) associated with managing critical resources. With smart sensors, proactive alerts, and full control from your mobile device, we transform the anxiety of potential failures into peace of mind and efficiency.`,

// SOLUTIONS
"solutions.title": "Solutions for Everyone",

"solutions.subtitle": "Adapted to your needs",

"solutions.description": `Whether you manage a home, a hotel, or an entire city, we have the perfect solution`,

// RESIDENTIAL
"solutions.residential.title": "Residential Users",

"solutions.residential.subtitle": `Protect your home and save from your phone.`,

"solutions.residential.text": `Solution designed for users with low or medium technical knowledge who want to prevent leaks, reduce costs, and manage their home in a simple and intuitive way.`,

"solutions.residential.item1": "Quick and easy installation, no technical knowledge required",
"solutions.residential.item2": "Full control from your smartphone",
"solutions.residential.item3": "Automatic 24/7 security alerts",
"solutions.residential.item4": "Cost reduction up to 30-40%",
"solutions.residential.item5": "Intuitive and easy-to-use interface",

// BUSINESS
"solutions.business.title": "Infrastructure Professionals",

"solutions.business.subtitle": `Centralized and efficient operational management`,

"solutions.business.text": `For administrators, maintenance managers, and operators who require centralized monitoring, failure prevention, and efficient control of multiple facilities (hotels, municipalities, buildings, industries).`,

"solutions.business.item1": "Centralized monitoring of multiple facilities",
"solutions.business.item2": "Professional dashboard with advanced metrics",
"solutions.business.item3": "Proactive failure and leak prevention",
"solutions.business.item4": "Automatic reports and predictive analysis",
"solutions.business.item5": "Multi-site and multi-user management",

// BUTTON
"solutions.button": "Request Information",

// PLANS
"plans.badge": "Plans & Pricing · Monthly Subscription",

"plans.title": "Choose the perfect plan for you",

"plans.description": `Subscription-based service with monthly billing. No long-term commitments.
Cancel anytime.`,

// RESIDENTIAL
"plans.residential.title": "Residential Plans",
"plans.residential.subtitle": "For homes and families",

// BASIC
"plans.basic.title": "Basic",

"plans.basic.subtitle": `Ideal for apartments and small houses`,

"plans.basic.item1": "Monitoring of 1 network (water or gas)",
"plans.basic.item2": "Basic email alerts",
"plans.basic.item3": "Intuitive mobile app",
"plans.basic.item4": "30-day history",
"plans.basic.item5": "1 sensor included",
"plans.basic.item6": "No technical knowledge required",

// FAMILY
"plans.popular": "Most Popular",

"plans.family.title": "Family",

"plans.family.subtitle": `Perfect for complete households`,

"plans.family.item1": "Monitoring of up to 3 networks",
"plans.family.item2": "Advanced alerts (email + SMS + push)",
"plans.family.item3": "Remote valve control from your phone",
"plans.family.item4": "12-month history",
"plans.family.item5": "Up to 3 sensors included",
"plans.family.item6": "Consumption and savings analysis",
"plans.family.item7": "Step-by-step guided installation",

// PREMIUM
"plans.premium.title": "Premium",

"plans.premium.subtitle": `For large homes and multiple properties`,

"plans.premium.item1": "Unlimited network monitoring",
"plans.premium.item2": "Priority multi-channel alerts",
"plans.premium.item3": "Advanced remote control",
"plans.premium.item4": "Unlimited history",
"plans.premium.item5": "Up to 5 sensors included",
"plans.premium.item6": "AI-based leak prediction",
"plans.premium.item7": "Up to 40% guaranteed savings",
"plans.premium.item8": "24/7 premium support",

// BUSINESS
"plans.business.title": "Business Plans",
"plans.business.subtitle": "For companies, hotels, and municipalities",

// ENTERPRISE 1
"plans.enterprise1.title": "Business",

"plans.enterprise1.subtitle": `For buildings and small companies`,

"plans.enterprise1.item1": "Up to 20 monitoring points",
"plans.enterprise1.item2": "Centralized professional dashboard",
"plans.enterprise1.item3": "Multiple users (up to 5)",
"plans.enterprise1.item4": "Automated reports and analysis",
"plans.enterprise1.item5": "API integration with systems",
"plans.enterprise1.item6": "Proactive failure prevention",
"plans.enterprise1.item7": "Dedicated technical support",

// CORPORATE
"plans.enterprise2.title": "Corporate",

"plans.enterprise2.subtitle": `For hotels, municipalities, and industries`,

"plans.enterprise2.item1": "Unlimited monitoring",
"plans.enterprise2.item2": "Centralized multi-site management",
"plans.enterprise2.item3": "Unlimited users with roles",
"plans.enterprise2.item4": "Role-based alert customization",
"plans.enterprise2.item5": "Integration with existing systems",
"plans.enterprise2.item6": "Advanced AI and predictive analytics",
"plans.enterprise2.item7": "Automated executive reports",
"plans.enterprise2.item8": "24/7 dedicated support engineer",

// ENTERPRISE 3
"plans.enterprise3.title": "Enterprise",

"plans.enterprise3.subtitle": `Custom solutions for large-scale infrastructures`,

"plans.enterprise3.price": "Custom",

"plans.enterprise3.item1": "Everything included in Corporate",
"plans.enterprise3.item2": "Dedicated and isolated infrastructure",
"plans.enterprise3.item3": "Custom feature development",
"plans.enterprise3.item4": "Specialized technical consulting",
"plans.enterprise3.item5": "Guaranteed regulatory compliance",
"plans.enterprise3.item6": "Multi-site operational control",
"plans.month": "/month",
// BUTTON
"plans.buy": "Buy",

// CONTACT
"contact.badge": "Contact",

"contact.title": `Start monitoring your resources today`,

"contact.description": `Schedule a personalized demo and discover how LowCortisol can help you
prevent leaks, reduce costs, and improve safety`,

"contact.questions": "Do you have questions?",

"contact.text": `Contact us and discover how LowCortisol can transform
your resource management.`,

"contact.email": "Email",
"contact.phone": "Phone",
"contact.schedule": "Mon - Fri: 9:00 - 18:00",
"contact.office": "Office",

// FORM
"form.name": "Full Name *",
"form.email": "Email *",
"form.clientType": "Client Type *",
"form.selectOption": "Select an option",
"form.residential": "Residential Users",
"form.infrastructure": "Infrastructure Professionals",
"form.message": "Message *",
"form.submit": "SEND MESSAGE",

"form.namePlaceholder": "Enter your name",
"form.emailPlaceholder": "example@gmail.com",
"form.messagePlaceholder": "Tell us more",

// FOOTER
"footer.description": `Smart monitoring to prevent leaks and optimize resources.`,

"footer.home": "Home",
"footer.features": "Features",
"footer.plans": "Plans",
"footer.contact": "Contact",

"footer.copy": `© 2026 LowCortisol. All rights reserved.`


}


};


function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  currentLang = lang;

  langBtns.forEach(btn => {
    btn.textContent = lang === "es" ? "EN" : "ES";
  });
}

changeLanguage(currentLang);

langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    changeLanguage(currentLang === "es" ? "en" : "es");
  });
});
