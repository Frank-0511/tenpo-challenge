# Tenpo Challenge

## 📋 Descripción
Una aplicación web para visualizar usuarios desde una API externa, con funcionalidades de virtualización para un rendimiento óptimo y una interfaz de usuario adaptativa.

## 🚀 Tecnologías Utilizadas
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Window (virtualización)
- Bun (gestor de paquetes)
- Msw (mocks de apis)

## 🔧 Requisitos Previos
- Node.js (v20 o superior)
- Bun instalado globalmente

## ⚙️ Instalación y Ejecución

### Instalación
```bash
# Instalar dependencias con Bun
bun install

# Iniciar Mock Service Worker (MSW)
bun msw:start

# Iniciar servidor de desarrollo
bun dev

# Construir aplicación para producción
bun run build
```

## 🏗️ Estructura del Proyecto

```bash
/src
├── app/                         # Configuración global y punto de entrada
│   ├── App.tsx                  # Componente raíz con providers globales
│   └── main.tsx                 # Punto de entrada de la aplicación
│
├── assets/                      # Recursos estáticos (imágenes, fuentes, etc.)
│
├── core/                        # Infraestructura y configuración global
│   ├── api/                     # Configuración global de llamadas a la API
│   ├── constants/               # Valores constantes reutilizables
│   ├── hooks/                   # Hooks globales (API, configuración, etc.)
│   ├── router/                  # Configuración de React Router
│   ├── store/                   # Gestión de estado global con Zustand
│   ├── styles/                  # Estilos globales (Tailwind, daisyui, etc.)
│   └── types/                   # Tipos TypeScript globales
│
├── mocks/                       # Mock para simular el login
│
├── features/                    # Organización por módulos o funcionalidades
│   ├── auth/                    # Módulo de autenticación
│   │   ├── components/          # Componentes específicos de autenticación
│   │   ├── pages/               # Páginas: Login, Registro, etc.
│   │   └── schemas/             # Schemas de validación de formularios
│   │
│   ├── main/                    # Módulo privado (Home, Perfil, etc.)
│   │   ├── components/          # Componentes específicos de main
│   │   └── pages/               # Páginas: Home, Perfil, etc.
│
└── shared/                      # Componentes, hooks y utilidades compartidas
    └── components/              # Componentes reutilizables
        ├── atoms/               # Elementos básicos (botón, input, iconos)
        ├── molecules/           # Agrupaciones de átomos (formularios, cards)
        ├── organisms/           # Componentes complejos (secciones, paneles)
        ├── templates/           # Disposiciones de página sin contenido específico
        └── pages/               # Vistas completas implementando templates
```

## 🛠️ Decisiones Técnicas
- Virtualización: Se utilizó react-window para manejar grandes listas de manera eficiente
- Componentes funcionales: Implementados con React Hooks para un código más limpio
- Sistema de diseño: Componentes modulares para mantener consistencia visual

## 📊 Optimización de Rendimiento
- Lista virtualizada para manejo eficiente de grandes conjuntos de datos
- Carga perezosa (lazy loading) de componentes


## Argumentación sobre la visualización de la lista en la Home
La mejor forma de mostrar la lista en la Home es con una lista virtualizada en grid, optimizando el rendimiento al renderizar solo los elementos visibles.

## Mejora Teórica sobre las llamadas usadas al backend
Para mejorar la eficiencia en las llamadas al backend, se recomienda la paginación para evitar cargar grandes volúmenes de datos en una sola solicitud. Como alternativa, el uso de compresión GZIP ayuda a reducir el peso de las respuestas, mejorando los tiempos de carga.
