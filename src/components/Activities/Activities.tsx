import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useEffect, useState} from "react";
import {UserActivity} from "../../types";
import {useFetchActivities} from "../../hooks";
import {BLACK, RED} from "../../constants";
import {CheckActivityData} from "../../utils";

const CustomTooltip = ({payload, label, active}: {payload: any, label: any, active: boolean}) => {
	if (active){
		console.log(payload);
		return (
			<div style={{background: RED}} className={"flex flex-col px-[11px] py-[4px]"}>
				<span className={"text-[7px] text-white"}>{payload[0].value}kg</span>
				<span className={"text-[7px] text-white"}>{payload[1].value}kCal</span>
			</div>
		)
	}
	return null;
}

export default function Activities() {
	const [data, setData] = useState<UserActivity | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			const data = await useFetchActivities(2);
			const formattedData = new CheckActivityData(data);
			setData(formattedData);
		};
		fetchData();
	}, []);

	return (
		<div className={"bg-gray-50 rounded-md"}>
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<BarChart
					data={data?.sessions}
					margin={{top: 64, right: 30, left: 20, bottom: 5}}
				>
					<CartesianGrid strokeDasharray="4" vertical={false}/>
					<XAxis dataKey="date" color={"#9B9EAC"} fontSize={14}/>
					<YAxis orientation={"right"} color={"#9B9EAC"} fontSize={14}/>
					<Tooltip content={<CustomTooltip/>}/>
					<Legend layout={"horizontal"} verticalAlign={"top"} align={"right"} wrapperStyle={{top:32}}/>
					<Bar dataKey="kilogram" name={"Poids (kg)"} fill={BLACK} radius={[3, 3, 0, 0]} barSize={7}/>
					<Bar dataKey="calories" name={"Calories brûlées (kCal)"} fill={RED} radius={[3, 3, 0, 0]} barSize={7}/>
					<text x="24" y="32" dominantBaseline="hanging" fontSize="15" fontWeight="500">Activités quotidiennes</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}