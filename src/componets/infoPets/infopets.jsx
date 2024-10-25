import { createContext, useContext, useState, useRef } from 'react'
import sty from './infopets.module.css'


function InfoPanelPets() {
    const listRef = useRef()
    function scrolToIndex(index) {
        const listNode = listRef.current;

// console.log(listNode)
const items = listNode.querySelectorAll("li > img")[index]
items.scrollIntoView({
    behavior:"smooth",
    block: "nearest",
    inline:"center"
})
    }
    
    return (
        <>
        <div className={sty.btnSrl}>
        <button className={sty.btn} onClick={() => scrolToIndex(0)}>
          bob
        </button>
        <button className={sty.btn} onClick={() => scrolToIndex(1)}>
          Tesla
        </button>
        <button className={sty.btn} onClick={() => scrolToIndex(2)}>
        light
        </button>
        <button className={sty.btn} onClick={() => scrolToIndex(3)}>
        Maroder
        </button>
        </div>
        
        <ul className={sty.list} ref={listRef}>
            <li>
            <img className={sty.imgCats}
              src="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/02/USAT/71425480007-getty-images-1498838344.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp"
              alt="Bella"
              
            />
            <h3>Bob</h3>
            <p>Боб люить істи мясо та курятину також він любить спати та гарчати.<br></br> Не любить перець і поганих людей .  </p>
            </li>
            <li>
            <img className={sty.imgCats}
              src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
              alt="Bella"
              
            />
            <h3>light</h3>
            <p>light люить все.<br></br> Не любить йому все подобається :) .  </p>
            </li>
            <li>
            <img className={sty.imgCats}
              src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
              alt="Bella"
              
            />
            <h3>Tesla</h3>
            <p>Tesla любить спати.<br></br> Не любить перець .  </p>
            </li>
            <li>
            <img className={sty.imgCats}
              src="https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k"
              alt="Bella"
              
            />
            <h3>Maroder</h3>
            <p>Maroder він веган і їсть їжу рослинного походження.<br></br> Не любить дивитись як їдять мясо .  </p>
            </li>
            
        </ul>
        </>
    )
}

export default InfoPanelPets