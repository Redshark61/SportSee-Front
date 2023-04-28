import {usefetchUser} from "../../hooks";
import {useEffect, useState} from "react";
import {UserMainData} from "../../types";
import {CheckUserData} from "../../utils";
import Activities from "../../components/Activities";

export default function Home() {
	const [data, setData] = useState<UserMainData | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			const data = await usefetchUser(2);
			const formattedData = new CheckUserData(data);
			setData(formattedData);
		};
		fetchData();
	}, []);


	return (
		<div className={"pl-[100px] pr-[90px] py-[70px] w-full"}>
			<h1 className={"text-[48px]"}>Bonjour <span className={"text-secondary"}>{data?.userInfos.firstName}</span>
			</h1>
			<h2 className={"text-lg font-[400] mt-[40px]"}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
			<div className={"grid grid-rows-[320px_260px] gap-[30px] w-full h-full mt-[70px]"}
			style={{gridTemplateColumns: "835px 260px"}}
			>
				<Activities/>
				<div className={"row-span-2 h-full grid grid-rows-4 gap-4"}>
					<div className={"border-2"}>2</div>
					<div className={"border-2"}>3</div>
					<div className={"border-2"}>4</div>
					<div className={"border-2"}>5</div>
				</div>
				<div className={"grid grid-cols-3 gap-4"}>
					<div className={"border-2"}>6</div>
					<div className={"border-2"}>7</div>
					<div className={"border-2"}>8</div>
				</div>
			</div>
		</div>
	)
}