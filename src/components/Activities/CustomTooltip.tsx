import {TooltipProps} from "recharts";
import {NameType, ValueType} from "recharts/types/component/DefaultTooltipContent";
import {RED} from "../../constants";

export const CustomTooltip = ({payload, label, active}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		console.log(payload);
		return (
			<div style={{background: RED}} className={"flex flex-col px-[11px] py-[4px]"}>
				<span className={"text-[7px] text-white"}>{payload[0].value}kg</span>
				<span className={"text-[7px] text-white"}>{payload[1].value}kCal</span>
			</div>
		);
	}
	return null;
};