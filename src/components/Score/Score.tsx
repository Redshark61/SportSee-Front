import {ResponsiveContainer, RadialBarChart, RadialBar} from "recharts";
import {useFetchData} from "../../hooks";
import {CheckActivityData, CheckUserData} from "../../utils";
import {useEffect, useState} from "react";
import {createFilter} from "vite";

interface TodayScore {
	todayScore: number;
	fill: string;
}

export default function Score() {
	const {data, loading, error} = useFetchData<CheckUserData>({type: "user", url: "/user/1/activity"});
	const [todayScore, setTodayScore] = useState<TodayScore[]>([]);

	useEffect(() => {
		setTodayScore([
			{todayScore: data.todayScore, fill:"#F00"},
			{todayScore: 100, fill:"#FBFBFB"}])
	}, [data]);

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}

	return (
	<div className={"rounded-md"} style={{
		background: "#FBFBFB"
	}}>
	  <ResponsiveContainer width="100%" height="100%">
		<RadialBarChart
					  innerRadius="70%"
					  outerRadius="90%"
					  data={todayScore}
					  barSize={30}
					  >
			<RadialBar dataKey={"todayScore"}/>
			<text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="2rem" fill={"#282D30"}>
				{data.todayScore}%
			</text>
			<text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="1rem" fill={"#74798C"}>
				de votre objectif
			</text>
		</RadialBarChart>
	  </ResponsiveContainer>
	</div>
  );
}