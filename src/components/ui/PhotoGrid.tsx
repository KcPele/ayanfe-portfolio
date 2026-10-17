"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/types";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  photos: Photo[];
  className?: string;
};

/** Masonry photo grid with an accessible, swipeable lightbox. */
export function PhotoGrid({ photos, className }: PhotoGridProps) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? photos[index] : null;

  return (
    <>
      <ul className={cn("columns-2 gap-3 sm:gap-4 lg:columns-3", className)}>
        {photos.map((photo, i) => (
          <li key={photo.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
              aria-label={`View photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 bg-background/90 p-3 text-left text-xs leading-snug text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {photo.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-background p-0 text-foreground backdrop:bg-background"
        aria-label="Photo viewer"
      >
        {current && (
          <div
            className="flex h-full flex-col"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-xs text-foreground-muted">
                {index! + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={close}
                className="grid size-11 place-items-center rounded-full border border-border-strong hover:border-primary hover:text-primary"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain px-2 sm:px-20"
              />
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border-strong bg-background hover:text-primary sm:grid"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border-strong bg-background hover:text-primary sm:grid"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            <p className="p-5 text-center text-sm text-foreground-muted">{current.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
