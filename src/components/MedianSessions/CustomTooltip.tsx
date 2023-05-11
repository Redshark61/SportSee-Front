import {TooltipProps} from "recharts";
import {NameType, ValueType} from "recharts/types/component/DefaultTooltipContent";

export const CustomTooltip = ({payload, label, active}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className={"flex flex-col px-[11px] py-[4px] bg-white"}>
				<span className={"text-[7px] text-black"}>{payload[0].value}min</span>
			</div>
		);
	}
	return null;
};