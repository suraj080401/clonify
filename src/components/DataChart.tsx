"use client";

import React, { Component } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface ApexChartState {
	series: {
		name: string;
		data: number[];
	}[];
	options: ApexCharts.ApexOptions;
}

class DataChart extends React.Component<{}, ApexChartState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			series: [
				{
					name: "Instagram",
					data: [50, 240, 228, 151, 242, 209, 200],
				},
				{
					name: "Facebook",
					data: [111, 332, 245, 400, 234, 152, 41],
				},
			],
			options: {
				chart: {
					height: 350,
					type: "area",
					toolbar: {
						show: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "smooth",
				},
				xaxis: {
					type: "category",
					categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				},
				grid: {
					show: false,
				},
			},
		};
	}

	render() {
		return (
			<div className="bg-white rounded-md flex flex-col pb-2">
				<div className="flex flex-row justify-between border-b-2 py-2 px-4 items-center">
					<p className="text-sm">Performance</p>
					<PiDotsThreeVerticalBold className="text-md text-gray-400" />
				</div>
				<div>
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="area"
						height={350}
						width={"100%"}
					/>
				</div>
			</div>
		);
	}
}

export default DataChart;
