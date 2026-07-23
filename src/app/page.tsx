import { itineraries } from "@/data";
import { DayCard } from "@/components/home/DayCard";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <ThemeToggle />
        <p className="eyebrow">Nueva York · Octubre 2026</p>
        <h1>
          Mis rutas
          <br />
          <span className="liberty">a pie</span>
        </h1>
        <div className="datebar">
          <span>
            Alojamiento: <strong>333 York St</strong>, Jersey City
          </span>
          <span>PATH + metro</span>
        </div>
      </header>

      <p className="lede">
        Itinerarios día a día por Nueva York. Cada ruta incluye horario
        sugerido, el orden de paradas del folleto original y consejos de
        transporte.
      </p>

      <div className="sectlabel">Días</div>
      <div className="days">
        {itineraries.map((it) => (
          <DayCard key={it.slug} itinerary={it} />
        ))}
      </div>

      <footer>
        Itinerarios de viaje · Nueva York 2026
        <br />
        Tiempos a pie calculados con Google Directions API
      </footer>
    </div>
  );
}
