import React from "react";
import NavBar from "./NavBar";
import { ScrollArea } from "./ui/scroll-area";

const RightSection: React.FC = ({}) => {
	return (
		<div className="md:bg-[#f2f4f7] w-full md:w-[80%] h-screen flex flex-col">
			<NavBar />
			<ScrollArea className="max-h-[93%]"></ScrollArea>
		</div>
	);
};

export default RightSection;
