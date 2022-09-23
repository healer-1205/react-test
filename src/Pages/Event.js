import React from "react";
import CakeImg from "assets/images/Birthday cake.png";
import CalImg from "assets/images/calendar.svg";
import LocImg from "assets/images/location.svg";
import { Item } from "components/Item";

export const Event = () => {

	return (
		<div className="w-[100vw] h-[100vh] overflow-auto p-0 md:p-[80px_180px] lg:p-[100px_160px] bg-[#F6F2FF] text-center">
			<div className="lg:max-w-[1000px] lg:flex lg:items-center lg:justify-between mx-auto">
				<div className="lg:basis-1/2 lg:max-w-[500px]">
					<div className="lg:hidden">
						<img className="w-full inline" src={CakeImg} alt="Cake" />
					</div>
					<div className="p-[10px] lg:basis-1/2 lg:max-w-1/2 text-left">
						<p className="text-[#240D57] text-[28px] leading-[32px] md:text-[48px] md:leading-[55.2px] mt-[11px] md:mt-[36px] font-bold font-[Helvetica]">Birthday Bash</p>
						<p className="text-[#828282] mt-[4px] text-[14px] leading-[16px] md:text-[18px] md:leading-[20.7px] font-[Helvetica]">Hosted by <span className="font-bold">Elysia</span></p>
					</div>
					<div className="p-[10px] mt-[37.5px] lg:basis-1/2 lg:max-w-1/2 text-left">
						<Item
							icon={CalImg}
							title={<p className="text-[#240D57] text-[16px] leading-[18.4px] md:text-[18px] md:leading-[20.7px] font-bold">18 August 6:00PM</p>}
							detail={<p className="text-[#4F4F4F] text-[14px] leading-[16px] md:text-[18px] md:leading-[20.7px]">to <span className="font-bold">19 August 1:00PM</span> UTC +10</p>}
						/>
						<Item
							icon={LocImg}
							title={<p className="text-[#240D57] text-[16px] leading-[18.4px] md:text-[18px] md:leading-[20.7px] font-bold">Street name</p>}
							detail={<p className="text-[#4F4F4F] text-[14px] leading-[16px] md:text-[18px] md:leading-[20.7px]">Suburb, State, Postcode</p>}
						/>
					</div>
				</div>
				<div className="hidden lg:block basis-1/2 max-w-1/2">
					<img className="w-[440px] inline" src={CakeImg} alt="Cake" />
				</div>
			</div>
		</div>
	);
};
