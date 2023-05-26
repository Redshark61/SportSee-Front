import {useFetchData} from "../../hooks";
import {CheckUserData} from "../../utils";
import Activities from "../../components/Activities";
import KeyDatas from "../../components/KeyDatas";
import MedianSessions from "../../components/MedianSessions";
import Performance from "../../components/Performance";
import Score from "../../components/Score";

export default function Home() {
	const {data, loading, error} = useFetchData<CheckUserData>({type: "user", url:"/user"});

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}


	return (
		<div className={"pl-[7vw] pr-[6.25vw] py-[4.9vw] pb-0 w-full"}>
			<h1 className={"text-[3.3vw]"}>Bonjour <span className={"text-secondary"}>{data.userInfos.firstName}</span>
			</h1>
			<h2 className={"text-lg font-[400] mt-[2.8vw]"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
			<div className={"grid grid-rows-[22.2vw_18vw] grid-cols-[58vw_18vw] gap-[2vw] w-full mt-[4.9vw]"}>
				<Activities/>
				<div className={"row-span-2 h-full grid grid-rows-4 gap-4"}>
					<KeyDatas data={data.keyData}/>
				</div>
				<div className={"grid grid-cols-[repeat(3,_18vw)] grid-rows-[18vw] gap-4"}>
					<MedianSessions/>
					<Performance/>
					<Score/>
				</div>
			</div>
		</div>
	)
}