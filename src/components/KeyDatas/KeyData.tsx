import PropTypes from "prop-types";


interface Props {
	img: string;
	label: string;
	value: string;
	color: string;
}

export function KeyData({img, label, value, color}: Props) {
	return (
		<div style={{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212249)"}} className={"flex justify-center items-center bg-[#FBFBFB]"}>
			<div className={"flex justify-center items-center p-[21px] rounded-md"}
			style={{
				backgroundColor: color
			}}
			>
				<img src={img} alt={value}/>
			</div>
			<div className={"pl-[25px]"}>
				<h3 className={"font-bold"}>{value}</h3>
				<h4 className={"text-[#74798C]"}>{label}</h4>
			</div>
		</div>
	)
}

KeyData.propTypes = {
	img: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
}