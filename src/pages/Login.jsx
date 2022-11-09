import { Toast } from "bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../services/AuthService";

const defaultState = {
	username: "",
	password: "",
};

export const Login = () => {
	const [userData, setUserData] = useState(defaultState);

	// const handleChange = (event) => {
	// 	setUserData((prev) => {
	// 		return { ...prev, [event.target.name]: event.target.value };
	// 	});
	// };

	const handleChange = (event, field) => {

		let actualValue = event.target.value;
		setUserData({...userData, [field]:actualValue})
	}

	// const handleReset = () => {
	// 	setUserData({
	// 		username: "",
	// 		password: "",
	// 	});
	// }
	const submitHandler = (event) => {
		event.preventDefault();
		console.log(userData);

		// submit form api
		//validation
		if(userData.username.trim()==='' || userData.password.trim()===''){
			toast.error("Username or password is required!!")
			return;
		}
		// submit the data to server to generate token
		loginUser(userData).then((jwtTokenData)=>{
			console.log("user login: ");
			console.log(jwtTokenData)
		}).catch(error=>{
			console.log(error);
			toast.error("something went wrong!!!")
		})

	};

	return (
		<Container className="p-3">
			Login Here
			<Container className="p-5 mb-4 bg-light rounded-3">
				<form onSubmit={(e) => submitHandler(e)}>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="username">
							Username
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="username"
							name="username"
							placeholder="enter your username"
							onChange={(e) => handleChange(e, 'username')}
							value={userData.username}
						/>
					</div>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="password">
							Password
						</label>

						<input
							type="password"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="password"
							name="password"
							placeholder="enter your password"
							// onChange={(e) => handleChange(e)}
							value={userData.password}
							onChange={(e) => handleChange(e, 'password')}
						/>
					</div>
					<div className="d-flex flex-column">
						<button
							type="button"
							className="btn btn-primary mx-auto"
							onClick={(e) => submitHandler(e)}
						>
							<ToastContainer/>
							SignIn
						</button>
						<button type="button" className="btn btn-link mx-auto">
							<Link to="/register"> New User ? Signup </Link>
						</button>
					</div>
				</form>
			</Container>
		</Container>
	);
};
