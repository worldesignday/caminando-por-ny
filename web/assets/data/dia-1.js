/* Datos del itinerario — Downtown · Día 1.
 * Tipos de nodo (k): stop | island | food | transit | ferryseg | arrive | end */
window.DIA_DATA = {
  meta: {
    eyebrow: "Nueva York · Ruta andando",
    titleTop: "Downtown",
    titleBottom: "Día 1",
    homeHref: "/",
    homeLabel: "Todos los días",
    datebar: [
      "<b>Martes 6 oct 2026</b>",
      "Alojamiento: <b>333 York St</b>, Jersey City",
      "PATH + Tren 1"
    ],
    toggle: { con: "🗽 Con ferry", sin: "Sin ferry" },
    defaultMode: "con",
    infoLabel: "Transporte &amp; consejos",
    info: [
      {
        h4: "Cómo moverte",
        ps: [
          "<b>Ida:</b> desde 333 York St caminas a <b>Grove St PATH</b> → tren PATH a <b>World Trade Center</b> → conectas hacia el sur (Battery Park). ~35 min.",
          "<b>Vuelta:</b> desde el Puente de Brooklyn caminas al <b>WTC PATH</b> → PATH a Grove St → alojamiento. ~30 min.",
          "Coste transporte ida y vuelta: <b>~$12</b> por persona."
        ]
      },
      {
        h4: "Ferry — reserva antes",
        ps: [
          "<b>Statue City Cruises</b> es el único operador oficial desde Battery Park. Reserva online el <b>primer turno (~09:00)</b> y verifica el horario para octubre. Billete ~<b>$25</b>.",
          "Para subir a la <b>corona o el pedestal</b>: reserva con <b>semanas</b> de antelación (cupos limitados)."
        ]
      },
      {
        h4: "Buenos a saber",
        ps: [
          "<b>Federal Hall</b> abre entre semana → el martes es perfecto.",
          "Las colas de <b>seguridad del ferry</b> son lo más impredecible: si te retrasas, recorta 10 min en Seaport.",
          "Los números en cada parada <b>coinciden con el folleto original</b> del mapa."
        ]
      }
    ],
    footer: "Itinerario Downtown Día 1 · Tiempos a pie calculados con Google Directions API<br>Ferry en tiempos estimados de Statue City Cruises"
  },

  con: {
    stats: [["Horario", "07:50", "18:00"], ["Duración", "~10 h", ""], ["Paradas", "2+11", ""], ["A pie", "4.5 km", ""]],
    groups: [
      {
        label: "Mañana · Ferry a las islas", items: [
          { t: "07:50", k: "transit", ttl: "Salir del alojamiento", sub: "333 York St → PATH + Tren 1", dur: "36 min" },
          { t: "08:30", k: "arrive", ttl: "Battery Park / Castle Clinton", sub: "Punto de embarque del ferry", light: true },
          { t: "08:30", k: "ferryseg", ttl: "Seguridad + embarque", sub: "Llega temprano: cola variable", dur: "30 min", light: true },
          { t: "09:00", k: "ferryseg", ttl: "Ferry → Liberty Island", dur: "15 min", light: true },
          { t: "09:15", k: "island", ttl: "Estatua de la Libertad", sub: "Isla, pedestal y museo", dur: "1 h 40 min", star: true },
          { t: "10:55", k: "ferryseg", ttl: "Ferry → Ellis Island", dur: "10 min", light: true },
          { t: "11:05", k: "island", ttl: "Ellis Island", sub: "Museo Nacional de Inmigración", dur: "1 h 40 min", star: true },
          { t: "12:45", k: "ferryseg", ttl: "Ferry → Battery Park", dur: "20 min", light: true },
          { t: "13:05", k: "arrive", ttl: "Regreso a tierra firme", light: true }
        ]
      },
      {
        label: "Comida rápida", food: true, items: [
          { t: "13:12", k: "food", ttl: "Almuerzo rápido", sub: "Junto a Bowling Green — para llevar", dur: "30 min" }
        ]
      },
      {
        label: "Tarde · Recorrido a pie (orden del mapa)", items: [
          { t: "13:42", k: "stop", n: "13", ttl: "Bowling Green", sub: "El parque más antiguo de NY", dur: "8 min" },
          { t: "13:53", k: "stop", n: "14", ttl: "Toro de Wall Street", sub: "Charging Bull — foto obligada", dur: "12 min" },
          { t: "14:12", k: "stop", n: "15", ttl: "Trinity Church", dur: "20 min" },
          { t: "14:37", k: "stop", n: "16", ttl: "Bolsa de Nueva York (NYSE)", dur: "10 min" },
          { t: "14:50", k: "stop", n: "17", ttl: "Federal Hall", sub: "Donde juró George Washington", dur: "15 min" },
          { t: "15:08", k: "stop", n: "18", ttl: "La Niña sin Miedo", sub: "Fearless Girl", dur: "8 min" },
          { t: "15:24", k: "stop", n: "20", ttl: "Stone Street", sub: "Calle adoquinada histórica", dur: "10 min" },
          { t: "15:37", k: "stop", n: "21", ttl: "Fraunces Tavern", sub: "Taberna de 1762", dur: "10 min" },
          { t: "16:02", k: "stop", n: "27-28", ttl: "South Street Seaport", sub: "Pier 17 · vistas al río", dur: "30 min" },
          { t: "16:35", k: "stop", n: "30", ttl: "Memorial Titanic", dur: "5 min" },
          { t: "16:52", k: "stop", n: "31", ttl: "Puente de Brooklyn", sub: "Entrada peatonal + fotos", dur: "23 min" }
        ]
      },
      {
        label: "Regreso", items: [
          { t: "17:15", k: "transit", ttl: "Caminar al WTC PATH", dur: "9 min" },
          { t: "17:24", k: "transit", ttl: "PATH → alojamiento", dur: "~30 min" },
          { t: "18:00", k: "end", ttl: "Llegada a 333 York St", big: true }
        ]
      }
    ],
    omit: ["1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "19", "22", "23", "24", "25", "26", "29"],
    recs: {
      title: "🍔 Comida rápida tras el ferry",
      p: "Al bajar en Battery Park, para no perder la tarde:",
      items: [
        ["Carritos de Battery Park", "hot dogs, halal, pretzels · lo más rápido (~$8–12)"],
        ["Pret A Manger", "sándwiches y ensaladas para llevar"],
        ["Una porción de pizza", "el clásico neoyorquino, cerca de Broadway"],
        ["Just Salad / Chipotle", "algo más sustancioso pero ágil"]
      ],
      note: "Consejo: pídelo para llevar y come caminando hacia Bowling Green."
    }
  },

  sin: {
    stats: [["Horario", "08:10", "17:55"], ["Duración", "~9¾ h", ""], ["Paradas", "31", ""], ["A pie", "8.6 km", ""]],
    omitEmptyNote: "Esta versión visita <b>las 31 paradas</b> del mapa original, en orden.",
    groups: [
      {
        label: "Mañana · Battery Park", items: [
          { t: "08:10", k: "transit", ttl: "Salir del alojamiento", sub: "333 York St → PATH + Tren 1", dur: "35 min" },
          { t: "08:45", k: "stop", n: "1", ttl: "Staten Island Ferry", sub: "Whitehall Terminal — inicio", dur: "5 min" },
          { t: "08:52", k: "stop", n: "2", ttl: "St. Elizabeth Ann Seton Shrine", dur: "8 min" },
          { t: "09:06", k: "stop", n: "3", ttl: "Carrusel SeaGlass", sub: "y Battery Playscape", dur: "8 min" },
          { t: "09:16", k: "stop", n: "4", ttl: "East Coast Memorial", dur: "8 min" },
          { t: "09:27", k: "stop", n: "5", ttl: "Castle Clinton", sub: "Fuerte de 1811", dur: "12 min" },
          { t: "09:40", k: "stop", n: "6", ttl: "Estatua de la Libertad", sub: "Mirador desde Battery Park", dur: "8 min" },
          { t: "09:51", k: "stop", n: "7", ttl: "American Merchant Mariners' Memorial", dur: "5 min" },
          { t: "10:00", k: "stop", n: "8", ttl: "The Battery Urban Farm", dur: "8 min" },
          { t: "10:15", k: "stop", n: "9", ttl: "Museum of Jewish Heritage", dur: "10 min" },
          { t: "10:29", k: "stop", n: "10", ttl: "Oasis Park", sub: "Wagner Park", dur: "8 min" },
          { t: "10:43", k: "stop", n: "11", ttl: "Skyscraper Museum", dur: "10 min" }
        ]
      },
      {
        label: "Mediodía · Bowling Green y Wall Street", items: [
          { t: "11:03", k: "stop", n: "12", ttl: "Museo de los Indios Americanos", sub: "Custom House · gratis", dur: "20 min" },
          { t: "11:24", k: "stop", n: "13", ttl: "Bowling Green", dur: "8 min" },
          { t: "11:34", k: "stop", n: "14", ttl: "Toro de Wall Street", sub: "Charging Bull", dur: "12 min" },
          { t: "11:51", k: "stop", n: "15", ttl: "Trinity Church", dur: "20 min" },
          { t: "12:16", k: "stop", n: "16", ttl: "Bolsa de Nueva York (NYSE)", dur: "10 min" },
          { t: "12:30", k: "stop", n: "17", ttl: "Federal Hall", sub: "Donde juró George Washington", dur: "15 min" },
          { t: "12:49", k: "stop", n: "18", ttl: "La Niña sin Miedo", sub: "Fearless Girl", dur: "8 min" },
          { t: "13:02", k: "stop", n: "19", ttl: "Delmonico's", sub: "Restaurante histórico (fachada)", dur: "5 min" }
        ]
      },
      {
        label: "Mediodía · Almuerzo", food: true, items: [
          { t: "13:09", k: "food", n: "20", ttl: "Stone Street", sub: "Almuerzo en el corazón del Financial District", dur: "1 h" }
        ]
      },
      {
        label: "Tarde · Waterfront y Seaport", items: [
          { t: "14:11", k: "stop", n: "21", ttl: "Fraunces Tavern", sub: "Taberna de 1762 + museo", dur: "15 min" },
          { t: "14:32", k: "stop", n: "22", ttl: "Battery Maritime Building", dur: "8 min" },
          { t: "14:43", k: "stop", n: "23", ttl: "Helipuerto", sub: "Downtown Manhattan Heliport", dur: "5 min" },
          { t: "14:53", k: "stop", n: "24", ttl: "Elevated Acre", sub: "Parque escondido con vistas", dur: "10 min" },
          { t: "15:05", k: "stop", n: "25", ttl: "Picnic con vistas", sub: "East River Esplanade", dur: "8 min" },
          { t: "15:21", k: "stop", n: "26", ttl: "Pier 15", dur: "10 min" },
          { t: "15:33", k: "stop", n: "27", ttl: "South Street Seaport", sub: "Pier 16 y 17", dur: "30 min" },
          { t: "16:05", k: "stop", n: "28", ttl: "Seaport District", dur: "12 min" },
          { t: "16:18", k: "stop", n: "29", ttl: "Cannon's Walk", dur: "6 min" },
          { t: "16:25", k: "stop", n: "30", ttl: "Memorial Titanic", dur: "5 min" },
          { t: "16:42", k: "stop", n: "31", ttl: "Puente de Brooklyn", sub: "Entrada + cruzar un tramo", dur: "30 min" }
        ]
      },
      {
        label: "Regreso", items: [
          { t: "17:12", k: "transit", ttl: "Caminar al WTC PATH", dur: "9 min" },
          { t: "17:21", k: "transit", ttl: "PATH → alojamiento", dur: "~30 min" },
          { t: "17:55", k: "end", ttl: "Llegada a 333 York St", big: true }
        ]
      }
    ],
    omit: [],
    recs: {
      title: "🍽️ Almuerzo al mediodía · Stone Street",
      p: "Hacia las 13:00 el recorrido llega al corazón del Financial District — justo donde está Stone Street (Punto 20), una calle adoquinada peatonal repleta de restaurantes y terrazas. Es la pausa perfecta por sector y por hora.",
      items: [
        ["Ambiente", "adoquines peatonales, terrazas al aire libre"],
        ["Opciones", "pizza, hamburguesas, pubs históricos, marisco"],
        ["Por qué aquí", "estás en pleno FiDi a la hora de comer"]
      ],
      note: "Si prefieres algo ágil, la misma calle tiene opciones para llevar."
    }
  }
};
