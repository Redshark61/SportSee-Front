import {useFetchData} from "../../hooks";
import {UserAverageSessions} from "../../types";

export default function MedianSessions(){
	const {data, loading, error} = useFetchData<UserAverageSessions>({id: 2, type: "average-sessions"});

	if (loading) return (<div>Loading...</div>);
	if (error){
		console.error(error);
		return (<div>Error</div>);
	}

	return (
		<div>
			<h1>{data?.userId}</h1>
		</div>
	)
}