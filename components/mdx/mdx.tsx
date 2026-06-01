import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { CalloutV2 } from "./CalloutV2"

export function getMDXComponents(components?: MDXComponents) {
    return {
        ...defaultMdxComponents,
        ...components,
        strong: ({ children }) => (
            <strong style={{ fontWeight: 700 }}>{children}</strong>
        ),
        CalloutV2,
    } as MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
    type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
