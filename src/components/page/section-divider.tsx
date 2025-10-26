import { cn } from "@/lib/utils";

type DividerVariant = "default" | "minimal" | "dottedGrey" | "solidDot";

export function SectionDivider({
  className,
  minimal = false,
  variant,
}: {
  className?: string;
  minimal?: boolean;
  variant?: DividerVariant;
}) {
  const mode: DividerVariant = variant ?? (minimal ? "minimal" : "default");

  if (mode === "solidDot") {
    return (
      <div className={cn("relative mx-auto my-16 w-full max-w-5xl", className)} aria-hidden>
        <div className="h-1.5 rounded-full bg-cyan-400/90" />
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "h-5 w-5 rounded-full bg-cyan-400",
            "shadow-[0_0_16px_2px_rgba(34,211,238,0.45)]"
          )}
        />
      </div>
    );
  }

  if (mode === "dottedGrey") {
    return (
      <div className={cn("relative mx-auto my-16 w-full max-w-5xl", className)} aria-hidden>
        <div className="h-8 rounded-md bg-muted/40" />
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-cyan-400/80" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "relative mx-auto my-16 h-px w-full max-w-5xl",
        "bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent",
        className
      )}
    >
      {mode === "default" && (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 h-px",
              "bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-md"
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 -translate-x-1/2",
              "-top-1.5 h-3 w-3 rounded-full bg-cyan-400/70",
              "shadow-[0_0_16px_6px_rgba(34,211,238,0.35)]"
            )}
          />
        </>
      )}
    </div>
  );
}
