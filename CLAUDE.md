# CLAUDE.md - Contexto Inicial de Proyecto

> **Nombre del Proyecto:** Caminando por New York
> **Fecha de Configuración:** 2026-07-23
> **Estructura de Referencia:** Contexto inicial para iniciar el desarrollo con Claude Code.

---

## 🎯 1. Visión General del Proyecto y Preguntas Básicas

### ¿Qué se espera del proyecto? (Objetivos)
El objetivo central es diseñar y desarrollar una plataforma web altamente optimizada para dispositivos móviles (Mobile-First), enfocada en ofrecer una guía interactiva y ágil sobre los puntos más destacados, icónicos y estratégicos de Nueva York.

- Experiencia de usuario (UX) fluida: Navegación intuitiva, tiempos de carga ultrarrápidos y consumo eficiente de datos para turistas en movimiento.
-  Curaduría de contenido: Selección estratégica de atracciones, actividades y experiencias recomendadas sin saturar al usuario.
-  Funcionalidad clave: Mapas interactivos, filtros por categorías (cultura, gastronomía, vistas panorámicas, compras) y recomendaciones según el tiempo disponible.

### ¿Para qué va a servir? (Propósito y Usuarios)
Servir como el acompañante digital definitivo para viajeros primerizos en la ciudad de Nueva York. Funciona como una guía de bolsillo accesible desde cualquier navegador móvil sin necesidad de descargar una aplicación pesada, facilitando la toma de decisiones rápidas antes y durante el viaje.

### ¿Qué problema soluciona? (Valor y Solución)
Viajar a Nueva York por primera vez suele provocar abrumación debido a la inmensa cantidad de opciones y al costo/tiempo que implica trasladarse.
- El problema: Pérdida de tiempo valioso planificando sobre la marcha, itinerarios ineficientes y saturación de información dispersa en internet.
- La solución: La plataforma optimiza el tiempo del turista agrupando sitios icónicos y experiencias imperdibles por cercanía y relevancia. 
- Permite estructurar recorridos eficientes para maximizar la cantidad y calidad de experiencias conocidas dentro de un rango de tiempo limitado (ej. 3, 5 o 7 días).

### Público Objetivo
Turistas primerizos, agencias, influenciadores.

---

## 🛠️ 2. Stack Tecnológico de Preferencia

| Categoría | Tecnología Seleccionada |
| :--- | :--- |
| **Framework Principal** | `Next.js (App Router)` |
| **Lenguaje** | `Python` |
| **Gestor de Paquetes** | `npm` (Comando: `npm install`) |
| **CSS & Framework UI** | `Tailwind CSS v4` |
| **Librerías de Animación / Iconos** | GSAP |
| **Base de Datos** | `None / Local Storage` |
| **Gestión de Estado & API** | React State por defecto |
| **Plataforma de Despliegue** | `Vercel` |

---

## 🏗️ 3. Arquitectura de Sistema y Diseño

### Patrón Arquitectónico
Next.js App Router Fullstack con Server Actions y Route Handlers /api


### Estructura de Directorios Recomendada
```text
my-saas-app/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── webhooks/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── dashboard/
│   ├── db/
│   │   ├── schema.ts
│   │   └── index.ts
│   ├── lib/
│   └── types/
├── .env.example
├── package.json
└── CLAUDE.md
```

### Notas de Diseño de Sistema & Modelo de Datos
Diseño de sistema simplificado con componentes desacoplados e interfaces de datos bien definidas.

---


---

## 🎨 5. Referentes Visuales y Guías de Diseño

### Estilo Estético & Atmósfera
- **Estilo Visual:** Modern SaaS Clean Light & Dark Mode con bordes finos y acentos Indigo.
- **Color Primario de Marca:** `#1C4B42`
- **Color Secundario / Acento:** `#92C200`
- **Guía Tipográfica:** Plus Jakarta Sans para interfaz general y JetBrains Mono para código/IDs.

### Enlaces de Referencia e Inspiración
https://cdn.dribbble.com/userupload/39405217/file/original-de68a98ea8201556ecdb96fdaecab546.png?resize=752x&vertical=center
https://cdn.dribbble.com/userupload/16183352/file/original-fc0688c8033e7cc3b82de647ef50a879.png?resize=752x&vertical=center
https://cdn.dribbble.com/userupload/41849626/file/original-81e0672e501ef4b2f558d2085740e190.png?resize=800x600
https://finovate.vamtam.com/

---

## 📜 6. Reglas de Código y Directrices para Claude

Claude debe seguir estrictamente estas pautas durante todo el desarrollo:

1. Asegurar diseño responsive mobile-first utilizando utilidades de Tailwind CSS.
2. Ninguna

---

