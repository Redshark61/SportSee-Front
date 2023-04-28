import Nav from "../Nav";
import SideBar from "../SideBar";
import {Outlet} from "react-router-dom";

export default function Root() {
	return (
		<>
			<Nav/>
			<div className={"flex"}>
				<SideBar/>
				<Outlet/>
			</div>
		</>
	)
}