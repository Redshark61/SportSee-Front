import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from "./page/Home";
import Error404 from "./page/404";
import Root from "./components/Root";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root/>}>
			<Route path="/:user_id" index element={<Home/>}/>
			<Route path="*" element={<Error404/>}/>
		</Route>
	)
)

function App() {

	return (
		<RouterProvider router={router}/>
	)
}

export default App
