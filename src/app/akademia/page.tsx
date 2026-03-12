import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { prisma } from "@/lib/prisma";
import { MotionSection, MotionCard } from "@/components/site/motion";

export const metadata = {
  title: "Akademia — Xhamia Mati 1",
};

export default async function AcademyPage() {
  const posts = await prisma.academyPost.findMany({
    where: { isActive: true },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: 30,
  });

  return (
    <main>
      <MotionSection>
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Akademia</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Hapësirë për mësime, materiale, njoftime dhe artikuj edukativ për
                xhematin dhe sidomos për të rinjtë.
              </p>

              {posts.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-border/70 bg-background p-6 text-sm text-muted-foreground shadow-sm">
                  Ende nuk ka postime. (Këtu do shtohen gradualisht.)
                </div>
              ) : (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {posts.map((p) => (
                    <MotionCard
                      key={p.id}
                      className="h-full rounded-3xl border border-border/70 bg-background p-6 shadow-sm transition hover:bg-muted"
                    >
                      <Link href={`/akademia/${p.slug}`} className="block h-full">
                        <div className="text-sm font-semibold tracking-tight">
                          {p.title}
                        </div>
                        {p.excerpt ? (
                          <div className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                            {p.excerpt}
                          </div>
                        ) : null}
                      </Link>
                    </MotionCard>
                  ))}
                </div>
              )}
            </div>

            <MotionCard className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm">
              <div className="relative h-60 w-full">
                <Image
                  src="/academy.jpg"
                  alt="Kurse dhe Akademi në xhami"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-zinc-100">
                  Akademia e Xhamisë Mati 1: kurse për fëmijë, rinorë dhe të rritur.
                </div>
              </div>
            </MotionCard>
          </div>

          <div className="mt-10">
            <div className="text-sm font-semibold">Programet e Akademisë</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Fëmijë</div>
                <div className="mt-1 text-muted-foreground">
                  Mësime bazë të akides, ahlakut dhe leximit të Kur’anit për
                  moshat e vogla.
                </div>
              </MotionCard>
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Rini</div>
                <div className="mt-1 text-muted-foreground">
                  Tema bashkëkohore, identiteti islam dhe orientimi i karrierës
                  në dritën e fesë.
                </div>
              </MotionCard>
              <MotionCard className="rounded-3xl border border-border/70 bg-background p-4 text-sm shadow-sm">
                <div className="font-semibold">Të rritur</div>
                <div className="mt-1 text-muted-foreground">
                  Kurse për lexim të Kur’anit, fik’h praktik dhe ligjërata
                  tematike.
                </div>
              </MotionCard>
            </div>
          </div>
        </Container>
      </MotionSection>
    </main>
  );
}

