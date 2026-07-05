import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ArrowLeft, ArrowRight, BookOpen, List, PanelLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    chapters,
    ebook,
    getChapterBySlug,
    getChapterNavigation,
} from "@/lib/ebook-content"

function toAnchorId(title: string) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
}

export function generateStaticParams() {
    return chapters.map((chapter) => ({ slug: chapter.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const chapter = getChapterBySlug(params.slug)

    if (!chapter) {
        return {
            title: ebook.title,
        }
    }

    return {
        title: `${chapter.number}. ${chapter.title} | ${ebook.title}`,
        description: chapter.summary,
    }
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
    const chapter = getChapterBySlug(params.slug)

    if (!chapter) {
        notFound()
    }

    const navigation = getChapterNavigation(params.slug)

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(211,0,45,0.10),_transparent_30%),linear-gradient(to_bottom_right,_rgba(15,23,42,0.03),_transparent_35%),var(--background)] px-4 py-6 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                <aside className="space-y-4 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
                    <Card className="rounded-3xl border-border/70 bg-card/85 shadow-none backdrop-blur">
                        <CardContent className="space-y-5 p-5">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3002D]">
                                    Reading guide
                                </p>
                                <h1 className="text-xl font-semibold leading-tight">{ebook.title}</h1>
                                <p className="text-sm leading-6 text-muted-foreground">{ebook.subtitle}</p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <PanelLeft className="size-4" />
                                    Current chapter
                                </div>
                                <div className="mt-3 space-y-1">
                                    <p className="text-sm text-muted-foreground">Chapter {chapter.number}</p>
                                    <p className="text-lg font-semibold leading-tight">{chapter.title}</p>
                                    <p className="text-sm text-muted-foreground">Page {chapter.page}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-border/70 bg-card/85 shadow-none backdrop-blur">
                        <CardContent className="p-5">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <List className="size-4 text-[#D3002D]" />
                                Chapter list
                            </div>
                            <nav className="mt-4 space-y-1">
                                {chapters.map((item) => {
                                    const active = item.slug === chapter.slug

                                    return (
                                        <Link
                                            key={item.slug}
                                            href={`/read/${item.slug}`}
                                            className={[
                                                "block rounded-xl px-3 py-2 text-sm transition-colors",
                                                active
                                                    ? "bg-[#D3002D]/5 font-medium text-[#D3002D]"
                                                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                                            ].join(" ")}
                                        >
                                            <span className="block text-xs uppercase tracking-[0.16em] opacity-70">
                                                Chapter {item.number}
                                            </span>
                                            <span className="mt-1 block leading-snug">{item.title}</span>
                                        </Link>
                                    )
                                })}
                            </nav>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border-border/70 bg-card/85 shadow-none backdrop-blur">
                        <CardContent className="p-5">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <BookOpen className="size-4 text-[#D3002D]" />
                                In this chapter
                            </div>
                            <nav className="mt-4 max-h-[35vh] space-y-1 overflow-y-auto pr-1">
                                {chapter.sections.map((section) => (
                                    <a
                                        key={section.title}
                                        href={`#${toAnchorId(section.title)}`}
                                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </CardContent>
                    </Card>
                </aside>

                <article className="space-y-6">
                    <Card className="overflow-hidden rounded-3xl border-border/70 bg-card/90 shadow-none backdrop-blur">
                        <CardContent className="space-y-6 p-6 sm:p-8">
                            {chapter.part ? (
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D3002D]">
                                    {chapter.part}
                                </p>
                            ) : null}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#D3002D]/20 bg-[#D3002D]/5 px-3 py-1 text-sm font-medium text-[#D3002D]">
                                    Chapter {chapter.number}
                                </div>
                                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                                    {chapter.title}
                                </h2>
                                <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                                    {chapter.summary}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4">
                        {chapter.sections.map((section, index) => (
                            <Card
                                key={section.title}
                                id={toAnchorId(section.title)}
                                className="rounded-3xl border-border/70 bg-card/85 shadow-none scroll-mt-24"
                            >
                                <CardContent className="space-y-4 p-6 sm:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D3002D]/20 bg-[#D3002D]/5 text-sm font-semibold text-[#D3002D]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                                Section
                                            </p>
                                            <h3 className="text-xl font-semibold leading-tight">{section.title}</h3>
                                        </div>
                                    </div>
                                    <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                                        <p className="whitespace-pre-line">{section.body}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {navigation?.previous ? (
                            <Card className="rounded-3xl border-border/70 bg-card/85 shadow-none">
                                <CardContent className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        Previous chapter
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold leading-tight">
                                        {navigation.previous.title}
                                    </h3>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-4 rounded-full border-[#D3002D] bg-transparent text-[#D3002D] hover:bg-transparent"
                                    >
                                        <Link href={`/read/${navigation.previous.slug}`}>
                                            <ArrowLeft className="size-4" />
                                            Read previous
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : (
                            <div />
                        )}

                        {navigation?.next ? (
                            <Card className="rounded-3xl border-border/70 bg-card/85 shadow-none">
                                <CardContent className="p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        Next chapter
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold leading-tight">
                                        {navigation.next.title}
                                    </h3>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-4 rounded-full border-[#D3002D] bg-transparent text-[#D3002D] hover:bg-transparent"
                                    >
                                        <Link href={`/read/${navigation.next.slug}`}>
                                            Read next
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : (
                            <div />
                        )}
                    </div>
                </article>
            </div>
        </main>
    )
}
