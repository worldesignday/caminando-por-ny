/* Datos del itinerario — Downtown · Día 2 (puntos 32–49 del folleto).
 * Tipos de nodo (k): stop | food | transit | arrive | end */
window.DIA_DATA = {
  meta: {
    eyebrow: "Nueva York · Ruta andando",
    titleTop: "Downtown",
    titleBottom: "Día 2",
    homeHref: "/",
    homeLabel: "Todos los días",
    datebar: [
      "<b>Miércoles 7 oct 2026</b>",
      "Alojamiento: <b>333 York St</b>, Jersey City",
      "PATH → WTC"
    ],
    toggle: { con: "🏛️ Con Museo 9/11", sin: "Sin museo" },
    defaultMode: "con",
    infoLabel: "Transporte &amp; consejos",
    info: [
      {
        h4: "Cómo moverte",
        ps: [
          "<b>Ida:</b> desde 333 York St caminas a <b>Grove St PATH</b> → PATH directo a <b>World Trade Center</b>: sales en el <b>Oculus</b>, el inicio del recorrido. ~20 min.",
          "<b>Vuelta:</b> desde Foley Square caminas al <b>WTC PATH</b> (~12 min) → PATH a Grove St → alojamiento.",
          "Coste PATH ida y vuelta: <b>~$6</b> por persona."
        ]
      },
      {
        h4: "Museo 9/11 — entrada con hora",
        ps: [
          "Reserva online con antelación y elige una franja de <b>~13:00</b> (encaja justo tras el almuerzo). La visita dura ~<b>2,5 h</b>. Entrada ~<b>$36</b>.",
          "El <b>Memorial</b> exterior (las dos piscinas) es <b>gratis</b> y no necesita entrada."
        ]
      },
      {
        h4: "Buenos a saber",
        ps: [
          "<b>One World Observatory</b> (mirador en la cima de One WTC): opcional, entrada aparte (~$44, ~1 h). Si lo haces, elige la versión sin museo o alarga el día.",
          "<b>St. Paul's Chapel</b> es gratis; <b>Century 21</b> reabrió en 2023.",
          "Los números coinciden con el <b>folleto original</b> (puntos 32–49)."
        ]
      }
    ],
    footer: "Itinerario Downtown Día 2 · Tiempos a pie estimados (Bajo Manhattan)<br>Museo 9/11 con entrada por franja horaria"
  },

  con: {
    stats: [["Horario", "08:40", "17:55"], ["Duración", "~9 h", ""], ["Paradas", "18", ""], ["A pie", "~3.5 km", ""]],
    omitEmptyNote: "Esta versión <b>entra al Museo 9/11</b> (~2,5 h), el gran ancla del día. Visita las 18 paradas (32–49).",
    groups: [
      {
        label: "Mañana · Clúster WTC", items: [
          { t: "08:40", k: "transit", ttl: "Salir del alojamiento", sub: "333 York St → PATH → WTC (Oculus)", dur: "20 min" },
          { t: "09:00", k: "stop", n: "32", ttl: "Fulton Center", sub: "Hub de transporte con cúpula", dur: "10 min" },
          { t: "09:12", k: "stop", n: "33", ttl: "St. Paul's Chapel", sub: "Iglesia de 1766 · refugio del 9/11", dur: "15 min" },
          { t: "09:30", k: "stop", n: "34", ttl: "The Oculus", sub: "Estación WTC de Calatrava", dur: "15 min" },
          { t: "09:47", k: "stop", n: "35", ttl: "Century 21", sub: "Grandes almacenes (reabrió 2023)", dur: "20 min" },
          { t: "10:10", k: "stop", n: "36", ttl: "Eataly", sub: "Mercado italiano — vistazo rápido", dur: "10 min" },
          { t: "10:22", k: "stop", n: "37", ttl: "FDNY Ten House", sub: "Parque de bomberos · mural 9/11", dur: "8 min" },
          { t: "10:33", k: "stop", n: "38", ttl: "Liberty Park", sub: "Parque elevado sobre Liberty St", dur: "10 min" },
          { t: "10:46", k: "stop", n: "39", ttl: "Memorial 9/11", sub: "Las dos piscinas (exterior)", dur: "25 min" },
          { t: "11:14", k: "stop", n: "40", ttl: "One World Trade Center", sub: "El rascacielos más alto de NY", dur: "15 min" }
        ]
      },
      {
        label: "Mediodía · Almuerzo", food: true, items: [
          { t: "11:33", k: "food", n: "41", ttl: "Brookfield Place", sub: "Almuerzo · food hall con vistas al río", dur: "1 h" }
        ]
      },
      {
        label: "Primera tarde · Battery Park City + Museo", items: [
          { t: "12:36", k: "stop", n: "42", ttl: "Muro de Berlín", sub: "Segmentos originales", dur: "5 min" },
          { t: "12:44", k: "stop", n: "43", ttl: "Irish Hunger Memorial", sub: "Paisaje conmemorativo", dur: "15 min" },
          { t: "13:04", k: "stop", n: "39", ttl: "Museo 9/11", sub: "El gran museo — ancla del día", dur: "2 h 30 min" }
        ]
      },
      {
        label: "Tarde · Civic Center", items: [
          { t: "15:46", k: "stop", n: "44", ttl: "City Hall Park", dur: "10 min" },
          { t: "15:58", k: "stop", n: "45", ttl: "City Hall", sub: "Ayuntamiento (exterior)", dur: "10 min" },
          { t: "16:12", k: "stop", n: "46", ttl: "Sugar House Prison Window", sub: "Reliquia de la Guerra de Independencia", dur: "5 min" },
          { t: "16:20", k: "stop", n: "47", ttl: "City Store", sub: "Souvenirs oficiales de NYC", dur: "12 min" },
          { t: "16:36", k: "stop", n: "48", ttl: "Cementerio Africano", sub: "African Burial Ground Nat'l Monument", dur: "20 min" },
          { t: "16:59", k: "stop", n: "49", ttl: "Foley Square", sub: "Tribunales · fin del recorrido", dur: "10 min" }
        ]
      },
      {
        label: "Regreso", items: [
          { t: "17:09", k: "transit", ttl: "Caminar al WTC PATH", dur: "12 min" },
          { t: "17:21", k: "transit", ttl: "PATH → alojamiento", dur: "~30 min" },
          { t: "17:55", k: "end", ttl: "Llegada a 333 York St", big: true }
        ]
      }
    ],
    omit: [],
    recs: {
      title: "🍽️ Almuerzo · Brookfield Place",
      p: "Al mediodía el recorrido llega a Battery Park City. Brookfield Place (Punto 41) reúne dos food halls con vistas al río Hudson — coherente por sector y por hora.",
      items: [
        ["Hudson Eats", "food hall variado: bowls, burgers, sushi"],
        ["Le District", "mercado y comida francesa"],
        ["Ambiente", "atrio acristalado y terraza junto al agua"]
      ],
      note: "Alternativa más rápida: Eataly (Punto 36), antes en el recorrido."
    }
  },

  sin: {
    stats: [["Horario", "09:00", "15:45"], ["Duración", "~6¾ h", ""], ["Paradas", "18", ""], ["A pie", "~3.5 km", ""]],
    omitEmptyNote: "Esta versión ve el <b>Memorial 9/11</b> por fuera (sin museo). Visita las 18 paradas (32–49) y deja la tarde libre.",
    groups: [
      {
        label: "Mañana · Clúster WTC", items: [
          { t: "09:00", k: "transit", ttl: "Salir del alojamiento", sub: "333 York St → PATH → WTC (Oculus)", dur: "20 min" },
          { t: "09:20", k: "stop", n: "32", ttl: "Fulton Center", sub: "Hub de transporte con cúpula", dur: "10 min" },
          { t: "09:32", k: "stop", n: "33", ttl: "St. Paul's Chapel", sub: "Iglesia de 1766 · refugio del 9/11", dur: "15 min" },
          { t: "09:50", k: "stop", n: "34", ttl: "The Oculus", sub: "Estación WTC de Calatrava", dur: "15 min" },
          { t: "10:07", k: "stop", n: "35", ttl: "Century 21", sub: "Grandes almacenes (reabrió 2023)", dur: "20 min" },
          { t: "10:30", k: "stop", n: "36", ttl: "Eataly", sub: "Mercado italiano — vistazo rápido", dur: "10 min" },
          { t: "10:42", k: "stop", n: "37", ttl: "FDNY Ten House", sub: "Parque de bomberos · mural 9/11", dur: "8 min" },
          { t: "10:53", k: "stop", n: "38", ttl: "Liberty Park", sub: "Parque elevado sobre Liberty St", dur: "10 min" },
          { t: "11:06", k: "stop", n: "39", ttl: "Memorial 9/11", sub: "Las dos piscinas (solo exterior)", dur: "30 min" },
          { t: "11:39", k: "stop", n: "40", ttl: "One World Trade Center", sub: "El rascacielos más alto de NY", dur: "15 min" }
        ]
      },
      {
        label: "Mediodía · Almuerzo", food: true, items: [
          { t: "11:58", k: "food", n: "41", ttl: "Brookfield Place", sub: "Almuerzo · food hall con vistas al río", dur: "1 h" }
        ]
      },
      {
        label: "Tarde · Battery Park City + Civic Center", items: [
          { t: "13:01", k: "stop", n: "42", ttl: "Muro de Berlín", sub: "Segmentos originales", dur: "5 min" },
          { t: "13:09", k: "stop", n: "43", ttl: "Irish Hunger Memorial", sub: "Paisaje conmemorativo", dur: "15 min" },
          { t: "13:38", k: "stop", n: "44", ttl: "City Hall Park", dur: "10 min" },
          { t: "13:50", k: "stop", n: "45", ttl: "City Hall", sub: "Ayuntamiento (exterior)", dur: "10 min" },
          { t: "14:04", k: "stop", n: "46", ttl: "Sugar House Prison Window", sub: "Reliquia de la Guerra de Independencia", dur: "5 min" },
          { t: "14:12", k: "stop", n: "47", ttl: "City Store", sub: "Souvenirs oficiales de NYC", dur: "12 min" },
          { t: "14:28", k: "stop", n: "48", ttl: "Cementerio Africano", sub: "African Burial Ground Nat'l Monument", dur: "20 min" },
          { t: "14:51", k: "stop", n: "49", ttl: "Foley Square", sub: "Tribunales · fin del recorrido", dur: "10 min" }
        ]
      },
      {
        label: "Regreso", items: [
          { t: "15:01", k: "transit", ttl: "Caminar al WTC PATH", dur: "12 min" },
          { t: "15:13", k: "transit", ttl: "PATH → alojamiento", dur: "~30 min" },
          { t: "15:45", k: "end", ttl: "Llegada a 333 York St", big: true }
        ]
      }
    ],
    omit: [],
    recs: {
      title: "🍽️ Almuerzo · Brookfield Place",
      p: "Al mediodía el recorrido llega a Battery Park City. Brookfield Place (Punto 41) reúne dos food halls con vistas al río Hudson — coherente por sector y por hora.",
      items: [
        ["Hudson Eats", "food hall variado: bowls, burgers, sushi"],
        ["Le District", "mercado y comida francesa"],
        ["Ambiente", "atrio acristalado y terraza junto al agua"]
      ],
      note: "Alternativa más rápida: Eataly (Punto 36), antes en el recorrido."
    }
  }
};
