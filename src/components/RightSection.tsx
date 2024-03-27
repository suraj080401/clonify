import React from "react";
import NavBar from "./NavBar";
import { ScrollArea } from "./ui/scroll-area";
import Jumbotron from "./Jumbotron";
import DataCards from "./DataCards";
import DataChart from "./DataChart";
import DataTable from "./DataTable";

interface DataCardsProps {
	title: string;
	value: string;
	change: number;
	changeFrom: string;
}

const dataSet: DataCardsProps[] = [
	{
		title: "Revenue",
		value: "$56,945",
		change: 45,
		changeFrom: "4.6%",
	},
	{
		title: "Users",
		value: "76.8%",
		change: -1.7,
		changeFrom: "4.6%",
	},
	{
		title: "New Signups",
		value: "116",
		change: 0.0,
		changeFrom: "4.6%",
	},
	{
		title: "Retention",
		value: "12.67%",
		change: 0.6,
		changeFrom: "4.6%",
	},
];

const RightSection: React.FC = ({}) => {
	return (
		<div className="bg-[#f2f4f7] w-full md:w-[80%] h-screen flex flex-col">
			<NavBar />
			<ScrollArea className="max-h-[85%] md:max-h-[93%] flex flex-col p-4">
				<Jumbotron />
				<div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between my-4">
					{dataSet.map((item, index) => {
						return (
							<DataCards
								title={item.title}
								value={item.value}
								change={item.change}
								changeFrom={item.changeFrom}
								key={index}
							/>
						);
					})}
				</div>
				<DataChart />
				<DataTable />
			</ScrollArea>
		</div>
	);
};

export default RightSection;
