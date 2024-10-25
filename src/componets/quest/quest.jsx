import { createContext, useContext, useState } from 'react'

function QuestPets() {
	function check() {
		let qust1 = document.getElementById('sect').value
		let qust2 = document.getElementById('sect2').value
		let qust3 = document.getElementById('sect3').value
		let qust4 = document.getElementById('sect4').value
		let list = document.querySelectorAll('p')
		list[4].textContent =
			qust1 === 'meet'
				? list[4].textContent + ' ✅'
				: list[4].textContent + '❌'
		list[5].textContent =
			qust2 === 'all'
				? list[5].textContent + ' ✅'
				: list[5].textContent + '❌'
		list[6].textContent =
			qust3 === 'papper'
				? list[6].textContent + ' ✅'
				: list[6].textContent + '❌'
		list[7].textContent =
			qust4 === 'yes'
				? list[7].textContent + ' ✅'
				: list[7].textContent + '❌'
		// // console.log(qust1 === "meet" ? list[4].textContent  + "yse" : list[4].textContent  + "no")
	}
	return (
		<>
			<ul >
				<li>
					<p>Що Боб любить істи ?</p>
					<select id="sect">
						<option value></option>
						<option value="meet">мясо</option>
						<option value="fesh">рибу</option>
						<option value="pepper">перець</option>
					</select>
					{/* <button onClick={check}>check</button> */}
				</li>
				<li>
					<p>Що любить Light?</p>
					<select id="sect2">
						<option value></option>
						<option value="all">все</option>
						<option value="ddall">нічого</option>
						<option value="cucumber">огірок</option>
					</select>
					{/* <button onClick={check}>check</button> */}
				</li>
				<li>
					<p>Що не любить Tesla?</p>
					<select id="sect3">
						<option value></option>
						<option value="papper">перець</option>
						<option value="all">все</option>
						<option value="pc">pc</option>
					</select>
					{/* <button onClick={check}>check</button> */}
				</li>
				<li>
					<p>Maroder Веган?</p>
					<select id="sect4">
						<option value></option>
						<option value="yes">так</option>
						<option value="no">ні</option>
						<option value="dont">незнаю</option>
					</select>
					{/* <button onClick={check}>check</button> */}
				</li>
			</ul>
			<button onClick={check}>check</button>
		</>
	)
}

export default QuestPets
