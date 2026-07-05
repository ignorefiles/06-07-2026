"use client"

import Image from "next/image"

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
    coverSrc: string
    coverAlt: string
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
    coverSrc,
    coverAlt,
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
                "mx-auto w-full max-w-[360px] gap-1 overflow-hidden rounded-xl border border-border/70 bg-background/80 pt-0 shadow-none ring-1 ring-border/60",
                className
            )}
        >
            <a href={href} className="block">
                <div
                    className={cn(
                        "relative flex h-[260px] items-center justify-center border-b border-border/60 bg-transparent p-3",
                        coverContainerClassName
                    )}
                >
                    <Badge
                        variant="outline"
                        className={cn(
                            "absolute right-4 top-5 z-20 rounded-full border-[#D3012E]/80 bg-background/90 px-2.5 py-0.5 text-[0.625rem] font-semibold text-[#D3012E] shadow-sm backdrop-blur-sm",
                            badgeClassName
                        )}
                    >
                        {label}
                    </Badge>

                    <Image
                        src={coverSrc}
                        alt={coverAlt}
                        fill
                        sizes={sizes}
                        quality={quality}
                        priority={priority}
                        placeholder={blurDataURL ? "blur" : "empty"}
                        blurDataURL={blurDataURL}
                        className={cn(
                            "rounded-md object-contain",
                            coverClassName
                        )}
                    />
                </div>

                <CardHeader className={cn("p-4 pb-2", headerClassName)}>
                    <CardTitle className={cn("text-base leading-tight", titleClassName)}>
                        {title}
                    </CardTitle>
                    <CardDescription className={cn("text-sm", authorClassName)}>
                        {author}
                    </CardDescription>
                </CardHeader>
            </a>

            <CardFooter className={cn("border-0 bg-transparent px-4 pt-0", footerClassName)}>
                <Button
                    asChild={Boolean(buttonHref)}
                    variant="outline"
                    className={cn(
                        "h-10 w-full rounded-12 border-[#D3012E]/80 text-[0.875rem] font-semibold text-[#D3012E] hover:border-[#D3012E] hover:bg-[#D3012E]/10 hover:text-[#D3012E]",
                        buttonClassName
                    )}
                >
                    {buttonHref ? <a href={buttonHref}>{buttonLabel}</a> : buttonLabel}
                </Button>
            </CardFooter>
        </Card>
    )
}