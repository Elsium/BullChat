import { React, useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import style from "./Chat.module.scss";
import send from "./send.png";
import Message from "./Message/Message";

const Chat = () => {
	const btnRef = useRef();
	const configuration = new Configuration({
		apiKey: "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",
	});
	const openai = new OpenAIApi(configuration);
	
	const [chat, setChat] = useState([
		{
			id: 1,
			send: 1,
			text: "Hello! How can I help you?",
		},
	]);
	const [prompt, setPrompt] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setPrompt("");
		let curId = chat.length + 1;
		setChat((prevChat) => [
			...prevChat,
			{
				id: curId,
				send: 2,
				text: prompt,
			},
		]);
		let object = {
			model: "text-davinci-003",
			max_tokens: 512,
			temperature: 0,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
			prompt: prompt,
		};
		const response = await openai.createCompletion(object);
		setChat((prevChat) => [
			...prevChat,
			{
				id: curId + 1,
				send: 1,
				text: response.data.choices[0].text,
			},
		]);
	};
	
	return (
		<form className={style.wrapper} onSubmit={handleSubmit}>
			<ul className={style.history}>
				{chat.map((item, index) => (
					<Message
						key={item.id}
						id={item.id}
						send={item.send}
						text={item.text}
						animateText={item.send === 1 && index === chat.length - 1}
					/>
				))}
			</ul>
			<section className={style.message}>
				<input
					placeholder="Ask any question..."
					type="text"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
				<button ref={btnRef} type={"submit"}>
					<img src={send} alt="" />
				</button>
			</section>
		</form>
	);
};

export default Chat;
