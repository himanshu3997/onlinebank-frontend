import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Login, Register } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route exact path="/" element={<Home/>} /> */}
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</BrowserRouter>
	);
}


export default App;
