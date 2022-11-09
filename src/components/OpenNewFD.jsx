import { useState } from "react";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const defaultState = {
	fromAccountNumber: "",
	fdProduct: "",
	fdPeriod: "",
	amount: "",
	conformation: false,
};

export const OpenNewFD = () => {
	const [fdData, setFdData] = useState(defaultState);

	const handleChange = (event) => {
		setFdData((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		console.log(fdData);
		if(fdData.fromAccountNumber.trim()==='' || fdData.fdProduct.value==='0' || fdData.fdPeriod.value==='0' ||
		fdData.amount.trim() ==='' || fdData.amount===0 || fdData.conformation===false)
			toast.error("please enter all the details")
		else
			toast.success("your FD is created successfully !");

		// submit form api

		setFdData(defaultState);
	};

	return (
		<Container className="p-3">
			Fixed Deposit
			<Container className="p-5 mb-4 bg-light rounded-3">
				<form onSubmit={(e) => submitHandler(e)}>
					<div className="mb-3 d-flex align-items-center justify-content-around">
						<label className="form-label" htmlFor="fromAccountNumber">
							From Account
						</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="fromAccountNumber"
							name="fromAccountNumber"
							placeholder="enter account number"
							onChange={(e) => handleChange(e)}
							value={fdData.fromAccountNumber}
						/>
					</div>

					<div className="mb-3 d-flex align-items-left justify-content-around">
						<label className="form-label" htmlFor="fdProduct">
							FD product
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="fdProduct"
							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%"}}
						>
							<option value="0">Select FD Product</option>
							<option value="1">Standard</option>
							<option value="2">Corporate</option>
							<option value="3">Cumulative</option>
							<option value="4">Tax Saving</option>
							<option value="5">Senior Citizen</option>
						</select>
					</div>

					<div className="mb-3 d-flex align-items-left justify-content-around">
						<label className="form-label" 
										htmlFor="fdPeriod"
		
										>
							FD Period
						</label>
						{/* this might be rendered dynamically ?? */}
						<select
							className="form-select"
							aria-label="Question select"
							name="fdPeriod"

							onChange={(e) => handleChange(e)}
							style={{ maxWidth: "80%", alignItems: "right" }}
						>
							<option value="0">Select FD Period</option>
							<option value="1">3 months</option>
							<option value="2">6 months</option>
							<option value="3">9 months</option>
							<option value="4">1 Year</option>
						</select>
					</div>

					<div className="mb-3 d-flex align-items-left justify-content-around">
						<label className="form-label" htmlFor="amount">
							Amount
					</label>

						<input
							type="text"
							style={{ maxWidth: "80%" }}
							className="form-control"
							id="amount"
							name="amount"
							placeholder="enter amount"
							onChange={(e) => handleChange(e)}
							value={fdData.amount}
						/>
					</div>

					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							name="conformation"
							checked={fdData.conformation}
							onChange={(e) =>
								setFdData((prev) => {
									return { ...prev, [e.target.name]: e.target.checked };
								})
							}
							id="flexCheckDefault"
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							I have read and accepted the terms and conditions
						</label>
					</div>

					<div className="d-flex flex-column">
						<button
							type="button"
							className="btn btn-primary mx-auto"
							onClick={(e) => submitHandler(e)}
						>
							Transfer
						</button>
						<ToastContainer 
						position="bottom-center"
						/>
					</div>
				</form>
			</Container>
		</Container>
	);
};
