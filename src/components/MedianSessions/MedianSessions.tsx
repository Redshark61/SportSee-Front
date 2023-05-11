import {useFetchData} from "../../hooks";
import {UserAverageSessions} from "../../types";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from "./CustomTooltip";

export default function MedianSessions() {
	const {data, loading, error} = useFetchData<UserAverageSessions>({id: 2, type: "average-sessions"});

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
					<XAxis dataKey="day" fontSize={14} axisLine={false} tickLine={false} tick={{stroke: "rgba(255,255,255,.5)"}}
						   padding={{left: 10, right: 10}}/>
					<YAxis fontSize={14} hide padding={{top: 30}} />
					<Tooltip content={<CustomTooltip/>}/>
					<Line dataKey={"sessionLength"} type={"monotone"} name={"Durée moyenne des sessions"} stroke="#FFF"
						  strokeWidth={3} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}