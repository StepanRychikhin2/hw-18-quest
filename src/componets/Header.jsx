import { createContext, useContext, useState } from 'react'
import sty from './header.module.css'
const ThemeContext = createContext(null)
function Header() {
	const [theme, setTheme] = useState('light')
	// console.log(theme)
	const mdd = document.querySelector('body')
	// const p = document.querySelector('p')
	// console.log(p)
	const classNamee = 'panel-' + theme
	mdd.classList.remove('panel-dark', 'panel-light')
	mdd.classList.add(classNamee)
	// p.classList.add("dark")
	return (
		<header className={sty.header}>
			<h1>Pet quest</h1>
			<ThemeContext.Provider value={theme}>
				<label className={sty.switch}>
					<input
						type="checkbox"
						checked={theme === 'dark'}
						onChange={(e) => {
							setTheme(e.target.checked ? 'dark' : 'light')
						}}
					/>
					<span className={sty.slider}></span>
				</label>
			</ThemeContext.Provider>
		</header>
	)
}

export default Header
