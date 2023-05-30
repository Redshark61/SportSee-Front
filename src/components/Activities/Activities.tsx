import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {useFetchData} from "../../hooks";
import {BLACK, RED} from "../../constants";
import {CustomTooltip} from "./CustomTooltip";
import {CheckActivityData} from "../../utils";
import {Margin} from "recharts/types/util/types";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function calculate_margin() {
	const screenWidth = window.innerWidth;
	return {
		top: 64 / 1440 * screenWidth,
		right: 30 / 1440 * screenWidth,
		left: 20 / 1440 * screenWidth,
		bottom: 5 / 1440 * screenWidth
	};
}

export default function Activities() {
	const {user_id} = useParams<{user_id: string}>();
	const {data, loading, error} = useFetchData<CheckActivityData>({type: "activities", url: `/user/${user_id}/activity`});
	const [margin, setMargin] = useState<Margin>(calculate_margin());
	useEffect(() => {
		window.removeEventListener("resize", ()=> {
			setMargin(calculate_margin())
		});
	}, []);

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}

	window.addEventListener("resize", ()=> {
		setMargin(calculate_margin())
	});

	return (
		<div className={"bg-gray-50 rounded-md"}>
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<BarChart
					data={data?.sessions}
					margin={margin}
				>
					<CartesianGrid strokeDasharray="4" vertical={false} />
					<XAxis dataKey="date" fontSize={".9vw"} />
					<YAxis orientation={"right"} fontSize={".9vw"} />
					<Tooltip content={<CustomTooltip />} />
					<Legend
						layout={"horizontal"}
						verticalAlign={"top"}
						align={"right"}
						wrapperStyle={{ top: "2.2vw", fontSize: ".9vw" }}
						iconType={'circle'}
						iconSize={8}
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
					<text x="24" y="32" dominantBaseline="hanging" fontSize="1vw" fontWeight="500">
						Activités quotidiennes
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
