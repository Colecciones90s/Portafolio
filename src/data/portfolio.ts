export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export const portfolioData = {
  name: "Ruben Salas",
  title: "Desarrollador Fullstack",
  location: "Lima, Perú",
  bio: "Apasionado por construir aplicaciones web modernas, optimizadas y escalables. Experiencia en React, .NET y desarrollo de APIs REST.",

  skills: ["React", "Angular", "Node.js", ".NET", "SQL", "Git", "UI/UX", "Mobile", "Backend"],

  projects: [
    {
      id: 1,
      title: "Proyecto 1",
      description: "App en React con Tailwind",
      image: "https://picsum.photos/800/600?random=1",
      tags: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "API REST en .NET 8",
      image: "https://picsum.photos/800/600?random=2",
      tags: [".NET 8", "EF Core", "SQL Server"],
      link: "#",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Dashboard interactivo con gráficos",
      image: "https://picsum.photos/800/600?random=3",
      tags: ["React", "Recharts", "Tailwind"],
      link: "#",
    },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Reporte con gráficos interactivos y autenticación.",
    image: "https://picsum.photos/400/250?random=4",
    link: "#",
    tags: ["React", "Reports"],
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Certificados digitales.",
    image: "https://picsum.photos/400/250?random=5",
    link: "#",
    tags: ["NET", "Reports"],
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Aplicación de Colecciones Maui.",
    image: "https://picsum.photos/400/250?random=6",
    link: "#",
    tags: ["Maui", "NET", "API"],
  },
  ],

  contact: {
    email: "ruben@example.com",
    linkedin: "https://linkedin.com/in/ruben-salas",
    github: "https://github.com/rubensalas",
  },
}
