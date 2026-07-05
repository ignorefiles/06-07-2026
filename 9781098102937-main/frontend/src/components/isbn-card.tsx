"use client"

import Image from "next/image"
import { IconUserEdit } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface ISBNCardProps {
    title: string
    author: string
    src: string
    alt: string
    href: string
    label: string
    buttonLabel: string
    buttonHref?: string
    className?: string
    coverClassName?: string
    coverContainerClassName?: string
    badgeClassName?: string
    headerClassName?: string
    titleClassName?: string
    authorClassName?: string
    footerClassName?: string
    buttonClassName?: string
    priority?: boolean
    quality?: number
    sizes?: string
    blurDataURL?: string
}

export function ISBNCard({
    title,
    author,
    src,
    alt,
    href,
    label,
    buttonLabel,
    buttonHref = href,
    className,
    coverClassName,
    coverContainerClassName,
    badgeClassName,
    headerClassName,
    titleClassName,
    authorClassName,
    footerClassName,
    buttonClassName,
    priority = true,
    quality = 85,
    sizes = "(max-width: 640px) 100vw, 360px",
    blurDataURL,
}: ISBNCardProps) {
    return (
        <Card
            className={cn(
                "mx-auto w-full max-w-[360px] !gap-0 !py-0 overflow-hidden rounded-xl border border-border/70 bg-background/80 shadow-none ring-1 ring-border/60",
                className
            )}
        >
            <a href={href} className="block">
                <div
                    className={cn(
                        "relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-transparent p-0",
                        coverContainerClassName
                    )}
                >
                    <Badge
                        variant="outline"
                        className={cn(
                            "absolute right-4 top-4 z-20 rounded-full border-[#D3012E]/80 bg-transparent px-2.5 py-0.5 text-[0.625rem] font-semibold text-[#D3012E] shadow-none backdrop-blur-0",
                            badgeClassName
                        )}
                    >
                        {label}
                    </Badge>

                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes={sizes}
                        quality={quality}
                        priority={priority}
                        unoptimized
                        placeholder={blurDataURL ? "blur" : "empty"}
                        blurDataURL={blurDataURL}
                        className={cn(
                            "object-cover object-center",
                            coverClassName
                        )}
                    />
                </div>

                <CardHeader className={cn("space-y-2 p-4 pb-2", headerClassName)}>
                    <CardTitle className={cn("text-base leading-tight", titleClassName)}>
                        {title}
                    </CardTitle>
                    <CardDescription
                        className={cn("flex items-center gap-1.5 text-sm", authorClassName)}
                    >
                        <IconUserEdit className="size-4 shrink-0" aria-hidden="true" />
                        <span>{author}</span>
                    </CardDescription>
                </CardHeader>
            </a>

            <CardFooter className={cn("border-0 bg-transparent px-4 pb-4 pt-0", footerClassName)}>
                <Button
                    asChild={Boolean(buttonHref)}
                    variant="ghost"
                    className={cn(
                        "h-10 w-full rounded-xl border border-[#D3002D] bg-transparent text-[0.875rem] font-semibold text-[#D3002D] shadow-none hover:border-[#D3002D] hover:bg-transparent hover:text-[#D3002D]",
                        buttonClassName
                    )}
                >
                    {buttonHref ? <a href={buttonHref}>{buttonLabel}</a> : buttonLabel}
                </Button>
            </CardFooter>
        </Card>
    )
}