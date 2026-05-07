import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import { FontToggle } from "@/components/FontToggle"

export default function Layout({ children }: LayoutProps<"/docs">) {
    return (
        <DocsLayout
            tree={source.getPageTree()}
            // sidebar={{
            // 	footer: <FontToggle />,
            // 	banner: <div>Hello World</div>,
            // }}
            links={[
                {
                    type: "icon",
                    label: "UwU Toggle", // `aria-label`
                    icon: <FontToggle />,
                    text: "UwU Toggle",
                    url: "",
                },
            ]}
            {...baseOptions()}
        >
            {children}
        </DocsLayout>
    )
}
