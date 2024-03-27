import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import { LuSettings2 } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import CollapsibleComponent from "./CollapsibleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CollapsibleProps {
	title: string;
	childValues: string[];
}

const dashboardProp: CollapsibleProps = {
	title: "Dashboard",
	childValues: ["Analytics", "Finance", "Dashboard"],
};
const MessageProp: CollapsibleProps = {
	title: "Message",
	childValues: ["Analytics", "Finance", "Dashboard"],
};
const FriendsProp: CollapsibleProps = {
	title: "Friends",
	childValues: ["Analytics", "Finance", "Dashboard"],
};

const AppProp: CollapsibleProps = {
	title: "App",
	childValues: ["Analytics", "Finance", "Dashboard"],
};
const HelpCenterProp: CollapsibleProps = {
	title: "Help Center",
	childValues: ["Analytics", "Finance", "Dashboard"],
};
const FileManagerProp: CollapsibleProps = {
	title: "File Manager",
	childValues: ["Analytics", "Finance", "Dashboard"],
};

const LeftSection: React.FC = ({}) => {
	return (
		<div className="w-[20%] bg-white h-screen flex-col justify-between border-r hidden md:flex">
			<div className="p-6 flex flex-col space-y-12">
				<div>
					<Image src={Logo} alt="Logo" width={100} height={400} />
				</div>
				<ScrollArea className="max-h-[600px]">
					<div className="flex flex-col space-y-4 mb-8">
						<p className="text-sm text-[#9D9FA1]">DASHBOARD</p>
						<CollapsibleComponent
							title={dashboardProp.title}
							childValues={dashboardProp.childValues}
						/>
						<CollapsibleComponent
							title={MessageProp.title}
							childValues={MessageProp.childValues}
						/>
						<CollapsibleComponent
							title={FriendsProp.title}
							childValues={FriendsProp.childValues}
						/>
						<CollapsibleComponent
							title={AppProp.title}
							childValues={AppProp.childValues}
						/>
					</div>
					<div className="flex flex-col space-y-4 mb-8">
						<p className="text-sm text-[#9D9FA1]">PAGES</p>
						<CollapsibleComponent
							title={HelpCenterProp.title}
							childValues={HelpCenterProp.childValues}
						/>
						<CollapsibleComponent
							title={FileManagerProp.title}
							childValues={FileManagerProp.childValues}
						/>
					</div>
				</ScrollArea>
			</div>
			<div className="w-full flex p-4 flex-row justify-between items-center text-[#5F6980] border-t">
				<LuSettings2 className="text-2xl" />
				<IoExitOutline className="text-2xl" />
				<CiGlobe className="text-2xl" />
			</div>
		</div>
	);
};

export default LeftSection;
