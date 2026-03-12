import Image from "next/image";
import { Container } from "@/components/site/Container";
import { prisma } from "@/lib/prisma";
import { MotionSection, MotionCard } from "@/components/site/motion";

export const metadata = {
  title: "Xhamia — Xhamia Mati 1",
};

export default async function MosquePage() {
  const info = await prisma.mosqueInfo.findFirst();

  return (
    <main>
      <MotionSection>
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Xhamia</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Informacion bazë për xhaminë, qëllimin, historinë dhe rolin e saj
                në lagje.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <MotionCard className="lg:col-span-2 rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Përshkrimi</div>
                  <div className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
                    {info?.description ??
                      "Shto përshkrimin në DB (MosqueInfo). Mund të përfshish historinë, ndërtimin, imamët dhe shërbimet që ofrohen."}
                  </div>
                </MotionCard>

                <MotionCard className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="text-sm font-semibold">Detaje</div>
                  <dl className="mt-3 grid gap-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Emri</dt>
                      <dd className="font-medium">{info?.name ?? "Xhamia Mati 1"}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Qyteti</dt>
                      <dd className="font-medium">{info?.city ?? "Prishtinë"}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Adresa</dt>
                      <dd className="font-medium">
                        {info?.address ?? "Shto adresën në DB."}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Kontakt</dt>
                      <dd className="font-medium">
                        {info?.phone ?? "—"} {info?.email ? ` • ${info.email}` : ""}
                      </dd>
                    </div>
                  </dl>
                </MotionCard>
              </div>
            </div>

            <MotionCard className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm">
              <div className="relative h-60 w-full">
                <Image
                  src="/xhamia.jpg"
                  alt={info?.name ?? "Xhamia Mati 1"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-zinc-100">
                  Pamje nga xhamia dhe rrethina. Këtu mund të përdorësh foto të
                  ndryshme të objektit.
                </div>
              </div>
            </MotionCard>
          </div>

          <div className="mt-10">
            <div className="text-sm font-semibold">Shërbimet kryesore</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Namazet ditore</div>
                <div className="mt-1 text-muted-foreground">
                  Falje e përditshme e namazeve farz dhe sunet, me orar të
                  përditësuar.
                </div>
              </MotionCard>
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Akademia</div>
                <div className="mt-1 text-muted-foreground">
                  Kurse për fëmijë, rinorë dhe të rritur në lexim të Kur’anit dhe
                  bazat e fesë.
                </div>
              </MotionCard>
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Rinia</div>
                <div className="mt-1 text-muted-foreground">
                  Mbrëmje rinore, takime dhe programe edukative e shoqërore.
                </div>
              </MotionCard>
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Aksione humanitare</div>
                <div className="mt-1 text-muted-foreground">
                  Mbështetje për familje në nevojë, shpërndarje ushqimore dhe
                  aktivitete tjera.
                </div>
              </MotionCard>
            </div>
          </div>
        </Container>
      </MotionSection>
    </main>
  );
}

