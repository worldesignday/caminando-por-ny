"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/** Overlay a pantalla completa para el mapa. No interfiere con la lista:
 *  bloquea el scroll del body y restaura foco/posición al cerrar. */
export function MapModal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="map-modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div className="map-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="map-modal-bar">
          <span className="map-modal-title">{title}</span>
          <button
            ref={closeRef}
            type="button"
            className="map-modal-close"
            aria-label="Cerrar mapa"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="map-modal-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
