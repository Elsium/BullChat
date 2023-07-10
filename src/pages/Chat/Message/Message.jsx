import React, { useState, useEffect } from "react";
import style from "./Message.module.scss";

const Message = (props) => {
	let msgStyle = style.msg;
	props.send === 1 ? (msgStyle += " " + style.First) : (msgStyle += " " + style.Second);
	
	const [typedText, setTypedText] = useState("");
	
	useEffect(() => {
		setTypedText("");
		
		if (props.animateText) {
			if (props.text) {
				const words = props.text.split(" ");
				let index = 0;
				const intervalId = setInterval(() => {
					if (index < words.length) {
						setTypedText((typedText) =>
							typedText + (index > 0 ? " " : "") + words[index]
						);
						index++;
					} else {
						clearInterval(intervalId);
					}
				}, 200);
				
				return () => clearInterval(intervalId);
			}
		}
	}, [props.animateText, props.text]);
	
	
	return (
		<li className={msgStyle}>
			{props.animateText ? typedText : props.text}
		</li>
	);
};

export default Message;
