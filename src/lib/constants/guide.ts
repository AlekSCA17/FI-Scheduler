export const GUIDE_STEPS = [
  {
    iconName: "user",
    title: "Crea tu Perfil",
    description:
      "Comienza configurando tu información académica básica para personalizar tu experiencia.",
    details: [
      "Ingresa tu información personal",
      "Selecciona tu carrera de ingeniería",
      "Completa tu perfil académico",
      "Accede al dashboard personalizado",
    ],
    direction: "left" as const,
  },
  {
    iconName: "cloud-upload",
    title: "Registra tu Historial",
    description:
      "Ingresa las materias que has cursado para llevar un seguimiento de tu progreso.",
    details: [
      "Agrega las materias que has aprobado",
      "Registra tus calificaciones y semestres cursados",
      "Visualiza tu progreso académico en tiempo real",
      "Actualiza tu historial cuando completes nuevas materias",
    ],
    direction: "right" as const,
  },
  {
    iconName: "bolt",
    title: "Explora el Catálogo",
    description:
      "Consulta la información completa de todas las materias disponibles.",
    details: [
      "Busca materias por código o nombre",
      "Revisa secciones, horarios y profesores",
      "Verifica prerrequisitos y créditos",
      "Identifica qué materias puedes cursar según tu historial",
    ],
    direction: "left" as const,
  },
  {
    iconName: "telescope",
    title: "Gestiona tu Carrera",
    description:
      "Accede a tu malla curricular y planifica tu trayectoria académica.",
    details: [
      "Consulta la malla completa de tu carrera",
      "Identifica materias obligatorias y electivas",
      "Revisa los requisitos para cada materia",
      "Planifica qué materias tomar en próximos semestres",
    ],
    direction: "right" as const,
  },
] as const;
