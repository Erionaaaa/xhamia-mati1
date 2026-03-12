import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const nav = [
  { href: "/", label: "Ballina" },
  { href: "/xhamia", label: "Xhamia" },
  { href: "/orari", label: "Orari i namazit" },
  { href: "/video", label: "Video" },
  { href: "/akademia", label: "Akademia" },
  { href: "/aktivitete", label: "Aktivitete" },
  { href: "/donacione", label: "Donacione" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-border/70 bg-background">
            <Image
              src="/logo.png"
              alt="Xhamia Mati 1"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Xhamia Mati 1
            </div>
            <div className="text-xs text-muted-foreground">Prishtinë</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/donacione"
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition hover:opacity-90"
        >
          Dhuro
        </Link>
      </Container>
    </header>
  );
}

