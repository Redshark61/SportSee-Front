export const fetchMockActivity = async (id: number) => {
	const userActivities = {
		userId: 1,
		sessions: [
			{
				day: "2023-04-27",
				kilogram: 75,
				calories: 120
			},
			{
				day: "2023-04-26",
				kilogram: 73,
				calories: 110
			},
			{
				day: "2023-04-25",
				kilogram: 76,
				calories: 130
			},
			{
				day: "2023-04-24",
				kilogram: 74,
				calories: 115
			},
			{
				day: "2023-04-23",
				kilogram: 72,
				calories: 125
			},
			{
				day: "2023-04-22",
				kilogram: 77,
				calories: 135
			},
			{
				day: "2023-04-21",
				kilogram: 71,
				calories: 105
			},
			{
				day: "2023-04-20",
				kilogram: 75,
				calories: 125
			},
			{
				day: "2023-04-19",
				kilogram: 76,
				calories: 130
			},
			{
				day: "2023-04-18",
				kilogram: 74,
				calories: 120
			}
		]
	};


	// make a false delay to simulate a real fetch
	await new Promise(resolve => setTimeout(resolve, 1000));

	return userActivities;
}

export const fetchDBActivity = async (id: number) => {
	const response = await fetch(`http://localhost:3000/user/${id}`);
	return await response.json();
}