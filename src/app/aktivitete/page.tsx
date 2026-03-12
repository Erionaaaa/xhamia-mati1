import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { prisma } from "@/lib/prisma";
import { MotionSection, MotionCard } from "@/components/site/motion";

export const metadata = {
  title: "Aktivitete — Xhamia Mati 1",
};

export default async function ActivitiesPage() {
  const items = await prisma.activity.findMany({
    where: { isActive: true },
    orderBy: [{ startsAt: "desc" }, { createdAt: "desc" }],
    take: 50,
  });

  return (
    <main>
      <MotionSection>
        <Container className="py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Aksione & aktivitete
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Njoftime për aktivitete, aksione humanitare, ligjërata speciale
                dhe evente të xhamisë gjatë vitit.
              </p>

              {items.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-border/70 bg-background p-6 text-sm text-muted-foreground shadow-sm">
                  Ende nuk ka aktivitete të publikuara.
                </div>
              ) : (
                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {items.map((a) => (
                    <MotionCard
                      key={a.id}
                      className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm transition hover:bg-muted"
                    >
                      <Link href={`/aktivitete/${a.slug}`} className="block">
                        <div className="text-sm font-semibold tracking-tight">
                          {a.title}
                        </div>
                        {a.summary ? (
                          <div className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                            {a.summary}
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
                  src="/activities.jpg"
                  alt="Aktivitete në xhami"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-sm font-medium text-zinc-100">
                  Aksione humanitare, takime rinore dhe programe të ndryshme gjatë
                  vitit.
                </div>
              </div>
            </MotionCard>
          </div>
        </Container>
      </MotionSection>
    </main>
  );
}

