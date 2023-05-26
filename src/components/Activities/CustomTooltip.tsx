import {TooltipProps} from "recharts";
import {NameType, ValueType} from "recharts/types/component/DefaultTooltipContent";
import {RED} from "../../constants";

export const CustomTooltip = ({payload, label, active}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div style={{background: RED}} className={"flex flex-col px-[.75vw] py-[.3vw]"}>
				<span className={"text-[.5vw] text-white"}>{payload[0].value}kg</span>
				<span className={"text-[.5vw] text-white"}>{payload[1].value}kCal</span>
			</div>
		);
	}
	return null;
};