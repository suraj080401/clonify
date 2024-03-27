interface Trip {
	pickUp: string[];
	drop: string[];
	via?: string[];
}

function isValidTrips(
	shipment: { pickUps: string[]; dropPoints: string[] },
	trips: Trip[],
): boolean {
	const { pickUps, dropPoints } = shipment;
	const pickUpSet = new Set(pickUps);
	const dropSet = new Set(dropPoints);
	const warehouseSet = new Set<string>();

	for (const trip of trips) {
		for (const pick of trip.pickUp) {
			if (!pickUpSet.has(pick)) {
				return false;
			}
		}
		for (const drop of trip.drop) {
			if (!dropSet.has(drop)) {
				return false;
			}
		}
		if (trip.via) {
			for (const via of trip.via) {
				warehouseSet.add(via);
			}
		}
	}

	for (const trip of trips) {
		for (const pick of trip.pickUp) {
			if (!warehouseSet.has(pick) && !dropSet.has(pick)) {
				return false;
			}
		}
		for (const drop of trip.drop) {
			if (!warehouseSet.has(drop) && !pickUpSet.has(drop)) {
				return false;
			}
		}
	}

	return true;
}

const shipment = {
	pickUps: ["A", "B"],
	dropPoints: ["C", "D"],
};

const trips1: Trip[] = [
	{ pickUp: ["A"], drop: ["W"] },
	{ pickUp: ["B"], drop: ["W"] },
	{ pickUp: ["W"], drop: ["C"] },
	{ pickUp: ["W"], drop: ["D"] },
];

const trips2: Trip[] = [
	{ pickUp: ["A"], drop: ["W1"] },
	{ pickUp: ["B"], drop: ["W2"] },
	{ pickUp: ["W3"], drop: ["C"] },
	{ pickUp: ["W4"], drop: ["D"] },
];

console.log("Trips 1 valid? ", isValidTrips(shipment, trips1));
console.log("Trips 2 valid? ", isValidTrips(shipment, trips2));
