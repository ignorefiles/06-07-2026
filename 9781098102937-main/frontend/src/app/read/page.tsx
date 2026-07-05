import { redirect } from "next/navigation"

import { getFirstChapter } from "@/lib/ebook-content"

export default function ReadIndexPage() {
    const firstChapter = getFirstChapter()

    if (!firstChapter) {
        redirect("/")
    }

    redirect(`/read/${firstChapter.slug}`)
}
