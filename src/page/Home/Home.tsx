import {useFetchData} from "../../hooks";
import {CheckUserData} from "../../utils";
import Activities from "../../components/Activities";
import {KeyDatas} from "../../components/KeyDatas";
import {MedianSessions} from "../../components/MedianSessions";

export default function Home() {
	const {data, loading, error} = useFetchData<CheckUserData>({id: 2, type: "user"});

	if (loading) return (<div>Loading...</div>);
	if (error) {
		console.error(error);
		return (<div>Error</div>);
	}


	return (
		<div className={"pl-[100px] pr-[90px] py-[70px] w-full"}>
			<h1 className={"text-[48px]"}>Bonjour <span className={"text-secondary"}>{data.userInfos.firstName}</span>
			</h1>
			<h2 className={"text-lg font-[400] mt-[40px]"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
			<div className={"grid grid-rows-[320px_260px] gap-[30px] w-full h-full mt-[70px]"}
			style={{gridTemplateColumns: "835px 260px"}}
			>
				<Activities/>
				<div className={"row-span-2 h-full grid grid-rows-4 gap-4"}>
					<KeyDatas data={data.keyData}/>
				</div>
				<div className={"grid grid-cols-3 gap-4"}>
					<MedianSessions/>
					<div className={"border-2"}>7</div>
					<div className={"border-2"}>8</div>
				</div>
			</div>
		</div>
	)
}