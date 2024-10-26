import { createContext, useContext, useState } from 'react'
import sty from './quest.module.css'
function QuestPets() {
	function check() {
		let qust1 = document.getElementById('sect').value
		let qust2 = document.getElementById('sect2').value
		let qust3 = document.getElementById('sect3').value
		let qust4 = document.getElementById('sect4').value
		let list = document.querySelectorAll('p')
		list[4].textContent = list[4].textContent.slice(0, 20)
		list[5].textContent = list[5].textContent.slice(0, 16)
		list[6].textContent = list[6].textContent.slice(0, 19)
		list[7].textContent = list[7].textContent.slice(0, 14)
		list[4].textContent =
			qust1 === 'meet'
				? list[4].textContent + ' ✅'
				: list[4].textContent + '❌'
		list[5].textContent =
			qust2 === 'all' ? list[5].textContent + ' ✅' : list[5].textContent + '❌'
		list[6].textContent =
			qust3 === 'papper'
				? list[6].textContent + ' ✅'
				: list[6].textContent + '❌'
		list[7].textContent =
			qust4 === 'yes' ? list[7].textContent + ' ✅' : list[7].textContent + '❌'
	}
	return (
		<div className={sty.box}>
			<ul className={sty.listQestt}>
				<li>
					<p>Що Боб любить істи ?</p>
					<select className={sty.sectionV} id="sect">
						<option value></option>
						<option value="meet">мясо</option>
						<option value="fesh">рибу</option>
						<option value="pepper">перець</option>
					</select>
				</li>
				<li>
					<p>Що любить Light?</p>
					<select className={sty.sectionV} id="sect2">
						<option value></option>
						<option value="all">все</option>
						<option value="ddall">нічого</option>
						<option value="cucumber">огірок</option>
					</select>
				</li>
				<li>
					<p>Що не любить Tesla?</p>
					<select className={sty.sectionV} id="sect3">
						<option value></option>
						<option value="papper">перець</option>
						<option value="all">все</option>
						<option value="pc">pc</option>
					</select>
				</li>
				<li>
					<p>Maroder Веган?</p>
					<select className={sty.sectionV} id="sect4">
						<option value></option>
						<option value="yes">так</option>
						<option value="no">ні</option>
						<option value="dont">незнаю</option>
					</select>
				</li>
			</ul>
			<button className={sty.btnCheck} onClick={check}>
				check
			</button>
		</div>
	)
}

export default QuestPets
