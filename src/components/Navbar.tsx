import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react" // íconos para hamburguesa

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  )
  const [isOpen, setIsOpen] = useState(false) // para menú móvil

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Título */}
        <h1 className="text-xl font-bold whitespace-nowrap">Mi Portafolio</h1>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:text-primary transition">Proyectos</a>
          <a href="#about" className="hover:text-primary transition">Sobre mí</a>
          <a href="#contact" className="hover:text-primary transition">Contacto</a>

          <button
            className="ml-4 px-3 py-2 rounded-md border hover:bg-muted"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Botón hamburguesa móvil */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-md border hover:bg-muted"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-background/90 backdrop-blur z-50 border-t">
    <nav className="flex flex-col items-center gap-4 py-4">
      <a
        href="#projects"
        className="text-lg hover:text-primary transition"
        onClick={() => setIsOpen(false)}
      >
        Proyectos
      </a>
      <a
        href="#about"
        className="text-lg hover:text-primary transition"
        onClick={() => setIsOpen(false)}
      >
        Sobre mí
      </a>
      <a
        href="#contact"
        className="text-lg hover:text-primary transition"
        onClick={() => setIsOpen(false)}
      >
        Contacto
      </a>
    </nav>
  </div>
)}

    </header>
  )
}
