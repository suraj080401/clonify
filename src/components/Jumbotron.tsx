import React from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineLightningBolt } from "react-icons/hi";

const Jumbotron: React.FC = ({}) => {
	return (
		<div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:justify-between items-center p-8 md:mt-0 bg-[#282828] rounded-xl">
			<div className="flex flex-col space-y-2 ">
				<p className="text-white text-2xl">Unlock Premium stats</p>
				<p className="text-white text-xs">
					Get up to 10TB of storage for a limited time
				</p>
			</div>
			<div className="flex flex-row items-center">
				<Button className="bg-white text-black rounded-full">
					<HiOutlineLightningBolt className="mx-2 text-lg" /> Upgrade
				</Button>
			</div>
		</div>
	);
};

export default Jumbotron;
