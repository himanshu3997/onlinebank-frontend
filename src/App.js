// import "./App.css";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Menu, Login, Register } from "./pages";
import {Home} from "./pages/Home";


function App() {
	return (
			// <Routes>
			// 	{/* <Route exact path="/" element={<Home/>} /> */}
			// 	<Route path="/" element={<Home/>} />
			// 	<Route path="/login" element={<Login/>} />
			// 	<Route path="/register" element={<Register />} />
			// 	<Route path="/menu" element={<Menu />} />
			// </Routes>
			<Home/>
	);
}


export default App;
