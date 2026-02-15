/**
 * Contenido centralizado de la aplicación.
 * Todas las páginas cargan textos y metadatos desde aquí para facilitar cambios futuros.
 */

export const siteConfig = {
  name: "Tailwind CSS Tutorial",
  description: "Aprende Tailwind CSS de forma interactiva",
  nav: {
    home: "Inicio",
    grid: "Grid Layout",
    flex: "Flex Layout",
    positioning: "Posicionamiento",
    responsive: "Responsive",
    spacing: "Espaciado",
    colors: "Colores",
    typography: "Tipografía",
  },
} as const;

export const homeContent = {
  title: "Introducción a Tailwind CSS",
  subtitle: "Aprende las propiedades más usadas de Tailwind de forma interactiva",
  description:
    "Explora cada concepto, interactúa con los ejemplos y observa el código resultante en tiempo real.",
  sections: [
    {
      id: "grid",
      title: "Grid Layout",
      description: "Sistema de cuadrícula para diseños bidimensionales.",
      href: "/grid",
    },
    {
      id: "flex",
      title: "Flex Layout",
      description: "Contenedores flexibles para alinear y distribuir elementos.",
      href: "/flex",
    },
    {
      id: "positioning",
      title: "Posicionamiento",
      description: "Justify, Align y Place para alinear contenido.",
      href: "/positioning",
    },
    {
      id: "responsive",
      title: "Responsive",
      description: "Breakpoints y diseños que se adaptan a cualquier pantalla.",
      href: "/responsive",
    },
    {
      id: "spacing",
      title: "Espaciado",
      description: "Padding, margin y gap para controlar espacios.",
      href: "/spacing",
    },
    {
      id: "colors",
      title: "Colores",
      description: "Paleta de colores y fondos con Tailwind.",
      href: "/colors",
    },
    {
      id: "typography",
      title: "Tipografía",
      description: "Tamaños, pesos y estilos de texto.",
      href: "/typography",
    },
  ],
} as const;

// --- GRID LAYOUT ---

export const gridContent = {
  title: "Grid Layout",
  description: "Sistema de cuadrícula para crear layouts bidimensionales.",
  pages: [
    {
      slug: "grid-cols",
      title: "grid, grid-cols y gap",
      description:
        "Inicializa el grid, define el número de columnas y el espacio entre elementos.",
      classes: [
        { name: "grid", description: "Inicializa el layout en modo grid." },
        {
          name: "grid-cols-?",
          description: "Define el número de columnas (ej: grid-cols-3 = 3 columnas).",
        },
        {
          name: "gap-?",
          description: "Define el espacio entre elementos (ej: gap-4).",
        },
      ],
    },
    {
      slug: "col-span",
      title: "col-span",
      description: "Define cuántas columnas ocupa un elemento dentro del grid.",
      classes: [
        {
          name: "col-span-?",
          description:
            "El elemento ocupa N columnas (ej: col-span-2 ocupa 2 columnas).",
        },
      ],
    },
    {
      slug: "col-start-end",
      title: "col-start y col-end",
      description: "Define dónde comienza y termina un elemento en la cuadrícula.",
      classes: [
        {
          name: "col-start-?",
          description: "Línea de la grid donde inicia el elemento.",
        },
        {
          name: "col-end-?",
          description: "Línea de la grid donde termina el elemento.",
        },
      ],
    },
    {
      slug: "grid-rows",
      title: "grid-rows y grid-flow-col",
      description: "Define filas y la dirección del flujo del grid.",
      classes: [
        {
          name: "grid-rows-?",
          description: "Define el número de filas (ej: grid-rows-3).",
        },
        {
          name: "grid-flow-col",
          description: "Los elementos fluyen por columnas primero.",
        },
      ],
    },
    {
      slug: "row-span",
      title: "row-span",
      description: "Define cuántas filas ocupa un elemento en el grid.",
      classes: [
        {
          name: "row-span-?",
          description: "El elemento ocupa N filas (ej: row-span-2).",
        },
        {
          name: "col-span-?",
          description: "Combinado con row-span para celdas que abarcan varias filas y columnas.",
        },
      ],
    },
  ],
} as const;

// --- FLEX LAYOUT ---

export const flexContent = {
  title: "Flex Layout",
  description: "Contenedores flexibles para alinear y distribuir elementos.",
  pages: [
    {
      slug: "flex-basis",
      title: "flex, flex-row y basis",
      description: "Inicializa flex, dirección en fila y tamaño base de los elementos.",
      classes: [
        { name: "flex", description: "Inicializa el layout en modo flex." },
        {
          name: "flex-row",
          description: "Los elementos se disponen en fila (horizontal).",
        },
        {
          name: "basis-?",
          description: "Tamaño base del elemento (ej: basis-1/3, basis-32).",
        },
      ],
    },
    {
      slug: "flex-row-reverse",
      title: "flex-row-reverse",
      description: "Invierte el orden de los elementos en la fila.",
      classes: [
        {
          name: "flex-row-reverse",
          description: "Misma dirección que flex-row pero en orden inverso.",
        },
      ],
    },
    {
      slug: "flex-col",
      title: "flex-col",
      description: "Los elementos se disponen en columna (vertical).",
      classes: [
        {
          name: "flex-col",
          description: "Dirección en columna; los elementos se apilan verticalmente.",
        },
      ],
    },
    {
      slug: "flex-wrap",
      title: "flex-wrap y flex-nowrap",
      description: "Controla si los elementos pueden pasar a la siguiente línea.",
      classes: [
        {
          name: "flex-wrap",
          description: "Los elementos pueden pasar a la siguiente línea si no caben.",
        },
        {
          name: "flex-nowrap",
          description: "Los elementos no se ajustan; permanecen en una sola línea.",
        },
      ],
    },
    {
      slug: "order",
      title: "order",
      description: "Ordena visualmente los elementos sin cambiar el DOM.",
      classes: [
        {
          name: "order-?",
          description: "Orden de aparición (ej: order-1, order-last).",
        },
      ],
    },
  ],
} as const;

// --- POSICIONAMIENTO ---

export const positioningContent = {
  title: "Posicionamiento",
  description: "Justify, Align y Place para alinear y posicionar contenido.",
  intro: {
    justify:
      "Alinea horizontalmente el contenido en relación con su contenedor.",
    align: "Alinea verticalmente los elementos entre sí.",
    place:
      "Combina align y justify para alinear y posicionar en una sola propiedad.",
  },
  pages: [
    {
      slug: "justify",
      title: "Justify (content, items, self)",
      description: "Alineación horizontal del contenido.",
      classes: [
        { name: "justify-content", description: "Alinea el contenido a lo largo del eje principal." },
        { name: "justify-items", description: "Alinea los ítems dentro de su celda (grid)." },
        { name: "justify-self", description: "Alinea un único elemento dentro de su celda." },
      ],
    },
    {
      slug: "align",
      title: "Align (content, items, self)",
      description: "Alineación vertical de los elementos.",
      classes: [
        { name: "align-content", description: "Alinea el contenido en el eje transversal." },
        { name: "align-items", description: "Alinea todos los ítems en el eje transversal." },
        { name: "align-self", description: "Alinea un único ítem en el eje transversal." },
      ],
    },
    {
      slug: "place",
      title: "Place (content, items, self)",
      description: "Combinación de justify y align.",
      classes: [
        { name: "place-content", description: "place-content: align-content justify-content." },
        { name: "place-items", description: "place-items: align-items justify-items." },
        { name: "place-self", description: "place-self: align-self justify-self." },
      ],
    },
  ],
} as const;

// --- RESPONSIVE ---

export const responsiveContent = {
  title: "Responsive",
  description:
    "Diseños que se adaptan al tamaño de pantalla usando breakpoints de Tailwind.",
  pages: [
    {
      slug: "breakpoints",
      title: "Breakpoints (sm, md, lg, xl, 2xl)",
      description:
        "Prefijos que aplican estilos según el ancho de la pantalla. Simula diferentes tamaños de viewport.",
      classes: [
        {
          name: "sm:?",
          description: "≥ 640px (móvil grande / tablet pequeña).",
        },
        {
          name: "md:?",
          description: "≥ 768px (tablet).",
        },
        {
          name: "lg:?",
          description: "≥ 1024px (laptop).",
        },
        {
          name: "xl:?",
          description: "≥ 1280px (desktop).",
        },
        {
          name: "2xl:?",
          description: "≥ 1536px (pantalla grande).",
        },
      ],
    },
    {
      slug: "responsive-layout",
      title: "Layout responsive",
      description:
        "Grid y Flex que cambian columnas o dirección según el breakpoint activo.",
      classes: [
        {
          name: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          description: "1 columna en móvil, 2 en tablet, 3 en desktop.",
        },
        {
          name: "flex-col md:flex-row",
          description: "Columna en móvil, fila en tablet y superior.",
        },
      ],
    },
    {
      slug: "visibility",
      title: "Mostrar y ocultar (responsive)",
      description:
        "Mostrar u ocultar elementos según el tamaño de pantalla.",
      classes: [
        {
          name: "hidden md:block",
          description: "Oculto en móvil, visible desde md en adelante.",
        },
        {
          name: "block md:hidden",
          description: "Visible en móvil, oculto desde md en adelante.",
        },
      ],
    },
  ],
} as const;

// --- ESPACIADO ---

export const spacingContent = {
  title: "Espaciado",
  description: "Padding, margin y gap para controlar espacios entre y dentro de elementos.",
  pages: [
    {
      slug: "padding-margin",
      title: "Padding y Margin",
      description: "p-* (padding) y m-* (margin) con variantes de dirección.",
      classes: [
        { name: "p-?", description: "Padding en todos los lados (ej: p-4)." },
        { name: "px-?, py-?", description: "Padding horizontal y vertical." },
        { name: "pt?, pr?, pb?, pl?", description: "Padding por lado." },
        { name: "m-?", description: "Margin en todos los lados." },
        { name: "mx-auto", description: "Centra el elemento horizontalmente con margin." },
      ],
    },
  ],
} as const;

// --- COLORES ---

export const colorsContent = {
  title: "Colores",
  description: "Fondos, texto y bordes con la paleta de Tailwind.",
  pages: [
    {
      slug: "basics",
      title: "Colores básicos",
      description: "bg-*, text-*, border-* con escalas (50-950).",
      classes: [
        { name: "bg-?", description: "Color de fondo (ej: bg-blue-500)." },
        { name: "text-?", description: "Color del texto (ej: text-gray-700)." },
        { name: "border-?", description: "Color del borde." },
      ],
    },
  ],
} as const;

// --- TIPOGRAFÍA ---

export const typographyContent = {
  title: "Tipografía",
  description: "Tamaños, pesos y estilos de texto.",
  pages: [
    {
      slug: "basics",
      title: "Texto básico",
      description: "Tamaño, peso y alineación del texto.",
      classes: [
        { name: "text-?", description: "Tamaño (text-sm, text-lg, text-xl)." },
        { name: "font-?", description: "Peso (font-normal, font-bold)." },
        { name: "text-left/center/right", description: "Alineación del texto." },
      ],
    },
  ],
} as const;

// Helpers para rutas y navegación

export type GridSlug = (typeof gridContent.pages)[number]["slug"];
export type FlexSlug = (typeof flexContent.pages)[number]["slug"];
export type PositioningSlug = (typeof positioningContent.pages)[number]["slug"];
export type ResponsiveSlug = (typeof responsiveContent.pages)[number]["slug"];

export function getGridPage(slug: GridSlug) {
  return gridContent.pages.find((p) => p.slug === slug);
}

export function getFlexPage(slug: FlexSlug) {
  return flexContent.pages.find((p) => p.slug === slug);
}

export function getPositioningPage(slug: PositioningSlug) {
  return positioningContent.pages.find((p) => p.slug === slug);
}

export function getResponsivePage(slug: ResponsiveSlug) {
  return responsiveContent.pages.find((p) => p.slug === slug);
}
