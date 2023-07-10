import React from "react";
import style from "./Main.module.scss"
import {Link} from 'react-router-dom';

const paralax = (e) => {
	let elem = document.getElementById("bg");
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	elem.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 40 + 'px)';
}

const Main = () => {
	window.addEventListener('mousemove', paralax);
	
	return(
		<div className={style.wrapper}>
			<div className={style.main_window}>
				<div className={style.title}>
					<p className={style.first}>Welcome to the Bull chat</p>
					<p className={style.second}>We are using OpenAI technology</p>
				</div>
				<Link to="/chat" className={style.btn} onClick={() => {window.removeEventListener('mousemove', paralax)}}>Start it!</Link>
			</div>
			<div id="bg" className={style.bg}></div>
		</div>
	)
}

export default Main;
