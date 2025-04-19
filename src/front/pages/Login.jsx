import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Login = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="log_back" style={{ height: "100vh" }}>
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh", gap: "100px" }}
		>
			<div className="log_box d-flex flex-column">
				<h3 className="mb-5" style={{color:"#7E1DFF"}}>LEVEL UP</h3>
				<h2 className="mb-4">Log In</h2>
				<p className="mb-5" style={{color:"#a8a8b2"}}>Please enter your details or click here to register</p>
				<input className="mb-3" type="mail" placeholder="Email address"/>
				<input className="mb-4" type="password" placeholder="Password"/>
				<label className="checkbox-container mb-5">
					<input className="checkbox" type="checkbox" />
					<span className="custom-check"> Remember me</span>
				</label>
				<button className="login mb-4">
					Log in
				</button>
				<button className="github mb-4 d-flex align-items-center justify-content-center" style={{ gap: "10px" }}>
					<i className="bi bi-github text-light" style={{fontSize:"24px"}}></i>
					Log in with GitHub
				</button>
				<div className="d-flex">
					<p className="me-2">Don't have an account?</p>
					<p style={{ color: "#E67E22", cursor: "pointer" }}>Sign Up</p>
				</div>
			</div>
	
			<div className="text-light">
				<div className="mb-5 d-flex">
					<i className="bi bi-check2-square me-4"></i>
					<h2>Accept missions</h2>
				</div>
				<div className="mb-5 d-flex">
					<i className="bi bi-graph-up-arrow me-4"></i>
					<h2>Level up your life</h2>
				</div>
				<div className="mb-5 d-flex">
					<i class="bi bi-text-right me-4" style={{transform:"rotate(90deg)"}}></i>
					<h2>Track your progress</h2>
				</div>
				<div className="d-flex">
					<i className="bi bi-trophy me-4"></i>
					<h2>Unlock achievements</h2>
				</div>
			</div>
		</div>
		</div>
	);
}; 