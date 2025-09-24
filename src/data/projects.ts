export interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Aplicación en React con TailwindCSS y ShadCN UI.",
    image: "https://picsum.photos/400/250?random=1",
    link: "#",
    tags: ["React", "Tailwind", "Frontend"],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "API REST construida en .NET 8 con Entity Framework.",
    image: "https://picsum.photos/400/250?random=2",
    link: "#",
    tags: [".NET", "API", "Backend"],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Dashboard con gráficos interactivos y autenticación.",
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    tags: ["React", "Charts", "Auth"],
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Reporte con gráficos interactivos y autenticación.",
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    tags: ["React", "Reports"],
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Certificados digitales.",
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    tags: ["NET", "Reports"],
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Aplicación de Colecciones Maui.",
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
    tags: ["Maui", "NET", "API"],
  },
]
