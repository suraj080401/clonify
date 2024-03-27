import React from "react";

interface DataCardsProps {
	title: string;
	value: string;
	change: number;
	changeFrom: string;
}

const currChangeColor = (change: number) => {
	if (change < 0) {
		return "text-[#DC3545] bg-[#FFE0E3]";
	} else if (change > 0) {
		return "text-[#20C997] bg-[#DCFFF5]";
	} else {
		return "text-[#5F6980] bg-[#F2F4F7]";
	}
};

const formatValue = (change: number) => {
	if (change > 0) {
		return `+${change}%`;
	} else if (change < 0) {
		return `${change}%`;
	} else {
		return "0.00";
	}
};

const DataCards: React.FC<DataCardsProps> = ({
	title,
	value,
	change,
	changeFrom,
}) => {
	return (
		<div className="flex flex-col h-[150px] bg-white md:w-[23%] w-full rounded-md p-4 justify-between">
			<div className="flex flex-col">
				<p className="text-[#5F6980] text-sm">{title}</p>
				<p className="text-3xl">{value}</p>
			</div>
			<div className="flex flex-row space-x-2">
				<p className={`text-xs px-2 rounded-full ${currChangeColor(change)}`}>
					{formatValue(change)}
				</p>
				{change !== 0 ? <p className={`text-xs`}>From {changeFrom}</p> : ""}
			</div>
		</div>
	);
};

export default DataCards;
