import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import { metaSchema, pageSchema } from "fumadocs-core/source/schema"

import { remarkSteps } from "fumadocs-core/mdx-plugins/remark-steps"

import { z } from "zod"

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
    dir: "content/docs",
    docs: {
        schema: pageSchema.extend({
            keywords: z.array(z.string()).optional(),
        }),
    },
    meta: {
        schema: metaSchema,
    },
})

export default defineConfig({
    mdxOptions: {
        // MDX options
        remarkPlugins: [remarkSteps],
    },
})
