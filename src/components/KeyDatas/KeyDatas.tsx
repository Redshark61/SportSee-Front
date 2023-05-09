import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import {KeyData} from "./KeyData";
import {CheckUserData} from "../../utils";

export default function KeyDatas({data}: { data: CheckUserData["keyData"] }) {
	return (
		<>
			<KeyData img={energy} label={"Calories"} value={data.calorieCount} color={"rgba(255, 0, 0, .1)"}/>
			<KeyData img={chicken} label={"Protéines"} value={data.proteinCount} color={"rgba(74, 184, 255, 0.1)"}/>
			<KeyData img={apple} label={"Glucides"} value={data.carbohydrateCount} color={"rgba(249, 206, 35, .1)"}/>
			<KeyData img={cheeseburger} label={"Lipides"} value={data.lipidCount} color={"rgba(253, 81, 129, 0.1)"}/>
		</>
	)
}