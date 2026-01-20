export const FOOTER_LINKS = {
  product: [
    { label: "Funciones", href: "#features" },
    { label: "Guía de Uso", href: "#guide" },
    { label: "Centro De Ayuda", href: "/help" },
  ],
  info: [
    { label: "Acerca de", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],
  support: [
    { label: "Documentación", href: "/docs" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacidad", href: "/legal/privacy" },
    { label: "Términos", href: "/legal/terms" },
  ],
} as const;

export const SOCIAL_LINKS = [] as const;

export const APP_INFO = {
  name: "Semestrix",
  version: "1.0.0",
  description:
    "Tu compañero inteligente para planificar y optimizar tu carrera universitaria. Simplifica tu camino hacia el éxito académico con Semestrix.",
} as const;
