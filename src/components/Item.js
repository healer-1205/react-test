import React from "react";
import GtImg from "assets/images/gt.svg";

export const Item = ({ icon, title, detail }) => {

	return (
		<div className="flex items-center mb-[27px]">
			<div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center bg-[#fff] shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)] rounded-[10px]">
				<img src={icon} alt="Icon" />
			</div>
			<div className="flex-grow pl-[20px]">
				{title}
				{detail}
			</div>
			<div>
				<img src={GtImg} alt="Icon" />
			</div>
		</div >
	);
};
