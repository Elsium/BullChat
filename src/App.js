import './App.module.css';
import style from "./App.module.css";
import { Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Chat from "./pages/Chat/Chat";

function App() {
	return (
		<div className={style.wrapper}>
			<Routes>
				<Route path={`/`} element={<Main/>}/>
				<Route path={'/chat'} element={<Chat/>}/>
			</Routes>
		</div>
	);
}

export default App;
