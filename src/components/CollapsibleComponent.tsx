"use client";

import React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SiCircle } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoFileDirectory } from "react-icons/go";
import { IoHelpBuoyOutline } from "react-icons/io5";

interface CollapsibleComponentProps {
	title: string;
	childValues: string[];
}

const CollapsibleComponent: React.FC<CollapsibleComponentProps> = ({
	title,
	childValues,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
			<CollapsibleTrigger className="flex flex-row justify-between w-full items-center">
				<div className="flex flex-row items-center space-x-2">
					<div className="text-xl text-[#5F6980]">
						{title === "Dashboard" ? <SiCircle /> : ""}
						{title === "Message" ? <CiMail /> : ""}
						{title === "Friends" ? <FiUser /> : ""}
						{title === "App" ? <GrAppsRounded /> : ""}
						{title === "Help Center" ? <IoHelpBuoyOutline /> : ""}
						{title === "File Manager" ? <GoFileDirectory /> : ""}
					</div>
					<div>{title}</div>
				</div>
				<div className="mr-2 text-xl">
					{isOpen ? <GoChevronUp /> : <GoChevronDown />}
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="flex flex-col space-y-2 mt-4 ml-7">
				{childValues.map((item) => {
					return <div className="">{item}</div>;
				})}
			</CollapsibleContent>
		</Collapsible>
	);
};

export default CollapsibleComponent;
