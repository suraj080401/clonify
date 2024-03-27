"use client";

import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { data } from "@/lib/data";

export type Payment = {
	source: string;
	amount: number;
	status: "active" | "pending" | "cancelled";
	userid: number;
	joined: string;
	group: string;
};

function formatNumber(num: number): string {
	return num.toFixed(2);
}

function getDesign(status: string) {
	if (status === "active") {
		return "bg-green-300 text-green-500";
	} else if (status === "pending") {
		return "bg-orange-300 text-orange-500";
	} else {
		return "bg-gray-200 text-gray-400";
	}
}

function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "source",
		header: "Source",
		cell: ({ row }) => (
			<div className="flex flex-row items-center space-x-2">
				<div className="text-xl">
					<FaFacebook />
				</div>
				<div>{row.getValue("source")}</div>
			</div>
		),
	},
	{
		accessorKey: "amount",
		header: "Amount",
		cell: ({ row }) => (
			<div className="text-gray-600">
				{formatNumber(row.getValue("amount"))}
			</div>
		),
	},
	{
		accessorKey: "status",
		header: () => <div>Status</div>,
		cell: ({ row }) => (
			<div
				className={`${getDesign(
					row.getValue("status"),
				)} rounded-md w-fit p-1 text-xs text-gray600`}
			>
				{capitalizeFirstLetter(row.getValue("status"))}
			</div>
		),
	},
	{
		accessorKey: "userid",
		header: () => <div className="w-16 text-gray-600">User Id</div>,
		cell: ({ row }) => (
			<div className="text-gray-600">{row.getValue("userid")}</div>
		),
	},
	{
		accessorKey: "joined",
		header: () => <div>Joined</div>,
		cell: ({ row }) => (
			<div className="text-gray-600">{row.getValue("joined")}</div>
		),
	},
	{
		accessorKey: "group",
		header: () => <div>Group</div>,
		cell: ({ row }) => (
			<div className="text-gray-600">{row.getValue("group")}</div>
		),
	},
];

function DataTable() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full bg-white rounded-md md:p-4 p-2 my-4">
			<div className="flex items-center py-4">
				<p>Installed Apps</p>
			</div>
			<div className="rounded-md border overflow-x-auto max-w-[86vw] mx-auto">
				<Table>
					<TableHeader className="bg-[#f2f4f7]">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="flex-1 text-sm text-muted-foreground">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

export default DataTable;
