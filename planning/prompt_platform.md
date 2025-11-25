# Prompt: Plataforma para Compositor de Alto Calibre

**Rol:** Desarrollador Web Senior & Diseñador UI/UX Creativo.

**Objetivo:** Crear una plataforma web (portfolio) para un compositor joven de clase mundial. El sitio debe ser una extensión de su arte: elegante, moderno, y técnicamente impecable.

## 1. Estética y Diseño (Look & Feel)
- **Vibe:** "Quiet Luxury", Minimalismo Cinematográfico, Vanguardia.
- **Paleta de Colores:** Dark mode predominante (negros profundos, grises carbón), con acentos sutiles (dorado pálido, blanco humo) o gradientes atmosféricos.
- **Tipografía:** Combinación de una fuente Serif moderna para títulos (elegancia) y Sans-serif geométrica para cuerpo (limpieza).
- **Interacción:** Animaciones fluidas (Framer Motion). El sitio debe sentirse "vivo" pero no caótico. Scroll suave, transiciones de página sin cortes (page transitions).

## 2. Funcionalidad Clave
- **Reproductor de Audio Persistente (Global Player):**
    - Característica crítica. El usuario debe poder navegar por el sitio sin que la música se detenga.
    - Controles minimalistas flotantes o en una barra fija discreta.
    - Visualizador de audio sutil (ondas) opcional.
- **Showcase de Proyectos (Portfolio):**
    - Grid o Slider interactivo para álbumes, bandas sonoras, o piezas individuales.
    - Al hacer clic, abre detalles (créditos, descripción) y permite reproducir tracks específicos.
- **Biografía / About:**
    - Diseño editorial. Texto mezclado con fotografía artística del compositor.
- **Contacto:**
    - Formulario simple y directo. Enlaces a redes sociales y plataformas de streaming (Spotify, Apple Music).

## 3. Stack Tecnológico Recomendado
- **Framework:** Next.js (App Router) para rendimiento y SEO.
- **Estilos:** Tailwind CSS para diseño rápido y customización total.
- **Animaciones:** Framer Motion.
- **Estado/Audio:** React Context o Zustand para manejar el estado del reproductor global.
- **CMS (Opcional):** Sanity.io o Contentful si el compositor necesita actualizar contenido frecuentemente, o simplemente datos en JSON/MDX para empezar.

## 4. Instrucciones para la IA (si se usa para generar código)
"Actúa como un experto en Next.js y diseño creativo. Crea la estructura de un proyecto Next.js con TypeScript. Implementa un sistema de diseño oscuro y elegante. Configura un 'Layout' que incluya un reproductor de audio persistente (mockup funcional) que no se reinicie al cambiar de ruta. Crea una página de inicio con un 'Hero' section inmersivo que invite a escuchar."
