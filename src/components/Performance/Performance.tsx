import {useFetchData} from "../../hooks";
import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import {CheckPerformanceData} from "../../utils";


export default function Performance() {
	const {data, error, loading} = useFetchData<CheckPerformanceData>({type:"performance", url:"/user/performance/1"})

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error</div>

	return <div className={"rounded-md"} style={{
		background: "#282D30",
	}}>
		<ResponsiveContainer width={"100%"} height={"100%"}>
			<RadarChart
				data={data?.data}
				outerRadius={"60%"}
			>
				<PolarGrid radialLines={false} gridType="polygon"/>
				<PolarAngleAxis dataKey="kind" tick={{
					fontSize: 12,
					fill: "#fff",
				}}/>
				<PolarRadiusAxis tick={false} angle={30} axisLine={false}/>
				<Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}/>
			</RadarChart>

		</ResponsiveContainer>
	</div>
}