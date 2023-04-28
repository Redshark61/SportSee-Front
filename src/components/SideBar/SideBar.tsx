import Icon from "../Icon";
import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bicycle from '../../assets/bicycle.svg'
import barbell from '../../assets/barbell.svg'

export default function SideBar() {
	return (
		<aside className={"d-block h-full bg-primary min-w-[120px] flex flex-col justify-center items-center gap-[100px]"} style={{
				minHeight: "calc(100vh - 90px)"
			}}>
			<div className={"flex flex-col justify-center items-center gap-[20px]"}>
				<Icon url={yoga} alt={"yoga"}/>
				<Icon url={swim} alt={"swim"}/>
				<Icon url={bicycle} alt={"bicycle"}/>
				<Icon url={barbell} alt={"barbell"}/>
			</div>

			<p className={"text-white text-xs flex items-center justify-center cursor-vertical-text"} style={{
				textOrientation: "mixed",
				writingMode: "sideways-lr",
			}}>Copiryght, SportSee 2020</p>
		</aside>
	)
}