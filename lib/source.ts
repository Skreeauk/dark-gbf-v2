import { docs } from "collections/server"
import { loader } from "fumadocs-core/source"
import { docsImageRoute, docsRoute } from "./shared"
import { icons } from "lucide-react"
import { createElement } from "react"

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: docsRoute,
    source: docs.toFumadocsSource(),
    plugins: [],
    icon(icon) {
        if (!icon) {
            // You may set a default icon
            return
        }
        if (icon in icons)
            return createElement(icons[icon as keyof typeof icons])
    },
})

export function getPageImage(page: (typeof source)["$inferPage"]) {
    const segments = [...page.slugs, "image.png"]

    return {
        segments,
        url: `${docsImageRoute}/${segments.join("/")}`,
    }
}
