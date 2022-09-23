import * as React from "react";
import CakeImg from "assets/images/image1.png";
import { Input } from "components/Input";
import { useHistory } from "react-router-dom";

export const Create = () => {
	const history = useHistory();

	const handleCreate = React.useCallback((event) => {
		event.preventDefault();
		history.push("/event", { eventName: 'Test' });
	})


	return (
		<div className="w-[100vw] h-[100vh] overflow-auto p-[50px_24px] md:p-[60px_200px] lg:p-[100px_160px] bg-[#F6F2FF] text-center">
			<div className="lg:max-w-[1440px] lg:flex lg:items-center lg:justify-between mx-auto">
				<div className="hidden lg:block basis-1/2 max-w-1/2">
					<img className="w-[440px] inline" src={CakeImg} alt="cake" />
				</div>
				<form className="text-left" onSubmit={handleCreate}>
					<div className="text-center lg:hidden">
						<img className="w-full md:w-[311px] inline" src={CakeImg} alt="cake" />
					</div>
					<Input label="Event Name" name="event_name" required />
					<Input label="Host Name" name="host_name" required />
					<Input label="Start Time" type="datetime-local" name="start_time" required />
					<Input label="End Time" type="datetime-local" name="end_time" required />
					<Input label="Location" name="location" required />
					<Input label="Event Photo" type="file" name="event_photo" required />
					<div className="mt-[34px] lg:mt-[52px]">
						<button className="flex items-center justify-center bg-[linear-gradient(90deg,_#8456EC_3.25%,_#E87BF8_100%)] rounded-[10px] w-[187px] h-[50px] md:w-[320px] md:h-[55px] text-[#fff] text-[16px] leading-[18.4px] md:text-[20px] md:leading-[23px] font-bold mx-auto lg:mr-0" type="submit">🎉 Next</button>
					</div>
				</form>
			</div>
		</div>
	);
};
