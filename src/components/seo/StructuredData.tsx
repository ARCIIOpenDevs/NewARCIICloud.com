'use client';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Datos estructurados para la organización
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ARCII Cloud",
  "alternateName": "ARCIICloud",
  "url": "https://new.arciicloud.com",
  "logo": "https://new.arciicloud.com/images/logo.png",
  "description": "Líder en hosting web México con 99.9% uptime garantizado. Hosting WordPress, VPS Cloud, servidores dedicados, dominios .mx y email corporativo.",
  "foundingDate": "2009",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 25,
    "maxValue": 50
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Tecnológico #123",
    "addressLocality": "Guadalajara",
    "addressRegion": "Jalisco",
    "postalCode": "44100",
    "addressCountry": "MX"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+52-33-1234-5678",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"],
    "areaServed": ["MX", "US", "ES"]
  }, {
    "@type": "ContactPoint",
    "telephone": "+52-33-1234-5678",
    "contactType": "technical support",
    "availableLanguage": "Spanish",
    "areaServed": "MX"
  }],
  "sameAs": [
    "https://www.facebook.com/arciicloud",
    "https://twitter.com/arciicloud",
    "https://www.linkedin.com/company/arciicloud",
    "https://www.instagram.com/arciicloud"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ARCII Cloud Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hosting Web",
          "description": "Hosting optimizado para WordPress y sitios web"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VPS Cloud",
          "description": "Servidores virtuales privados escalables"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dominios",
          "description": "Registro y gestión de dominios .mx y internacionales"
        }
      }
    ]
  }
};

// Datos estructurados para servicios de hosting
export const hostingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hosting Web Premium México",
  "provider": {
    "@type": "Organization",
    "name": "ARCII Cloud"
  },
  "description": "Servicio de hosting web con 99.9% uptime, SSL gratuito, backups automáticos y soporte 24/7",
  "serviceType": "Web Hosting",
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Planes de Hosting",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Hosting Eco",
        "price": "299",
        "priceCurrency": "MXN",
        "description": "Plan básico ideal para sitios pequeños"
      },
      {
        "@type": "Offer", 
        "name": "Hosting Estándar",
        "price": "599",
        "priceCurrency": "MXN", 
        "description": "Plan intermedio para sitios profesionales"
      },
      {
        "@type": "Offer",
        "name": "Hosting Performance", 
        "price": "999",
        "priceCurrency": "MXN",
        "description": "Plan avanzado para sitios de alto tráfico"
      }
    ]
  }
};

// Datos estructurados para FAQ
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué garantía de uptime ofrecen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ofrecemos una garantía de uptime del 99.9% respaldada por nuestro SLA. En caso de no cumplir, compensamos con créditos en tu cuenta."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Incluyen SSL gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todos nuestros planes incluyen certificados SSL Let's Encrypt gratuitos con renovación automática."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen soporte en español?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Nuestro equipo de soporte técnico habla español y está disponible 24/7 vía chat, email y teléfono."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen backups automáticos?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Sí, realizamos backups diarios automáticos y mantenemos copias por 30 días. También puedes crear backups manuales cuando gustes."
      }
    }
  ]
};

// Datos estructurados para breadcrumbs
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem", 
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}