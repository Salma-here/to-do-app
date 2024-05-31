import { useState } from "react"
import { Layout } from "./components/Layout"
import { TodoSection } from "./components/TodoSection"
import { ThemeContext } from "./store/theme-context"
import { ItemsContextProvider } from "./store/items-context"


export function App() {
	const [theme, setTheme] = useState("dark")

	const toggleThemeHandler = () => {
		setTheme(t => {
			if (t === "dark") return "light"
			return "dark"
		})
	}

	return (
		<ThemeContext.Provider value={theme}>
			<ItemsContextProvider>
				<Layout onToggleTheme={toggleThemeHandler}>
					<TodoSection />
				</Layout>
			</ItemsContextProvider>
		</ThemeContext.Provider>
	)
}
