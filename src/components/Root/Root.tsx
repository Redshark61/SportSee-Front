import Nav from "../Nav";
import SideBar from "../SideBar";
import {Outlet, useParams} from "react-router-dom";

export default function Root() {
	const params = useParams()
	return (
		<>
			<Nav/>
			<div className={"flex w-full"}>
				<SideBar/>
				{Object.keys(params).length ? <Outlet/> : <h1>No user</h1>}
			</div>
		</>
	)
}