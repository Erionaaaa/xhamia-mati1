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

