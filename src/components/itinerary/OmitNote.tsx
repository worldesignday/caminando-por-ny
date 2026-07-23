export function OmitNote({
  omit,
  emptyNote,
}: {
  omit: string[];
  emptyNote?: string;
}) {
  if (omit.length > 0) {
    return (
      <>
        <div className="sectlabel">Puntos del mapa que se omiten</div>
        <p className="note">Sigue el folleto sin parar en estos números:</p>
        <div className="chips">
          {omit.map((n, i) => (
            <span className="chip" key={i}>
              {n}
            </span>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="sectlabel">Recorrido completo</div>
      <p
        className="note"
        dangerouslySetInnerHTML={{
          __html:
            emptyNote ??
            "Esta versión visita todas las paradas del mapa original, en orden.",
        }}
      />
    </>
  );
}
