import React from "react";
import { Input } from "@/components/ui/input";
import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineCalendarToday } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Logo from "../../public/Logo.png";

const NavBar: React.FC = () => {
	return (
		<div className="h-[15%] md:h-[7%]">
			<div className="bg-white w-full h-full px-4 py-2 flex-row justify-between hidden md:flex">
				<div className="w-full relative">
					<Input
						type="text"
						placeholder="Search..."
						className="px-8 focus-visible:ring-0"
					/>
					<div className="absolute text-xl left-1 top-[10px]">
						<IoIosSearch />
					</div>
				</div>
				<div className="flex flex-row mx-4 items-center space-x-6 text-[#5F6980]">
					<div className="flex flex-row space-x-6 text-lg">
						<div className="relative">
							<GoBell />
							<div className="absolute bottom-4 left-3 h-[6px] w-[6px] bg-red-500 rounded-full"></div>
						</div>
						<MdOutlineCalendarToday />
						<GrAppsRounded />
					</div>
					<div>
						<div className="relative">
							<Avatar className="w-8 h-8">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-green-500 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white w-full h-full px-4 py-2 flex-col space-y-4 flex md:hidden">
				<div className="flex flex-row w-full justify-between py-2">
					<div className="flex items-center">
						<Image src={Logo} alt="Logo" width={100} height={400} />
					</div>
					<div className="relative">
						<Avatar className="w-8 h-8">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-green-500 rounded-full"></div>
					</div>
				</div>
				<div className="w-full relative">
					<Input
						type="text"
						placeholder="Search..."
						className="px-8 focus-visible:ring-0"
					/>
					<div className="absolute text-xl left-1 top-[10px]">
						<IoIosSearch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
