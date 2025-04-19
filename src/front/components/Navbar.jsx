import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container">
				<Link  to="/">
					<img className="logo" src='src/assets/img/levelup_logo_transparent1.png' alt="logo" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<p>Log in</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};