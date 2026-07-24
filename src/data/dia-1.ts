import type { Itinerary } from "@/types/itinerary";

// Generado desde web/assets/data/dia-1.js (portado a tipos). Editar aquí en adelante.
const dia1: Itinerary = {
  "slug": "dia-1",
  "city": "nueva-york",
  "card": {
    "order": 1,
    "title": "Downtown",
    "desc": "Bajo Manhattan · ferry a la Estatua de la Libertad + Ellis Island, o la versión sin ferry con las 32 paradas (terminando en Brooklyn)."
  },
  "meta": {
    "eyebrow": "Nueva York · Ruta andando",
    "titleTop": "Downtown",
    "titleBottom": "Día 1",
    "date": "Martes 6 oct 2026",
    "dateISO": "2026-10-06",
    "lodging": "333 York St, Jersey City",
    "transport": "PATH + Tren 1",
    "info": [
      {
        "heading": "Cómo moverte",
        "paragraphs": [
          "<b>Ida:</b> desde 333 York St caminas a <b>Grove St PATH</b> → tren PATH a <b>World Trade Center</b> → conectas hacia el sur (Battery Park). ~35 min.",
          "<b>Vuelta:</b> desde <b>Brooklyn (DUMBO)</b> tomas el metro (A/C en High St) → Fulton St + <b>PATH</b> a Grove St → alojamiento. ~40 min.",
          "Coste transporte ida y vuelta: <b>~$12</b> por persona."
        ]
      },
      {
        "heading": "Ferry — reserva antes",
        "paragraphs": [
          "<b>Statue City Cruises</b> es el único operador oficial desde Battery Park. Reserva online el <b>primer turno (~09:00)</b> y verifica el horario para octubre. Billete ~<b>$25</b>.",
          "Para subir a la <b>corona o el pedestal</b>: reserva con <b>semanas</b> de antelación (cupos limitados)."
        ]
      },
      {
        "heading": "Buenos a saber",
        "paragraphs": [
          "<b>Federal Hall</b> abre entre semana → el martes es perfecto.",
          "Las colas de <b>seguridad del ferry</b> son lo más impredecible: si te retrasas, recorta 10 min en Seaport.",
          "Los números 1–31 <b>coinciden con el folleto original</b>; la <b>32 (Brooklyn)</b> es un añadido fuera del mapa."
        ]
      }
    ],
    "footer": "Itinerario Downtown Día 1 · Tiempos a pie calculados con Google Directions API<br>Ferry en tiempos estimados de Statue City Cruises"
  },
  "defaultVersion": "con",
  "versions": [
    {
      "id": "con",
      "label": "🗽 Con ferry",
      "stats": [
        {
          "key": "Horario",
          "value": "07:50",
          "sub": "18:50"
        },
        {
          "key": "Duración",
          "value": "~11 h"
        },
        {
          "key": "Paradas",
          "value": "2+12"
        },
        {
          "key": "A pie",
          "value": "~6.5 km"
        }
      ],
      "groups": [
        {
          "label": "Mañana · Ferry a las islas",
          "items": [
            {
              "time": "07:50",
              "kind": "transit",
              "title": "Salir del alojamiento",
              "subtitle": "333 York St → PATH + Tren 1",
              "duration": "36 min"
            },
            {
              "time": "08:30",
              "kind": "arrive",
              "title": "Battery Park / Castle Clinton",
              "subtitle": "Punto de embarque del ferry",
              "light": true
            },
            {
              "time": "08:30",
              "kind": "ferryseg",
              "title": "Seguridad + embarque",
              "subtitle": "Llega temprano: cola variable",
              "duration": "30 min",
              "light": true
            },
            {
              "time": "09:00",
              "kind": "ferryseg",
              "title": "Ferry → Liberty Island",
              "duration": "15 min",
              "light": true
            },
            {
              "time": "09:15",
              "kind": "island",
              "title": "Estatua de la Libertad",
              "subtitle": "Isla, pedestal y museo",
              "duration": "1 h 40 min"
            },
            {
              "time": "10:55",
              "kind": "ferryseg",
              "title": "Ferry → Ellis Island",
              "duration": "10 min",
              "light": true
            },
            {
              "time": "11:05",
              "kind": "island",
              "title": "Ellis Island",
              "subtitle": "Museo Nacional de Inmigración",
              "duration": "1 h 40 min"
            },
            {
              "time": "12:45",
              "kind": "ferryseg",
              "title": "Ferry → Battery Park",
              "duration": "20 min",
              "light": true
            },
            {
              "time": "13:05",
              "kind": "arrive",
              "title": "Regreso a tierra firme",
              "light": true
            }
          ]
        },
        {
          "label": "Comida rápida",
          "food": true,
          "items": [
            {
              "time": "13:12",
              "kind": "food",
              "title": "Almuerzo rápido",
              "subtitle": "Junto a Bowling Green — para llevar",
              "duration": "30 min"
            }
          ]
        },
        {
          "label": "Tarde · Recorrido a pie (orden del mapa)",
          "items": [
            {
              "time": "13:42",
              "kind": "stop",
              "title": "Bowling Green",
              "mapNumber": "13",
              "subtitle": "El parque más antiguo de NY",
              "duration": "8 min"
            },
            {
              "time": "13:53",
              "kind": "stop",
              "title": "Toro de Wall Street",
              "mapNumber": "14",
              "subtitle": "Charging Bull — foto obligada",
              "duration": "12 min"
            },
            {
              "time": "14:12",
              "kind": "stop",
              "title": "Trinity Church",
              "mapNumber": "15",
              "duration": "20 min"
            },
            {
              "time": "14:37",
              "kind": "stop",
              "title": "Bolsa de Nueva York (NYSE)",
              "mapNumber": "16",
              "duration": "10 min"
            },
            {
              "time": "14:50",
              "kind": "stop",
              "title": "Federal Hall",
              "mapNumber": "17",
              "subtitle": "Donde juró George Washington",
              "duration": "15 min"
            },
            {
              "time": "15:08",
              "kind": "stop",
              "title": "La Niña sin Miedo",
              "mapNumber": "18",
              "subtitle": "Fearless Girl",
              "duration": "8 min"
            },
            {
              "time": "15:24",
              "kind": "stop",
              "title": "Stone Street",
              "mapNumber": "20",
              "subtitle": "Calle adoquinada histórica",
              "duration": "10 min"
            },
            {
              "time": "15:37",
              "kind": "stop",
              "title": "Fraunces Tavern",
              "mapNumber": "21",
              "subtitle": "Taberna de 1762",
              "duration": "10 min"
            },
            {
              "time": "16:02",
              "kind": "stop",
              "title": "South Street Seaport",
              "mapNumber": "27-28",
              "subtitle": "Pier 17 · vistas al río",
              "duration": "30 min"
            },
            {
              "time": "16:35",
              "kind": "stop",
              "title": "Memorial Titanic",
              "mapNumber": "30",
              "duration": "5 min"
            },
            {
              "time": "16:52",
              "kind": "stop",
              "title": "Puente de Brooklyn",
              "mapNumber": "31",
              "subtitle": "Entrada peatonal + cruzar",
              "duration": "23 min"
            },
            {
              "time": "17:40",
              "kind": "stop",
              "title": "Brooklyn (DUMBO)",
              "mapNumber": "32",
              "subtitle": "Al cruzar el puente · 11201",
              "duration": "20 min"
            }
          ]
        },
        {
          "label": "Regreso",
          "items": [
            {
              "time": "18:00",
              "kind": "transit",
              "title": "Caminar a High St (A/C)",
              "subtitle": "Metro en Brooklyn Heights / DUMBO",
              "duration": "8 min"
            },
            {
              "time": "18:08",
              "kind": "transit",
              "title": "Metro A/C → Fulton St + PATH → alojamiento",
              "duration": "~40 min"
            },
            {
              "time": "18:50",
              "kind": "end",
              "title": "Llegada a 333 York St",
              "big": true
            }
          ]
        }
      ],
      "omit": [
        "1",
        "2",
        "3",
        "4",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "19",
        "22",
        "23",
        "24",
        "25",
        "26",
        "29"
      ],
      "recs": {
        "title": "🍔 Comida rápida tras el ferry",
        "intro": "Al bajar en Battery Park, para no perder la tarde:",
        "items": [
          {
            "name": "Carritos de Battery Park",
            "detail": "hot dogs, halal, pretzels · lo más rápido (~$8–12)"
          },
          {
            "name": "Pret A Manger",
            "detail": "sándwiches y ensaladas para llevar"
          },
          {
            "name": "Una porción de pizza",
            "detail": "el clásico neoyorquino, cerca de Broadway"
          },
          {
            "name": "Just Salad / Chipotle",
            "detail": "algo más sustancioso pero ágil"
          }
        ],
        "note": "Consejo: pídelo para llevar y come caminando hacia Bowling Green."
      }
    },
    {
      "id": "sin",
      "label": "Sin ferry",
      "stats": [
        {
          "key": "Horario",
          "value": "08:10",
          "sub": "18:45"
        },
        {
          "key": "Duración",
          "value": "~10½ h"
        },
        {
          "key": "Paradas",
          "value": "32"
        },
        {
          "key": "A pie",
          "value": "~10.5 km"
        }
      ],
      "groups": [
        {
          "label": "Mañana · Battery Park",
          "items": [
            {
              "time": "08:10",
              "kind": "transit",
              "title": "Salir del alojamiento",
              "subtitle": "333 York St → PATH + Tren 1",
              "duration": "35 min"
            },
            {
              "time": "08:45",
              "kind": "stop",
              "title": "Staten Island Ferry",
              "mapNumber": "1",
              "subtitle": "Whitehall Terminal — inicio",
              "duration": "5 min"
            },
            {
              "time": "08:52",
              "kind": "stop",
              "title": "St. Elizabeth Ann Seton Shrine",
              "mapNumber": "2",
              "duration": "8 min"
            },
            {
              "time": "09:06",
              "kind": "stop",
              "title": "Carrusel SeaGlass",
              "mapNumber": "3",
              "subtitle": "y Battery Playscape",
              "duration": "8 min"
            },
            {
              "time": "09:16",
              "kind": "stop",
              "title": "East Coast Memorial",
              "mapNumber": "4",
              "duration": "8 min"
            },
            {
              "time": "09:27",
              "kind": "stop",
              "title": "Castle Clinton",
              "mapNumber": "5",
              "subtitle": "Fuerte de 1811",
              "duration": "12 min"
            },
            {
              "time": "09:40",
              "kind": "stop",
              "title": "Estatua de la Libertad",
              "mapNumber": "6",
              "subtitle": "Mirador desde Battery Park",
              "duration": "8 min"
            },
            {
              "time": "09:51",
              "kind": "stop",
              "title": "American Merchant Mariners' Memorial",
              "mapNumber": "7",
              "duration": "5 min"
            },
            {
              "time": "10:00",
              "kind": "stop",
              "title": "The Battery Urban Farm",
              "mapNumber": "8",
              "duration": "8 min"
            },
            {
              "time": "10:15",
              "kind": "stop",
              "title": "Museum of Jewish Heritage",
              "mapNumber": "9",
              "duration": "10 min"
            },
            {
              "time": "10:29",
              "kind": "stop",
              "title": "Oasis Park",
              "mapNumber": "10",
              "subtitle": "Wagner Park",
              "duration": "8 min"
            },
            {
              "time": "10:43",
              "kind": "stop",
              "title": "Skyscraper Museum",
              "mapNumber": "11",
              "duration": "10 min"
            }
          ]
        },
        {
          "label": "Mediodía · Bowling Green y Wall Street",
          "items": [
            {
              "time": "11:03",
              "kind": "stop",
              "title": "Museo de los Indios Americanos",
              "mapNumber": "12",
              "subtitle": "Custom House · gratis",
              "duration": "20 min"
            },
            {
              "time": "11:24",
              "kind": "stop",
              "title": "Bowling Green",
              "mapNumber": "13",
              "duration": "8 min"
            },
            {
              "time": "11:34",
              "kind": "stop",
              "title": "Toro de Wall Street",
              "mapNumber": "14",
              "subtitle": "Charging Bull",
              "duration": "12 min"
            },
            {
              "time": "11:51",
              "kind": "stop",
              "title": "Trinity Church",
              "mapNumber": "15",
              "duration": "20 min"
            },
            {
              "time": "12:16",
              "kind": "stop",
              "title": "Bolsa de Nueva York (NYSE)",
              "mapNumber": "16",
              "duration": "10 min"
            },
            {
              "time": "12:30",
              "kind": "stop",
              "title": "Federal Hall",
              "mapNumber": "17",
              "subtitle": "Donde juró George Washington",
              "duration": "15 min"
            },
            {
              "time": "12:49",
              "kind": "stop",
              "title": "La Niña sin Miedo",
              "mapNumber": "18",
              "subtitle": "Fearless Girl",
              "duration": "8 min"
            },
            {
              "time": "13:02",
              "kind": "stop",
              "title": "Delmonico's",
              "mapNumber": "19",
              "subtitle": "Restaurante histórico (fachada)",
              "duration": "5 min"
            }
          ]
        },
        {
          "label": "Mediodía · Almuerzo",
          "food": true,
          "items": [
            {
              "time": "13:09",
              "kind": "food",
              "title": "Stone Street",
              "mapNumber": "20",
              "subtitle": "Almuerzo en el corazón del Financial District",
              "duration": "1 h"
            }
          ]
        },
        {
          "label": "Tarde · Waterfront y Seaport",
          "items": [
            {
              "time": "14:11",
              "kind": "stop",
              "title": "Fraunces Tavern",
              "mapNumber": "21",
              "subtitle": "Taberna de 1762 + museo",
              "duration": "15 min"
            },
            {
              "time": "14:32",
              "kind": "stop",
              "title": "Battery Maritime Building",
              "mapNumber": "22",
              "duration": "8 min"
            },
            {
              "time": "14:43",
              "kind": "stop",
              "title": "Helipuerto",
              "mapNumber": "23",
              "subtitle": "Downtown Manhattan Heliport",
              "duration": "5 min"
            },
            {
              "time": "14:53",
              "kind": "stop",
              "title": "Elevated Acre",
              "mapNumber": "24",
              "subtitle": "Parque escondido con vistas",
              "duration": "10 min"
            },
            {
              "time": "15:05",
              "kind": "stop",
              "title": "Picnic con vistas",
              "mapNumber": "25",
              "subtitle": "East River Esplanade",
              "duration": "8 min"
            },
            {
              "time": "15:21",
              "kind": "stop",
              "title": "Pier 15",
              "mapNumber": "26",
              "duration": "10 min"
            },
            {
              "time": "15:33",
              "kind": "stop",
              "title": "South Street Seaport",
              "mapNumber": "27",
              "subtitle": "Pier 16 y 17",
              "duration": "30 min"
            },
            {
              "time": "16:05",
              "kind": "stop",
              "title": "Seaport District",
              "mapNumber": "28",
              "duration": "12 min"
            },
            {
              "time": "16:18",
              "kind": "stop",
              "title": "Cannon's Walk",
              "mapNumber": "29",
              "duration": "6 min"
            },
            {
              "time": "16:25",
              "kind": "stop",
              "title": "Memorial Titanic",
              "mapNumber": "30",
              "duration": "5 min"
            },
            {
              "time": "16:42",
              "kind": "stop",
              "title": "Puente de Brooklyn",
              "mapNumber": "31",
              "subtitle": "Entrada + cruzar el puente",
              "duration": "30 min"
            },
            {
              "time": "17:37",
              "kind": "stop",
              "title": "Brooklyn (DUMBO)",
              "mapNumber": "32",
              "subtitle": "Al cruzar el puente · 11201",
              "duration": "20 min"
            }
          ]
        },
        {
          "label": "Regreso",
          "items": [
            {
              "time": "17:57",
              "kind": "transit",
              "title": "Caminar a High St (A/C)",
              "subtitle": "Metro en Brooklyn Heights / DUMBO",
              "duration": "8 min"
            },
            {
              "time": "18:05",
              "kind": "transit",
              "title": "Metro A/C → Fulton St + PATH → alojamiento",
              "duration": "~40 min"
            },
            {
              "time": "18:45",
              "kind": "end",
              "title": "Llegada a 333 York St",
              "big": true
            }
          ]
        }
      ],
      "omit": [],
      "omitEmptyNote": "Esta versión visita las <b>31 paradas del mapa</b> más una parada final en <b>Brooklyn</b> (32 en total).",
      "recs": {
        "title": "🍽️ Almuerzo al mediodía · Stone Street",
        "intro": "Hacia las 13:00 el recorrido llega al corazón del Financial District — justo donde está Stone Street (Punto 20), una calle adoquinada peatonal repleta de restaurantes y terrazas. Es la pausa perfecta por sector y por hora.",
        "items": [
          {
            "name": "Ambiente",
            "detail": "adoquines peatonales, terrazas al aire libre"
          },
          {
            "name": "Opciones",
            "detail": "pizza, hamburguesas, pubs históricos, marisco"
          },
          {
            "name": "Por qué aquí",
            "detail": "estás en pleno FiDi a la hora de comer"
          }
        ],
        "note": "Si prefieres algo ágil, la misma calle tiene opciones para llevar."
      }
    }
  ]
};

export default dia1;
