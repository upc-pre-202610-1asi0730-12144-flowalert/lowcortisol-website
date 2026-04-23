
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



  const langBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "es";
const translations = {
  es: {
    // Header
    '.header-nav a[href="#home"]': 'Inicio',
    '.header-nav a[href="#benefits"]': 'Beneficio',
    '.header-nav a[href="#features"]': 'Funcionalidades',
    '.header-nav a[href="#about"]': 'Quienes Somos',
    '.header-nav a[href="#planes"]': 'Planes',
    '.header-nav a[href="#contact"]': 'Contacto',
    '.header-login-button': 'Iniciar Sesion',

    // Home
    '.home-text h1': 'Low cortisol',
    '.home-text h2': 'Controla tus recursos, <span>previene fugas</span>',
    '.home-text p': 'Monitoreo en tiempo real de redes de agua y gas para hogares y profesionales, que previene fugas, mejora la seguridad y reduce costos mediante alertas inteligentes.',
    '.home-button-primary': 'Ver Planes',
    '.home-button-secondary': 'Solicitar Demo',

    // Benefits
    '.benefits-badge': 'Beneficios',
    '.benefits-header h2': '¿Por qué elegir LowCortisol?',
    '.benefits-header p': 'Tecnología IoT avanzada que transforma la gestión de recursos en tu hogar o empresa',

    // About
    '.about-badge': 'Quiénes Somos',
    '.about-header h2': 'LowCortisol: Innovación en Monitoreo IoT',

    // Plans header
    '.plans-badge': 'Planes y Precios · Suscripción Mensual',
    '.plans-header h2': 'Elige el plan perfecto para ti',
    '.plans-header p': 'Servicio por suscripción con facturación mensual. Sin compromisos a largo plazo. Cancela cuando quieras.',

    // Residential
    '.plans-category:nth-of-type(1) .plans-category-header h3': 'Planes Residenciales',
    '.plans-category:nth-of-type(1) .plans-category-header p': 'Para hogares y familias',

    // Business
    '.plans-category:nth-of-type(2) .plans-category-header h3': 'Planes Empresariales',
    '.plans-category:nth-of-type(2) .plans-category-header p': 'Para empresas, hoteles y municipalidades'
  },

  en: {
    // Header
    '.header-nav a[href="#home"]': 'Home',
    '.header-nav a[href="#benefits"]': 'Benefits',
    '.header-nav a[href="#features"]': 'Features',
    '.header-nav a[href="#about"]': 'About Us',
    '.header-nav a[href="#planes"]': 'Plans',
    '.header-nav a[href="#contact"]': 'Contact',
    '.header-login-button': 'Log In',

    // Home
    '.home-text h1': 'Low cortisol',
    '.home-text h2': 'Control your resources, <span>prevent leaks</span>',
    '.home-text p': 'Real-time monitoring of water and gas networks for households and professionals, preventing leaks, improving safety, and reducing costs through smart alerts.',
    '.home-button-primary': 'View Plans',
    '.home-button-secondary': 'Request Demo',

    // Benefits
    '.benefits-badge': 'Benefits',
    '.benefits-header h2': 'Why choose LowCortisol?',
    '.benefits-header p': 'Advanced IoT technology that transforms resource management in your home or business',

    // About
    '.about-badge': 'About Us',
    '.about-header h2': 'LowCortisol: Innovation in IoT Monitoring',

    // Plans header
    '.plans-badge': 'Plans & Pricing · Monthly Subscription',
    '.plans-header h2': 'Choose the perfect plan for you',
    '.plans-header p': 'Subscription service with monthly billing. No long-term commitments. Cancel whenever you want.',

    // Residential
    '.plans-category:nth-of-type(1) .plans-category-header h3': 'Residential Plans',
    '.plans-category:nth-of-type(1) .plans-category-header p': 'For homes and families',

    // Business
    '.plans-category:nth-of-type(2) .plans-category-header h3': 'Business Plans',
    '.plans-category:nth-of-type(2) .plans-category-header p': 'For companies, hotels, and municipalities'
  }
};
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (value.includes('<span>')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  function translatePlans(lang) {
    const planCards = document.querySelectorAll('.plans-section .plan-card');

    const plansES = [
      {
        title: 'Básico',
        subtitle: 'Ideal para departamentos y casas pequeñas',
        price: 'S/. 29<span>/mes</span>',
        features: [
          'Monitoreo de 1 red (agua o gas)',
          'Alertas básicas por email',
          'App móvil intuitiva',
          'Histórico de 30 días',
          '1 sensor incluido',
          'Sin conocimientos técnicos requeridos'
        ],
        button: 'Comprar'
      },
      {
        title: 'Familiar',
        subtitle: 'Perfecto para hogares completos',
        price: 'S/. 59<span>/mes</span>',
        badge: 'Más Popular',
        features: [
          'Monitoreo de hasta 3 redes',
          'Alertas avanzadas (email + SMS + push)',
          'Control remoto de válvulas desde el celular',
          'Histórico de 12 meses',
          'Hasta 3 sensores incluidos',
          'Análisis de consumo y ahorro',
          'Instalación guiada paso a paso'
        ],
        button: 'Comprar'
      },
      {
        title: 'Premium',
        subtitle: 'Para casas grandes y múltiples propiedades',
        price: 'S/. 99<span>/mes</span>',
        features: [
          'Monitoreo ilimitado de redes',
          'Alertas prioritarias multicanal',
          'Control remoto avanzado',
          'Histórico ilimitado',
          'Hasta 5 sensores incluidos',
          'IA predictiva para prevención de fugas',
          'Ahorro garantizado hasta 40%',
          'Soporte premium 24/7'
        ],
        button: 'Comprar'
      },
      {
        title: 'Empresarial',
        subtitle: 'Para edificios y pequeñas empresas',
        price: 'S/. 299<span>/mes</span>',
        features: [
          'Hasta 20 puntos de monitoreo',
          'Dashboard centralizado profesional',
          'Múltiples usuarios (hasta 5)',
          'Reportes automáticos y análisis',
          'API para integración con sistemas',
          'Prevención proactiva de fallas',
          'Soporte técnico dedicado'
        ],
        button: 'Comprar'
      },
      {
        title: 'Corporativo',
        subtitle: 'Para hoteles, municipios e industrias',
        price: 'S/. 799<span>/mes</span>',
        badge: 'Más Popular',
        features: [
          'Monitoreo ilimitado',
          'Gestión multi-sede centralizada',
          'Usuarios ilimitados con roles',
          'Alertas personalizadas por rol y equipo',
          'Integración con sistemas existentes',
          'IA y análisis predictivo avanzado',
          'Reportes ejecutivos automáticos',
          'Ingeniero de soporte asignado 24/7'
        ],
        button: 'Comprar'
      },
      {
        title: 'Enterprise',
        subtitle: 'Soluciones a medida para grandes infraestructuras',
        price: 'Personalizado',
        features: [
          'Todo lo incluido en Corporativo',
          'Infraestructura dedicada y aislada',
          'Desarrollo de funcionalidades personalizadas',
          'Consultoría técnica especializada',
          'Cumplimiento normativo garantizado',
          'Control operativo multi-instalación'
        ],
        button: 'Comprar'
      }
    ];

    const plansEN = [
      {
        title: 'Basic',
        subtitle: 'Ideal for apartments and small houses',
        price: 'S/. 29<span>/month</span>',
        features: [
          'Monitoring for 1 network (water or gas)',
          'Basic email alerts',
          'Intuitive mobile app',
          '30-day history',
          '1 sensor included',
          'No technical knowledge required'
        ],
        button: 'Buy'
      },
      {
        title: 'Family',
        subtitle: 'Perfect for complete households',
        price: 'S/. 59<span>/month</span>',
        badge: 'Most Popular',
        features: [
          'Monitoring for up to 3 networks',
          'Advanced alerts (email + SMS + push)',
          'Remote valve control from mobile phone',
          '12-month history',
          'Up to 3 sensors included',
          'Consumption and savings analysis',
          'Guided installation step by step'
        ],
        button: 'Buy'
      },
      {
        title: 'Premium',
        subtitle: 'For large homes and multiple properties',
        price: 'S/. 99<span>/month</span>',
        features: [
          'Unlimited network monitoring',
          'Priority multichannel alerts',
          'Advanced remote control',
          'Unlimited history',
          'Up to 5 sensors included',
          'Predictive AI for leak prevention',
          'Guaranteed savings up to 40%',
          '24/7 premium support'
        ],
        button: 'Buy'
      },
      {
        title: 'Business',
        subtitle: 'For buildings and small companies',
        price: 'S/. 299<span>/month</span>',
        features: [
          'Up to 20 monitoring points',
          'Professional centralized dashboard',
          'Multiple users (up to 5)',
          'Automatic reports and analysis',
          'System integration API',
          'Proactive failure prevention',
          'Dedicated technical support'
        ],
        button: 'Buy'
      },
      {
        title: 'Corporate',
        subtitle: 'For hotels, municipalities, and industries',
        price: 'S/. 799<span>/month</span>',
        badge: 'Most Popular',
        features: [
          'Unlimited monitoring',
          'Centralized multi-site management',
          'Unlimited users with roles',
          'Custom alerts by role and team',
          'Integration with existing systems',
          'Advanced AI and predictive analytics',
          'Automatic executive reports',
          '24/7 assigned support engineer'
        ],
        button: 'Buy'
      },
      {
        title: 'Enterprise',
        subtitle: 'Custom solutions for large infrastructures',
        price: 'Custom',
        features: [
          'Everything included in Corporate',
          'Dedicated and isolated infrastructure',
          'Custom feature development',
          'Specialized technical consulting',
          'Guaranteed regulatory compliance',
          'Multi-facility operational control'
        ],
        button: 'Buy'
      }
    ];

    const data = lang === 'es' ? plansES : plansEN;

    planCards.forEach((card, index) => {
      const title = card.querySelector('h4');
      const subtitle = card.querySelector('.plan-subtitle');
      const price = card.querySelector('.plan-price');
      const features = card.querySelector('.plan-features');
      const button = card.querySelector('.plan-button');
      const badge = card.querySelector('.plan-popular-badge');

      if (title) title.textContent = data[index].title;
      if (subtitle) subtitle.textContent = data[index].subtitle;
      if (price) price.innerHTML = data[index].price;
      if (button) button.textContent = data[index].button;

      if (features) {
        features.innerHTML = data[index].features.map(item => `<li>${item}</li>`).join('');
      }

      if (badge && data[index].badge) {
        badge.textContent = data[index].badge;
      }
    });
  }

  function changeLanguage(lang) {
    Object.entries(translations[lang]).forEach(([selector, value]) => {
      if (selector) setText(selector, value);
    });

    translatePlans(lang);
    document.documentElement.lang = lang;
    langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  changeLanguage(currentLang);

  langBtn.addEventListener('click', () => {
    changeLanguage(currentLang === 'es' ? 'en' : 'es');
  });


