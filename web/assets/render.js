/* Motor de render compartido para las páginas de itinerario.
 * Lee window.DIA_DATA y construye la página completa dentro de #app.
 * Añadir un día nuevo = crear su archivo de datos; este motor no cambia. */
(function () {
  "use strict";

  var D = window.DIA_DATA;
  var app = document.getElementById("app");
  if (!D || !app) return;

  // tipos de nodo
  var S = "stop", I = "island", F = "food", T = "transit", FR = "ferryseg", A = "arrive", E = "end";

  function nodeClass(k) {
    if (k === I) return "node island";
    if (k === F) return "node food";
    if (k === T) return "node sm transit";
    if (k === A) return "node sm";
    if (k === E) return "node end";
    if (k === FR) return "node ferry";
    return "node";
  }
  function rowClass(k) {
    if (k === T || k === A || k === E) return "row dash";
    if (k === FR) return "row ferryseg";
    if (k === I) return "row island ferryseg";
    if (k === F) return "row food";
    if (k === S) return "row stop";
    return "row";
  }
  function nodeInner(it) {
    if (it.n) return it.n;
    if (it.k === I) return "⚓";      // ⚓
    if (it.k === FR) return "";
    if (it.k === F) return "•";       // •
    if (it.k === E) return "★";       // ★
    return "";
  }

  var meta = D.meta || {};
  var modes = ["con", "sin"].filter(function (m) { return D[m]; });
  var current = (meta.defaultMode && D[meta.defaultMode]) ? meta.defaultMode : modes[0];

  // ---------- scaffold (header, toggle, contenedores, info, footer) ----------
  function buildScaffold() {
    var nav = meta.homeHref
      ? '<a class="topnav" href="' + meta.homeHref + '">← ' + (meta.homeLabel || "Inicio") + '</a>'
      : "";
    var eyebrow = meta.eyebrow ? '<p class="eyebrow">' + meta.eyebrow + "</p>" : "";
    var h1 = '<h1>' + (meta.titleTop || "") +
      (meta.titleBottom ? '<br><span class="liberty">' + meta.titleBottom + "</span>" : "") + "</h1>";
    var datebar = (meta.datebar && meta.datebar.length)
      ? '<div class="datebar">' + meta.datebar.map(function (x) { return "<span>" + x + "</span>"; }).join("") + "</div>"
      : "";

    var toggle = "";
    if (modes.length > 1) {
      var lbl = meta.toggle || { con: "Con ferry", sin: "Sin ferry" };
      toggle = '<div class="toggle" role="group" aria-label="Elegir versión del día">' +
        modes.map(function (m) {
          return '<button data-mode="' + m + '" aria-pressed="' + (m === current) + '">' +
            (lbl[m] || m) + "</button>";
        }).join("") + "</div>";
    }

    var info = "";
    if (meta.info && meta.info.length) {
      info = '<div class="sectlabel" style="margin-top:30px">' + (meta.infoLabel || "Transporte &amp; consejos") + "</div>" +
        '<div class="info">' + meta.info.map(function (b) {
          return '<div class="box"><h4>' + b.h4 + "</h4>" +
            (b.ps || []).map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>";
        }).join("") + "</div>";
    }

    var footer = meta.footer ? "<footer>" + meta.footer + "</footer>" : "";

    app.innerHTML =
      "<header>" + nav + eyebrow + h1 + datebar + "</header>" +
      toggle +
      '<div class="stats" id="stats"></div>' +
      '<div id="content"></div>' +
      info +
      footer;
  }

  // ---------- render de una versión (stats + timeline) ----------
  function render(mode) {
    var d = D[mode];
    if (!d) return;

    document.getElementById("stats").innerHTML = d.stats.map(function (s) {
      return '<div class="stat"><div class="k">' + s[0] + '</div><div class="v">' +
        s[1] + (s[2] ? '<small>↓ ' + s[2] + "</small>" : "") + "</div></div>";
    }).join("");

    var html = "";
    d.groups.forEach(function (g) {
      html += '<div class="sectlabel">' + g.label + "</div>";
      html += '<ul class="tl">';
      g.items.forEach(function (it) {
        var mapn = it.n ? '<span class="mapn">#' + it.n + "</span>" : "";
        var sub = it.sub ? '<div class="sub">' + it.sub + "</div>" : "";
        var dur = it.dur ? '<div class="dur">' + it.dur + "</div>" : "";
        var lightCls = it.light ? " light" : "";
        html += '<li class="' + rowClass(it.k) + '">' +
          '<div class="time' + (it.big ? " big" : "") + '">' + it.t + "</div>" +
          '<div class="rail"><div class="' + nodeClass(it.k) + '">' + nodeInner(it) + "</div></div>" +
          '<div class="card' + lightCls + '"><div class="ttl">' + it.ttl + mapn + "</div>" + sub + dur + "</div>" +
          "</li>";
      });
      html += "</ul>";

      if (g.food && d.recs) {
        html += '<div class="callout"><h3>' + d.recs.title + "</h3><p>" + d.recs.p + "</p>" +
          "<ul>" + d.recs.items.map(function (r) {
            return "<li><b>" + r[0] + "</b> — <span>" + r[1] + "</span></li>";
          }).join("") + "</ul>" +
          (d.recs.note ? '<p style="margin:11px 0 0">' + d.recs.note + "</p>" : "") + "</div>";
      }
    });

    if (d.omit && d.omit.length) {
      html += '<div class="sectlabel">Puntos del mapa que se omiten</div>' +
        '<p class="note">Sigue el folleto sin parar en estos números:</p>' +
        '<div class="chips">' + d.omit.map(function (n) { return '<span class="chip">' + n + "</span>"; }).join("") + "</div>";
    } else {
      html += '<div class="sectlabel">Recorrido completo</div>' +
        '<p class="note">' + (d.omitEmptyNote || "Esta versión visita todas las paradas del mapa original, en orden.") + "</p>";
    }

    document.getElementById("content").innerHTML = html;
  }

  function setMode(mode) {
    current = mode;
    if (modes.length > 1) {
      app.querySelectorAll(".toggle button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-mode") === mode);
      });
    }
    render(mode);
  }

  buildScaffold();
  if (modes.length > 1) {
    app.querySelectorAll(".toggle button").forEach(function (b) {
      b.addEventListener("click", function () { setMode(b.getAttribute("data-mode")); });
    });
  }
  setMode(current);
})();
