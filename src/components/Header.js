import Nav from "./Nav";
import React, { useState, useEffect } from "react"
const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
	  window.addEventListener("scroll", () => {
		setScroll(window.scrollY > 300);
	  });
	}, []);
	return (
		<div className={scroll ? "bg-blue w-full fixed z-50 duration-300 py-0 shadow top-0 border-b-2 border-blue" : "bg-blue relative duration-300  border-b-2 border-blue"}>
			<Nav/>
		</div>
	)
};

export default Header;
