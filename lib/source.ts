import { docs } from "collections/server"
import { loader } from "fumadocs-core/source"
import { docsImageRoute, docsRoute } from "./shared"

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
    baseUrl: docsRoute,
    source: docs.toFumadocsSource(),
    plugins: [],
})

export function getPageImage(page: (typeof source)["$inferPage"]) {
    const segments = [...page.slugs, "image.png"]

    return {
        segments,
        url: `${docsImageRoute}/${segments.join("/")}`,
    }
}
