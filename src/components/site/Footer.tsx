import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-semibold">Xhamia Mati 1</div>
          <p className="text-sm text-muted-foreground">
            Platformë informative për xhematin: oraret e namazit, video, Akademia,
            aktivitetet dhe donacionet.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold">Seksione</div>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <Link className="hover:text-foreground" href="/orari">
              Orari i namazit
            </Link>
            <Link className="hover:text-foreground" href="/video">
              Video
            </Link>
            <Link className="hover:text-foreground" href="/akademia">
              Akademia
            </Link>
            <Link className="hover:text-foreground" href="/aktivitete">
              Aktivitetet
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold">Kontakt</div>
          <p className="text-sm text-muted-foreground">
            Përditëso detajet në DB (Mosque info) kur të keni numër/email/linke.
          </p>
        </div>

        <div className="md:col-span-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Xhamia Mati 1. Të gjitha të drejtat e
          rezervuara.
        </div>
      </Container>
    </footer>
  );
}

