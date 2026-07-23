import type { Itinerary } from "@/types/itinerary";

// Generado desde web/assets/data/dia-2.js (portado a tipos). Editar aquí en adelante.
const dia2: Itinerary = {
  "slug": "dia-2",
  "city": "nueva-york",
  "card": {
    "order": 2,
    "title": "WTC & Civic Center",
    "desc": "Oculus, Memorial y Museo 9/11, Brookfield y City Hall (puntos 32–49). Versión con o sin Museo 9/11."
  },
  "meta": {
    "eyebrow": "Nueva York · Ruta andando",
    "titleTop": "Downtown",
    "titleBottom": "Día 2",
    "date": "Miércoles 7 oct 2026",
    "dateISO": "2026-10-07",
    "lodging": "333 York St, Jersey City",
    "transport": "PATH → WTC",
    "info": [
      {
        "heading": "Cómo moverte",
        "paragraphs": [
          "<b>Ida:</b> desde 333 York St caminas a <b>Grove St PATH</b> → PATH directo a <b>World Trade Center</b>: sales en el <b>Oculus</b>, el inicio del recorrido. ~20 min.",
          "<b>Vuelta:</b> desde Foley Square caminas al <b>WTC PATH</b> (~12 min) → PATH a Grove St → alojamiento.",
          "Coste PATH ida y vuelta: <b>~$6</b> por persona."
        ]
      },
      {
        "heading": "Museo 9/11 — entrada con hora",
        "paragraphs": [
          "Reserva online con antelación y elige una franja de <b>~13:00</b> (encaja justo tras el almuerzo). La visita dura ~<b>2,5 h</b>. Entrada ~<b>$36</b>.",
          "El <b>Memorial</b> exterior (las dos piscinas) es <b>gratis</b> y no necesita entrada."
        ]
      },
      {
        "heading": "Buenos a saber",
        "paragraphs": [
          "<b>One World Observatory</b> (mirador en la cima de One WTC): opcional, entrada aparte (~$44, ~1 h). Si lo haces, elige la versión sin museo o alarga el día.",
          "<b>St. Paul's Chapel</b> es gratis; <b>Century 21</b> reabrió en 2023.",
          "Los números coinciden con el <b>folleto original</b> (puntos 32–49)."
        ]
      }
    ],
    "footer": "Itinerario Downtown Día 2 · Tiempos a pie estimados (Bajo Manhattan)<br>Museo 9/11 con entrada por franja horaria"
  },
  "defaultVersion": "con",
  "versions": [
    {
      "id": "con",
      "label": "🏛️ Con Museo 9/11",
      "stats": [
        {
          "key": "Horario",
          "value": "08:40",
          "sub": "17:55"
        },
        {
          "key": "Duración",
          "value": "~9 h"
        },
        {
          "key": "Paradas",
          "value": "18"
        },
        {
          "key": "A pie",
          "value": "~3.5 km"
        }
      ],
      "groups": [
        {
          "label": "Mañana · Clúster WTC",
          "items": [
            {
              "time": "08:40",
              "kind": "transit",
              "title": "Salir del alojamiento",
              "subtitle": "333 York St → PATH → WTC (Oculus)",
              "duration": "20 min"
            },
            {
              "time": "09:00",
              "kind": "stop",
              "title": "Fulton Center",
              "mapNumber": "32",
              "subtitle": "Hub de transporte con cúpula",
              "duration": "10 min"
            },
            {
              "time": "09:12",
              "kind": "stop",
              "title": "St. Paul's Chapel",
              "mapNumber": "33",
              "subtitle": "Iglesia de 1766 · refugio del 9/11",
              "duration": "15 min"
            },
            {
              "time": "09:30",
              "kind": "stop",
              "title": "The Oculus",
              "mapNumber": "34",
              "subtitle": "Estación WTC de Calatrava",
              "duration": "15 min"
            },
            {
              "time": "09:47",
              "kind": "stop",
              "title": "Century 21",
              "mapNumber": "35",
              "subtitle": "Grandes almacenes (reabrió 2023)",
              "duration": "20 min"
            },
            {
              "time": "10:10",
              "kind": "stop",
              "title": "Eataly",
              "mapNumber": "36",
              "subtitle": "Mercado italiano — vistazo rápido",
              "duration": "10 min"
            },
            {
              "time": "10:22",
              "kind": "stop",
              "title": "FDNY Ten House",
              "mapNumber": "37",
              "subtitle": "Parque de bomberos · mural 9/11",
              "duration": "8 min"
            },
            {
              "time": "10:33",
              "kind": "stop",
              "title": "Liberty Park",
              "mapNumber": "38",
              "subtitle": "Parque elevado sobre Liberty St",
              "duration": "10 min"
            },
            {
              "time": "10:46",
              "kind": "stop",
              "title": "Memorial 9/11",
              "mapNumber": "39",
              "subtitle": "Las dos piscinas (exterior)",
              "duration": "25 min"
            },
            {
              "time": "11:14",
              "kind": "stop",
              "title": "One World Trade Center",
              "mapNumber": "40",
              "subtitle": "El rascacielos más alto de NY",
              "duration": "15 min"
            }
          ]
        },
        {
          "label": "Mediodía · Almuerzo",
          "food": true,
          "items": [
            {
              "time": "11:33",
              "kind": "food",
              "title": "Brookfield Place",
              "mapNumber": "41",
              "subtitle": "Almuerzo · food hall con vistas al río",
              "duration": "1 h"
            }
          ]
        },
        {
          "label": "Primera tarde · Battery Park City + Museo",
          "items": [
            {
              "time": "12:36",
              "kind": "stop",
              "title": "Muro de Berlín",
              "mapNumber": "42",
              "subtitle": "Segmentos originales",
              "duration": "5 min"
            },
            {
              "time": "12:44",
              "kind": "stop",
              "title": "Irish Hunger Memorial",
              "mapNumber": "43",
              "subtitle": "Paisaje conmemorativo",
              "duration": "15 min"
            },
            {
              "time": "13:04",
              "kind": "stop",
              "title": "Museo 9/11",
              "mapNumber": "39",
              "subtitle": "El gran museo — ancla del día",
              "duration": "2 h 30 min"
            }
          ]
        },
        {
          "label": "Tarde · Civic Center",
          "items": [
            {
              "time": "15:46",
              "kind": "stop",
              "title": "City Hall Park",
              "mapNumber": "44",
              "duration": "10 min"
            },
            {
              "time": "15:58",
              "kind": "stop",
              "title": "City Hall",
              "mapNumber": "45",
              "subtitle": "Ayuntamiento (exterior)",
              "duration": "10 min"
            },
            {
              "time": "16:12",
              "kind": "stop",
              "title": "Sugar House Prison Window",
              "mapNumber": "46",
              "subtitle": "Reliquia de la Guerra de Independencia",
              "duration": "5 min"
            },
            {
              "time": "16:20",
              "kind": "stop",
              "title": "City Store",
              "mapNumber": "47",
              "subtitle": "Souvenirs oficiales de NYC",
              "duration": "12 min"
            },
            {
              "time": "16:36",
              "kind": "stop",
              "title": "Cementerio Africano",
              "mapNumber": "48",
              "subtitle": "African Burial Ground Nat'l Monument",
              "duration": "20 min"
            },
            {
              "time": "16:59",
              "kind": "stop",
              "title": "Foley Square",
              "mapNumber": "49",
              "subtitle": "Tribunales · fin del recorrido",
              "duration": "10 min"
            }
          ]
        },
        {
          "label": "Regreso",
          "items": [
            {
              "time": "17:09",
              "kind": "transit",
              "title": "Caminar al WTC PATH",
              "duration": "12 min"
            },
            {
              "time": "17:21",
              "kind": "transit",
              "title": "PATH → alojamiento",
              "duration": "~30 min"
            },
            {
              "time": "17:55",
              "kind": "end",
              "title": "Llegada a 333 York St",
              "big": true
            }
          ]
        }
      ],
      "omit": [],
      "omitEmptyNote": "Esta versión <b>entra al Museo 9/11</b> (~2,5 h), el gran ancla del día. Visita las 18 paradas (32–49).",
      "recs": {
        "title": "🍽️ Almuerzo · Brookfield Place",
        "intro": "Al mediodía el recorrido llega a Battery Park City. Brookfield Place (Punto 41) reúne dos food halls con vistas al río Hudson — coherente por sector y por hora.",
        "items": [
          {
            "name": "Hudson Eats",
            "detail": "food hall variado: bowls, burgers, sushi"
          },
          {
            "name": "Le District",
            "detail": "mercado y comida francesa"
          },
          {
            "name": "Ambiente",
            "detail": "atrio acristalado y terraza junto al agua"
          }
        ],
        "note": "Alternativa más rápida: Eataly (Punto 36), antes en el recorrido."
      }
    },
    {
      "id": "sin",
      "label": "Sin museo",
      "stats": [
        {
          "key": "Horario",
          "value": "09:00",
          "sub": "15:45"
        },
        {
          "key": "Duración",
          "value": "~6¾ h"
        },
        {
          "key": "Paradas",
          "value": "18"
        },
        {
          "key": "A pie",
          "value": "~3.5 km"
        }
      ],
      "groups": [
        {
          "label": "Mañana · Clúster WTC",
          "items": [
            {
              "time": "09:00",
              "kind": "transit",
              "title": "Salir del alojamiento",
              "subtitle": "333 York St → PATH → WTC (Oculus)",
              "duration": "20 min"
            },
            {
              "time": "09:20",
              "kind": "stop",
              "title": "Fulton Center",
              "mapNumber": "32",
              "subtitle": "Hub de transporte con cúpula",
              "duration": "10 min"
            },
            {
              "time": "09:32",
              "kind": "stop",
              "title": "St. Paul's Chapel",
              "mapNumber": "33",
              "subtitle": "Iglesia de 1766 · refugio del 9/11",
              "duration": "15 min"
            },
            {
              "time": "09:50",
              "kind": "stop",
              "title": "The Oculus",
              "mapNumber": "34",
              "subtitle": "Estación WTC de Calatrava",
              "duration": "15 min"
            },
            {
              "time": "10:07",
              "kind": "stop",
              "title": "Century 21",
              "mapNumber": "35",
              "subtitle": "Grandes almacenes (reabrió 2023)",
              "duration": "20 min"
            },
            {
              "time": "10:30",
              "kind": "stop",
              "title": "Eataly",
              "mapNumber": "36",
              "subtitle": "Mercado italiano — vistazo rápido",
              "duration": "10 min"
            },
            {
              "time": "10:42",
              "kind": "stop",
              "title": "FDNY Ten House",
              "mapNumber": "37",
              "subtitle": "Parque de bomberos · mural 9/11",
              "duration": "8 min"
            },
            {
              "time": "10:53",
              "kind": "stop",
              "title": "Liberty Park",
              "mapNumber": "38",
              "subtitle": "Parque elevado sobre Liberty St",
              "duration": "10 min"
            },
            {
              "time": "11:06",
              "kind": "stop",
              "title": "Memorial 9/11",
              "mapNumber": "39",
              "subtitle": "Las dos piscinas (solo exterior)",
              "duration": "30 min"
            },
            {
              "time": "11:39",
              "kind": "stop",
              "title": "One World Trade Center",
              "mapNumber": "40",
              "subtitle": "El rascacielos más alto de NY",
              "duration": "15 min"
            }
          ]
        },
        {
          "label": "Mediodía · Almuerzo",
          "food": true,
          "items": [
            {
              "time": "11:58",
              "kind": "food",
              "title": "Brookfield Place",
              "mapNumber": "41",
              "subtitle": "Almuerzo · food hall con vistas al río",
              "duration": "1 h"
            }
          ]
        },
        {
          "label": "Tarde · Battery Park City + Civic Center",
          "items": [
            {
              "time": "13:01",
              "kind": "stop",
              "title": "Muro de Berlín",
              "mapNumber": "42",
              "subtitle": "Segmentos originales",
              "duration": "5 min"
            },
            {
              "time": "13:09",
              "kind": "stop",
              "title": "Irish Hunger Memorial",
              "mapNumber": "43",
              "subtitle": "Paisaje conmemorativo",
              "duration": "15 min"
            },
            {
              "time": "13:38",
              "kind": "stop",
              "title": "City Hall Park",
              "mapNumber": "44",
              "duration": "10 min"
            },
            {
              "time": "13:50",
              "kind": "stop",
              "title": "City Hall",
              "mapNumber": "45",
              "subtitle": "Ayuntamiento (exterior)",
              "duration": "10 min"
            },
            {
              "time": "14:04",
              "kind": "stop",
              "title": "Sugar House Prison Window",
              "mapNumber": "46",
              "subtitle": "Reliquia de la Guerra de Independencia",
              "duration": "5 min"
            },
            {
              "time": "14:12",
              "kind": "stop",
              "title": "City Store",
              "mapNumber": "47",
              "subtitle": "Souvenirs oficiales de NYC",
              "duration": "12 min"
            },
            {
              "time": "14:28",
              "kind": "stop",
              "title": "Cementerio Africano",
              "mapNumber": "48",
              "subtitle": "African Burial Ground Nat'l Monument",
              "duration": "20 min"
            },
            {
              "time": "14:51",
              "kind": "stop",
              "title": "Foley Square",
              "mapNumber": "49",
              "subtitle": "Tribunales · fin del recorrido",
              "duration": "10 min"
            }
          ]
        },
        {
          "label": "Regreso",
          "items": [
            {
              "time": "15:01",
              "kind": "transit",
              "title": "Caminar al WTC PATH",
              "duration": "12 min"
            },
            {
              "time": "15:13",
              "kind": "transit",
              "title": "PATH → alojamiento",
              "duration": "~30 min"
            },
            {
              "time": "15:45",
              "kind": "end",
              "title": "Llegada a 333 York St",
              "big": true
            }
          ]
        }
      ],
      "omit": [],
      "omitEmptyNote": "Esta versión ve el <b>Memorial 9/11</b> por fuera (sin museo). Visita las 18 paradas (32–49) y deja la tarde libre.",
      "recs": {
        "title": "🍽️ Almuerzo · Brookfield Place",
        "intro": "Al mediodía el recorrido llega a Battery Park City. Brookfield Place (Punto 41) reúne dos food halls con vistas al río Hudson — coherente por sector y por hora.",
        "items": [
          {
            "name": "Hudson Eats",
            "detail": "food hall variado: bowls, burgers, sushi"
          },
          {
            "name": "Le District",
            "detail": "mercado y comida francesa"
          },
          {
            "name": "Ambiente",
            "detail": "atrio acristalado y terraza junto al agua"
          }
        ],
        "note": "Alternativa más rápida: Eataly (Punto 36), antes en el recorrido."
      }
    }
  ]
};

export default dia2;
