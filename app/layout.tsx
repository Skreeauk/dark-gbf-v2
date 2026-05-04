import { Zen_Kaku_Gothic_New } from "next/font/google"
import localFont from "next/font/local"

import { Provider } from "@/components/provider"
import "./global.css"

import { cn } from "@/lib/utils"

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
	weight: ["500", "700"],
	subsets: ["latin"],
	variable: "--font-zen-kaku-gothic",
	display: "swap",
})

const Yuruka = localFont({
	src: "/FOT-YurukaStd-UB.otf",
	variable: "--font-yuruka",
	display: "swap",
})

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			data-font="zen-kaku"
			className={cn(ZenKakuGothicNew.variable, Yuruka.variable)}
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
				const uwu = localStorage.getItem('uwu');
				if (uwu) document.documentElement.setAttribute('data-font', uwu);
				`,
					}}
				/>
			</head>
			<body className="flex flex-col min-h-screen">
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
