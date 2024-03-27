interface UserTimestamp {
	logged_in: Date;
	logged_out: Date;
	lastSeenAt: Date;
}

function calculateMonthlyActivity(
	userTimestamps: UserTimestamp[],
): Map<string, { loggedIn: number; active: number }> {
	const monthlyActivity = new Map<
		string,
		{ loggedIn: number; active: number }
	>();

	userTimestamps.forEach((timestamp) => {
		const monthYear = `${
			timestamp.logged_in.getMonth() + 1
		}-${timestamp.logged_in.getFullYear()}`;
		if (!monthlyActivity.has(monthYear)) {
			monthlyActivity.set(monthYear, { loggedIn: 0, active: 0 });
		}
		monthlyActivity.get(monthYear)!.loggedIn++;

		const timeDiff =
			timestamp.logged_in.getTime() - timestamp.lastSeenAt.getTime();
		const daysDiff = timeDiff / (1000 * 3600 * 24);
		if (daysDiff <= 30) {
			monthlyActivity.get(monthYear)!.active++;
		}
	});

	return monthlyActivity;
}

const userTimestamps: UserTimestamp[] = [
	{
		logged_in: new Date("2023-01-05"),
		logged_out: new Date("2023-01-10"),
		lastSeenAt: new Date("2023-01-03"),
	},
	{
		logged_in: new Date("2023-02-10"),
		logged_out: new Date("2023-02-15"),
		lastSeenAt: new Date("2023-02-12"),
	},
];

const monthlyActivity = calculateMonthlyActivity(userTimestamps);
console.log(monthlyActivity);
