import {useFetchData} from "../../hooks";
import {UserAverageSessions} from "../../types";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from "./CustomTooltip";
import {useParams} from "react-router-dom";

export default function MedianSessions() {
	const {user_id} = useParams<{user_id: string}>();
	const {data, loading, error} = useFetchData<UserAverageSessions>({type: "average-sessions", url:`/user/${user_id}/average-sessions`});

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}

	return (
		<div className={"relative rounded-md overflow-hidden"}>
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<LineChart
					data={data.sessions}
					className={"bg-secondary"}
				>
					<Legend
						layout={"horizontal"}
						verticalAlign={"top"}
						align={"left"}
						iconSize={0}
						wrapperStyle={{opacity: .5}}

					/>
					<XAxis dataKey="day" fontSize={".9vw"} axisLine={false} tickLine={false} tick={{stroke: "rgba(255,255,255,.5)"}}
						   padding={{left: 10, right: 10}}/>
					<YAxis fontSize={".9vw"} hide padding={{top: 30}} />
					<Tooltip content={<CustomTooltip/>}/>
					<Line dataKey={"sessionLength"} type={"monotone"} name={"Durée moyenne des sessions"} stroke="#FFF"
						  strokeWidth={3} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}