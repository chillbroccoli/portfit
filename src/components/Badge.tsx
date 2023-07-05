import { cn } from "@/lib/cn";

export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 text-xl font-medium rounded-md bg-lime-500/10 text-lime-400 ring-1 ring-inset ring-lime-500/20",
        className
      )}
    >
      {children}
    </span>
  );
}
