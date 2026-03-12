import Image from "next/image";
import { Container } from "@/components/site/Container";
import { prisma } from "@/lib/prisma";
import { MotionSection, MotionCard } from "@/components/site/motion";

export const metadata = {
  title: "Kontakti — Xhamia Mati 1",
};

export default async function ContactPage() {
  const info = await prisma.mosqueInfo.findFirst();

  return (
    <main>
      <MotionSection>
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Kontakti</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Nëse keni pyetje, sugjerime, ose doni të kontribuoni në aktivitetet
                e xhamisë, na kontaktoni.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Adresa</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {info?.address ?? "Prishtinë, Kosovë"}
                  </div>
                </MotionCard>
                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Telefoni</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {info?.phone ?? "+383 44 000 000"}
                  </div>
                </MotionCard>
                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Email</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {info?.email ?? "info@xhamia-mati1.com"}
                  </div>
                </MotionCard>
                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Rrjetet sociale</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Shto linket në DB (MosqueInfo) kur t’i keni gati.
                  </div>
                </MotionCard>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Na dërgo mesazh</div>
                  <form
                    className="mt-4 grid gap-3"
                    method="POST"
                    action="/api/contact"
                  >
                    <input
                      className="h-11 rounded-2xl border border-border/70 bg-background px-4 text-sm outline-none ring-0 transition focus:border-foreground/40"
                      placeholder="Emri dhe mbiemri"
                      name="name"
                    />
                    <input
                      className="h-11 rounded-2xl border border-border/70 bg-background px-4 text-sm outline-none ring-0 transition focus:border-foreground/40"
                      placeholder="Email"
                      name="email"
                      type="email"
                    />
                    <textarea
                      className="min-h-[110px] rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm outline-none ring-0 transition focus:border-foreground/40"
                      placeholder="Mesazhi"
                      name="message"
                    />
                    <input type="hidden" name="context" value="kontakt" />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90"
                    >
                      Dërgo
                    </button>
                    <div className="text-xs text-muted-foreground">
                      Mesazhi dërgohet në emailin e konfigurimit (shiko
                      `.env` → `CONTACT_EMAIL`). Nëse SMTP nuk është vendosur
                      ende, mesazhi vetëm regjistrohet në server (demo).
                    </div>
                  </form>
                </MotionCard>

                <MotionCard className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm">
                  <div className="p-6">
                    <div className="text-sm font-semibold">Harta</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Lokacioni i Xhamisë Hoxhë Shuajb Arnauti – Mati 1 në Google
                      Maps.
                    </div>
                  </div>
                  <div className="aspect-[16/10] w-full border-t border-border/70 bg-muted">
                    <iframe
                      title="Harta"
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.3198032154885!2d21.1876407!3d42.656702699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ed4bdf761f7%3A0x8ab5c87464643f47!2sXhamia%20Hoxh%C3%AB%20Shuajb%20Arnauti%20-%20Mati%201!5e0!3m2!1sen!2s!4v1710172800000"
                    />
                  </div>
                </MotionCard>
              </div>
            </div>

            <MotionCard className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm">
              <div className="relative h-72 w-full">
                <Image
                  src="/contact.jpg"
                  alt="Kontakti"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-zinc-100">
                  Kontaktoni për bashkëpunim, ide dhe mbështetje.
                </div>
              </div>
            </MotionCard>
          </div>
        </Container>
      </MotionSection>
    </main>
  );
}

