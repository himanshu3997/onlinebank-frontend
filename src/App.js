// import "./App.css";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Menu, Login, Register } from "./pages";
import {Home} from "./pages/Home";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<Home/>} /> */}
				<Route exact path="/" element={<Home/>} />
				<Route exact path="/login" element={<Login/>} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/menu" element={<Menu />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;
