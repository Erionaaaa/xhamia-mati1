import Link from "next/link";
import { Container } from "./Container";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "info@xhamia.com";
const CONTACT_PHONE = process.env.CONTACT_PHONE ?? "043723623";

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
            Tel: {CONTACT_PHONE} <br />
            Email: {CONTACT_EMAIL}
          </p>
          <Link
            href="/kontakt"
            className="inline-flex h-9 items-center justify-center rounded-full border border-border/70 px-4 text-xs font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Shiko faqen e kontaktit
          </Link>
        </div>

        <div className="md:col-span-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Xhamia Mati 1. Të gjitha të drejtat e
          rezervuara.
        </div>
      </Container>
    </footer>
  );
}

