"use client"

import * as React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookOpenIcon, FrameIcon, LifeBuoyIcon, MapIcon, PieChartIcon, SendIcon } from "lucide-react"
import { ISBNCard } from "./isbn-card"
import { chapters, getFirstChapter } from "@/lib/ebook-content"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: chapters,
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const firstChapter = getFirstChapter()

  const chapterNavItems = data.navMain.map((chapter) => ({
    title: `Chapter ${chapter.number}`,
    url: `/read/${chapter.slug}`,
    icon: <BookOpenIcon />,
    isActive: pathname.startsWith(`/read/${chapter.slug}`),
    items: chapter.sections.map((section) => ({
      title: section.title,
      url: `/read/${chapter.slug}#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`,
    })),
  }))

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <a href="#">
              <div className="flex aspect-square size-10 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">O' Reilly Media Inc.</span>
                <span className="truncate text-xs">support@oreilly.com</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarHeader>
        <ISBNCard
          href="https://www.oreilly.com/library/view/essential-math-for/9781098102920/"
          title="Essential Math For Data Science"
          author="by Thomas Nield"
          src="/cover.png"
          alt="Essential Math For Data Science"
          label="O'Reilly"
          buttonLabel="Continue Reading"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={chapterNavItems} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
