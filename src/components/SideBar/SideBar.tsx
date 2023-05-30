import Icon from "../Icon";
import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bicycle from '../../assets/bicycle.svg'
import barbell from '../../assets/barbell.svg'

export default function SideBar() {
	return (
		<aside className={"d-block bg-primary min-w-[8.3vw] flex flex-col justify-center items-center gap-[7vw]"} style={{
				minHeight: "calc(100vh - 6.25vw)"
			}}>
			<div className={"flex flex-col justify-center items-center gap-[1.4vw]"}>
				<Icon url={yoga} alt={"yoga"}/>
				<Icon url={swim} alt={"swim"}/>
				<Icon url={bicycle} alt={"bicycle"}/>
				<Icon url={barbell} alt={"barbell"}/>
			</div>

			<p className={"text-white text-xs flex items-center justify-center cursor-vertical-text"} style={{
				textOrientation: "mixed",
				writingMode: "sideways-lr",
			}}>Copyright, SportSee 2020</p>
		</aside>
	)
}