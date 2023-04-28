import React from "react";
import PropTypes from "prop-types";

interface Props {
	url: string
	alt?: string
}

export default function Icon({url, alt=""}: Props) {
	return (
		<div className={"bg-white rounded-md w-[64px] h-[64px] flex justify-center items-center"}>
			<img src={url} alt={alt}/>
		</div>
	)
}

Icon.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string
}