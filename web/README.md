# Itinerarios NY — sitio estático (Vercel)

Sitio estático, sin build. Todo es HTML/CSS/JS autónomo.

## Estructura
- `index.html` — portada con tarjetas por día.
- `dias/dia-N.html` — stub mínimo que carga los datos + el motor de render.
- `assets/styles.css` — estilos compartidos (tema claro/oscuro).
- `assets/render.js` — motor compartido (header, toggle, timeline, info) desde `window.DIA_DATA`.
- `assets/data/dia-N.js` — datos de cada día.

## Probar en local
```bash
cd web
python3 -m http.server 8000
# abrir http://localhost:8000/  y  http://localhost:8000/dias/dia-1.html
```
Nota: las URL limpias (`/dias/dia-1` sin `.html`) solo funcionan ya desplegado en Vercel.

## Desplegar en Vercel
```bash
npm i -g vercel     # una vez
cd web
vercel              # preview
vercel --prod       # producción → https://<proyecto>.vercel.app
```

## Añadir un día nuevo
1. Crear `assets/data/dia-2.js` con `window.DIA_DATA` (copiar la estructura de `dia-1.js`).
2. Copiar `dias/dia-1.html` → `dias/dia-2.html` y cambiar `<title>`, Open Graph y el `src` del data.
3. Añadir una tarjeta en `index.html`.
4. `vercel --prod`.

## Seguridad
No colocar aquí `ruta1_google_directions.py` (contiene la clave de Google Maps). El script vive
fuera de `web/`, y `.vercelignore` bloquea `*.py` por si acaso.
