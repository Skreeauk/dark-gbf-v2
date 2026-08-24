import defaultMdxComponents from "fumadocs-ui/mdx"
import * as TabsComponents from "fumadocs-ui/components/tabs"
import type { MDXComponents } from "mdx/types"

import { CalloutV2 } from "./CalloutV2"
import { Setup } from "./Setup"

export function getMDXComponents(components?: MDXComponents) {
    return {
        ...defaultMdxComponents,
        ...TabsComponents,
        ...components,
        strong: ({ children }) => (
            <strong style={{ fontWeight: 700 }}>{children}</strong>
        ),
        CalloutV2,
        Setup,
    } as MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
    type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
