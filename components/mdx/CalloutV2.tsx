import { Callout } from "fumadocs-ui/components/callout"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Lightbulb, TriangleAlert, OctagonAlert, Info } from "lucide-react"
import { ReactNode } from "react"

const calloutVariants = cva("ml-2 flex flex-col gap-2 border-l-2 pl-4", {
    variants: {
        type: {
            default: "border-l-blue-500 [&_span]:text-blue-500",
            tip: "border-l-emerald-500 [&_span]:text-emerald-500",
            warning: "border-l-yellow-500 [&_span]:text-yellow-500",
            danger: "border-l-rose-500 [&_span]:text-rose-500",
        },
    },
    defaultVariants: {
        type: "default",
    },
})

type CalloutVariantProps = VariantProps<typeof calloutVariants>

interface CalloutV2Props {
    title: string
    type?: NonNullable<CalloutVariantProps["type"]>
    children: ReactNode
}

export function CalloutV2({
    title,
    type = "default",
    children,
}: CalloutV2Props) {
    return (
        <Callout icon={<></>} className="*:first:hidden">
            <div className={cn(calloutVariants({ type }))}>
                <div className="flex flex-row items-center gap-2 *:first:size-5 *:first:basis-5">
                    {type === "tip" ? (
                        <Lightbulb className="stroke-emerald-500" />
                    ) : type === "warning" ? (
                        <TriangleAlert className="stroke-yellow-500" />
                    ) : type === "danger" ? (
                        <OctagonAlert className="stroke-rose-500" />
                    ) : (
                        <Info className="stroke-blue-500" />
                    )}
                    <span className="font-semibold">{title}</span>
                </div>
                <div className="prose-no-margin">{children}</div>
            </div>
        </Callout>
    )
}
