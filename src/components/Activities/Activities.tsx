import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {UserActivity} from "../../types";
import {useFetchData} from "../../hooks";
import {BLACK, RED} from "../../constants";
import {CustomTooltip} from "./CustomTooltip";

export default function Activities() {
	const {data, loading, error} = useFetchData<UserActivity>({id: 2, type: "activities"});

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}

	return (
		<div className={"bg-gray-50 rounded-md"}>
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<BarChart
					data={data?.sessions}
					margin={{ top: 64, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="4" vertical={false} />
					<XAxis dataKey="date" color={"#9B9EAC"} fontSize={14} />
					<YAxis orientation={"right"} color={"#9B9EAC"} fontSize={14} />
					<Tooltip content={<CustomTooltip />} />
					<Legend
						layout={"horizontal"}
						verticalAlign={"top"}
						align={"right"}
						wrapperStyle={{ top: 32 }}
					/>
					<Bar
						dataKey="kilogram"
						name={"Poids (kg)"}
						fill={BLACK}
						radius={[3, 3, 0, 0]}
						barSize={7}
					/>
					<Bar
						dataKey="calories"
						name={"Calories brûlées (kCal)"}
						fill={RED}
						radius={[3, 3, 0, 0]}
						barSize={7}
					/>
					<text x="24" y="32" dominantBaseline="hanging" fontSize="15" fontWeight="500">
						Activités quotidiennes
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
