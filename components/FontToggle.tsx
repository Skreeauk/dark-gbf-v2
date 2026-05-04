"use client"

export function FontToggle() {
	const toggle = () => {
		const current = document.documentElement.getAttribute("data-font")
		const next = current === "yuruka" ? "zen-kaku" : "yuruka"
		document.documentElement.setAttribute("data-font", next)
		localStorage.setItem("uwu", next)
	}

	return <button onClick={toggle}>Toggle Font</button>
}
