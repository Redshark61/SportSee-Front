import {TooltipProps} from "recharts";
import {NameType, ValueType} from "recharts/types/component/DefaultTooltipContent";
import PropTypes from "prop-types";

export const CustomTooltip = ({payload, label, active}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className={"flex flex-col px-[.75vw] py-[.3vw] bg-white"}>
				<span className={"text-[.5vw] text-black"}>{payload[0].value}min</span>
			</div>
		);
	}
	return null;
};

CustomTooltip.propTypes = {
	payload: PropTypes.arrayOf(PropTypes.object),
	label: PropTypes.string,
	active: PropTypes.bool
};