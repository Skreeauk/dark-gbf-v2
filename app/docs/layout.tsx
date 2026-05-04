import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { baseOptions } from "@/lib/layout.shared"
import { FontToggle } from "@/components/FontToggle"

export default function Layout({ children }: LayoutProps<"/docs">) {
	return (
		<DocsLayout
			tree={source.getPageTree()}
			sidebar={{
				footer: <FontToggle />,
				banner: <div>Hello World</div>,
			}}
			{...baseOptions()}
		>
			{children}
		</DocsLayout>
	)
}
