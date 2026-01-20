export const PRIVACY_PAGE_INFO = {
  lastUpdated: "12 de junio de 2025",
  effectiveDate: "12 de junio de 2025",
  version: "1.0.0",
  title: "Política de Privacidad",
  subtitle:
    "Tu privacidad es mi prioridad. Conoce cómo protejo y utilizo tu información.",
  introTitle: "Compromiso con tu Privacidad",
  introText:
    "En Semestrix, entiendo la importancia de proteger tu información personal y académica. Esta Política de Privacidad describe cómo recopilo, utilizo, protejo y comparto tu información cuando utilizas los servicios de planificación académica.",
  contactTitle: "¿Preguntas sobre tu Privacidad?",
  contactSubtitle:
    "Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejo tu información, no dudes en contactarme.",
  contactEmail: "castaneda.systems@gmail.com",
  supportLink: "/help",
  footerDescription:
    "Esta Política de Privacidad puede actualizarse periódicamente para reflejar cambios en las prácticas o por otros motivos operativos, legales o regulatorios.",
} as const;

export const PRIVACY_SECTIONS = [
  {
    title: "1. Información que Recopilamos",
    content: [
      {
        subtitle: "Información Personal",
        text: "Recopilo información que me proporcionas directamente, como tu nombre, dirección de correo electrónico, información académica (carrera, universidad, materias cursadas), y preferencias de configuración.",
      },
      {
        subtitle: "Preferencias y Configuración",
        text: "Guardo tus elecciones de tema, idioma y otras opciones de personalización para ofrecerte una experiencia consistente en cada sesión.",
      },
      {
        subtitle: "Feedback y Soporte",
        text: "Al enviarme sugerencias, reportes de errores o valoraciones, almaceno ese contenido para mejorar Semestrix y responder a tus solicitudes.",
      },
    ],
  },
  {
    title: "2. Cómo Utilizamos tu Información",
    content: [
      {
        subtitle: "Prestación de Servicios",
        text: "Utilizo tu información para proporcionar, mantener y mejorar los servicios de planificación académica, incluyendo la generación de horarios personalizados y recomendaciones.",
      },
      {
        subtitle: "Comunicación",
        text: "Puedo usar tu información de contacto para enviarte actualizaciones importantes sobre el servicio, notificaciones académicas, y responder a tus consultas.",
      },
      {
        subtitle: "Mejora del Servicio",
        text: "Analizo patrones de uso agregados y anónimos para mejorar las funcionalidades y desarrollar nuevas características que beneficien a todos los usuarios.",
      },
    ],
  },
  {
    title: "3. Compartir tu Información",
    content: [
      {
        subtitle: "No Vendemos tu Información",
        text: "Nunca vendemos, alquilamos o compartimos tu información personal con terceros con fines comerciales. Tu información académica y personal es estrictamente confidencial.",
      },
      {
        subtitle: "Proveedores de Servicios",
        text: "Puedo compartir información con proveedores de servicios confiables que me ayudan a operar la plataforma (hosting, base de datos), siempre bajo estrictos acuerdos de confidencialidad.",
      },
      {
        subtitle: "Requerimientos Legales",
        text: "Puedo divulgar información personal si es requerido por ley o para proteger los derechos, propiedad o seguridad de los usuarios.",
      },
    ],
  },
  {
    title: "4. Seguridad de los Datos",
    content: [
      {
        subtitle: "Encriptación",
        text: "Toda la información sensible se transmite utilizando protocolos de encriptación SSL/TLS y se almacena en servidores seguros con acceso restringido.",
      },
      {
        subtitle: "Acceso Restringido",
        text: "Solo el desarrollador y mantenedor de Semestrix puede acceder a la base de datos, protegida en servidores seguros.",
      },
      {
        subtitle: "Copia de Respaldo",
        text: "Realizo backups automáticos periódicos; esos respaldos se borran tras 30 días para evitar retenciones prolongadas.",
      },
    ],
  },
  {
    title: "5. Transparencia del Servicio",
    content: [
      {
        subtitle: "Código Cerrado",
        text: "Semestrix es un proyecto de código cerrado. Aunque el código fuente no está disponible públicamente, me comprometo a proteger tu privacidad y usar tu información únicamente para los propósitos descritos en esta política.",
      },
      {
        subtitle: "Compromiso de Privacidad",
        text: "A pesar de que el código es privado, tu información personal y académica se maneja con los más altos estándares de privacidad y seguridad. No vendo ni comparto tus datos con terceros.",
      },
      {
        subtitle: "Auditoría de Datos",
        text: "Puedes solicitar en cualquier momento un reporte de qué información personal tengo almacenada sobre ti contactándome directamente.",
      },
    ],
  },
  {
    title: "6. Tus Derechos y Controles",
    content: [
      {
        subtitle: "Acceso y Actualización",
        text: "Puedes acceder, actualizar o corregir tu información personal en cualquier momento a través de la configuración de tu cuenta o contactándome directamente.",
      },
      {
        subtitle: "Eliminación de Datos",
        text: "Puedes solicitar la eliminación de tu cuenta y datos personales. Procesaré estas solicitudes de acuerdo con las leyes aplicables y las políticas de retención.",
      },
      {
        subtitle: "Control de Comunicaciones",
        text: "Puedes optar por no recibir comunicaciones promocionales en cualquier momento, aunque seguirás recibiendo notificaciones importantes del servicio.",
      },
    ],
  },
  {
    title: "7. Cookies y Tecnologías Similares",
    content: [
      {
        subtitle: "Uso de Cookies",
        text: "Utilizo cookies y tecnologías similares para mejorar tu experiencia, recordar tus preferencias, y analizar el uso de los servicios.",
      },
      {
        subtitle: "Control de Cookies",
        text: "Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad de los servicios.",
      },
      {
        subtitle: "Cookies de Terceros",
        text: "Puedo usar servicios de terceros para análisis, que pueden establecer sus propias cookies. Estos terceros tienen sus propias políticas de privacidad.",
      },
    ],
  },
  {
    title: "8. Retención de Datos",
    content: [
      {
        subtitle: "Período de Retención",
        text: "Conservo tu información personal durante el tiempo que sea necesario para proporcionar los servicios y cumplir con las obligaciones legales.",
      },
      {
        subtitle: "Eliminación Automática",
        text: "Los datos de cuentas inactivas durante más de 3 meses pueden ser eliminados automáticamente, previa notificación al usuario.",
      },
      {
        subtitle: "Datos de Respaldo",
        text: "Los datos pueden persistir en copias de respaldo durante un período adicional por razones de seguridad y continuidad del servicio.",
      },
    ],
  },
  {
    title: "9. Menores de Edad",
    content: [
      {
        subtitle: "Restricción de Edad",
        text: "Los servicios están destinados a usuarios mayores de 13 años. No recopilo intencionalmente información personal de menores de 13 años.",
      },
      {
        subtitle: "Consentimiento Parental",
        text: "Si descubro que he recopilado información de un menor de 13 años sin el consentimiento parental verificable, tomaré medidas para eliminar esa información.",
      },
    ],
  },
] as const;
