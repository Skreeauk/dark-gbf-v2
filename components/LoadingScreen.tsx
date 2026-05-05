import { useEffect, useState } from "react"
import { motion, AnimatePresence, useAnimate, stagger } from "motion/react"

interface LoadingScreenProps {
	onComplete?: () => void
	words?: string[]
	theme?: "dark" | "light"
}

export default function LoadingScreen({
	onComplete,
	words = ["imagine.", "create.", "build."],
	theme = "dark",
}: LoadingScreenProps) {
	const [phase, setPhase] = useState<"words" | "tagline" | "exit">("words")
	const [wordIndex, setWordIndex] = useState(0)
	const [scope, animate] = useAnimate()

	const isDark = theme === "dark"
	const bg = isDark ? "#0a0a0a" : "#f5f5f0"
	const fg = isDark ? "#f5f5f0" : "#0a0a0a"
	const fgMuted = isDark ? "rgba(245,245,240,0.35)" : "rgba(10,10,10,0.3)"

	// Step 1 — cycle through words
	useEffect(() => {
		if (phase !== "words") return

		if (wordIndex < words.length) {
			const timer = setTimeout(() => setWordIndex((i) => i + 1), wordIndex === 0 ? 600 : 700)
			return () => clearTimeout(timer)
		} else {
			// All words shown — move to tagline
			const timer = setTimeout(() => setPhase("tagline"), 200)
			return () => clearTimeout(timer)
		}
	}, [phase, wordIndex, words.length])

	// Step 2 — after tagline holds, trigger exit
	useEffect(() => {
		if (phase !== "tagline") return
		const timer = setTimeout(() => setPhase("exit"), 1800)
		return () => clearTimeout(timer)
	}, [phase])

	// Step 3 — after exit animation duration, fire onComplete
	useEffect(() => {
		if (phase !== "exit") return
		const timer = setTimeout(() => onComplete?.(), 900)
		return () => clearTimeout(timer)
	}, [phase, onComplete])

	return (
		<AnimatePresence>
			{phase !== "exit" ? (
				<motion.div
					key="loader"
					style={{
						position: "fixed",
						inset: 0,
						background: bg,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 9999,
						overflow: "hidden",
					}}
					exit={{
						opacity: 0,
						scale: 1.04,
						filter: "blur(8px)",
					}}
					transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
				>
					{/* Subtle grid overlay */}
					<div
						style={{
							position: "absolute",
							inset: 0,
							backgroundImage: isDark
								? "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
								: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
							backgroundSize: "60px 60px",
							pointerEvents: "none",
						}}
					/>

					{/* Word cycling phase */}
					{phase === "words" && (
						<div style={{ position: "relative", textAlign: "center" }}>
							<AnimatePresence mode="popLayout">
								{words.slice(0, wordIndex).map((word, i) =>
									i === wordIndex - 1 ? (
										<motion.p
											key={word}
											initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
											animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
											exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
											transition={{
												duration: 0.55,
												ease: [0.34, 1.2, 0.64, 1],
											}}
											style={{
												fontFamily: "'Georgia', 'Times New Roman', serif",
												fontSize: "clamp(3rem, 8vw, 7rem)",
												fontWeight: 400,
												letterSpacing: "-0.03em",
												color: fg,
												margin: 0,
												lineHeight: 1,
												fontStyle: "italic",
											}}
										>
											{word}
										</motion.p>
									) : null,
								)}
							</AnimatePresence>
						</div>
					)}

					{/* Tagline / final composition phase */}
					{phase === "tagline" && (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "1.5rem",
							}}
						>
							{/* All words stacked */}
							<motion.div
								style={{ textAlign: "center" }}
								initial="hidden"
								animate="visible"
								variants={{
									visible: {
										transition: { staggerChildren: 0.1, delayChildren: 0.05 },
									},
								}}
							>
								{words.map((word) => (
									<motion.div
										key={word}
										variants={{
											hidden: { opacity: 0, y: 16 },
											visible: { opacity: 1, y: 0 },
										}}
										transition={{ duration: 0.5, ease: [0.34, 1.1, 0.64, 1] }}
										style={{
											fontFamily: "'Georgia', 'Times New Roman', serif",
											fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
											fontWeight: 400,
											letterSpacing: "-0.03em",
											color: fg,
											lineHeight: 1.1,
											fontStyle: "italic",
										}}
									>
										{word}
									</motion.div>
								))}
							</motion.div>

							{/* Divider line */}
							<motion.div
								initial={{ scaleX: 0, opacity: 0 }}
								animate={{ scaleX: 1, opacity: 1 }}
								transition={{ delay: 0.5, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
								style={{
									width: 48,
									height: 1,
									background: fgMuted,
									transformOrigin: "center",
								}}
							/>

							{/* Tagline */}
							<motion.p
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.65, duration: 0.6 }}
								style={{
									fontFamily: "'Georgia', 'Times New Roman', serif",
									fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
									color: fgMuted,
									margin: 0,
									letterSpacing: "0.18em",
									textTransform: "uppercase",
									fontStyle: "normal",
								}}
							>
								your studio, your rules
							</motion.p>
						</div>
					)}

					{/* Corner mark — subtle branding */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						style={{
							position: "absolute",
							bottom: "2rem",
							right: "2.5rem",
							fontFamily: "monospace",
							fontSize: "0.65rem",
							letterSpacing: "0.12em",
							color: fgMuted,
							textTransform: "uppercase",
						}}
					>
						est. 2025
					</motion.div>

					{/* Progress bar */}
					<motion.div
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							height: 2,
							background: fg,
							transformOrigin: "left",
						}}
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 2.6, ease: "linear" }}
					/>
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

// ─── Demo wrapper — shows how to integrate ───────────────────────────────────

export function App() {
	const [loaded, setLoaded] = useState(false)

	return (
		<div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
			{/* Your actual home page sits here, revealed after loader exits */}
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: loaded ? 1 : 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				style={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "#f5f5f0",
				}}
			>
				<div style={{ textAlign: "center" }}>
					<h1 style={{ fontSize: "2.5rem", fontWeight: 600, margin: 0 }}>Welcome home</h1>
					<p style={{ color: "#666", marginTop: "1rem" }}>
						The loading screen has exited.
					</p>
				</div>
			</motion.main>

			{/* Loading overlay — unmounts itself after animation completes */}
			{!loaded && (
				<LoadingScreen
					theme="dark"
					words={["imagine.", "create.", "build."]}
					onComplete={() => setLoaded(true)}
				/>
			)}
		</div>
	)
}
