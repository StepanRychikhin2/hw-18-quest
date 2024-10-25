import logo from './logo.svg'
import './App.css'
import { createContext, useContext, useState } from 'react';
import Header from './componets/Header';
import InfoPanelPets from './componets/infoPets/infopets';
import sty from "./styleGlob.module.css"
import QuestPets from './componets/quest/quest';
// const ThemeContext = createContext(null)
function App() {
  const [modetxt, setModettxt] = useState(false)
	// const [theme, setTheme] = useState('light')
	// console.log(theme)
	// const className = 'panel-' + theme;
	return (
		<div >
      <Header></Header>
<div>
<h2 className={sty.titleInf}>informashon</h2>
<InfoPanelPets></InfoPanelPets>
</div>
<div>
<h2 className={sty.titleInf}>QUEST</h2>
<QuestPets></QuestPets>
</div>





			{/* <ThemeContext.Provider value={theme}>
				<label>
					<input
						type="checkbox"
						checked={theme === 'dark'}
						onChange={(e) => {
							setTheme(e.target.checked ? 'dark' : 'light')
						}}
					/>
					Use dark mode
				</label>
			</ThemeContext.Provider> */}
		</div>
	)
}

export default App
