export const fetchMockAverageSessions = async (id: number) => {
	const averageSessions = {
		userId: id,
		sessions: [
			{
				day: 1,
				sessionLength: 30,
			},
			{
				day: 2,
				sessionLength: 45,
			},
			{
				day: 3,
				sessionLength: 60,
			},
			{
				day: 4,
				sessionLength: 30,
			},
			{
				day: 5,
				sessionLength: 45,
			},
			{
				day: 6,
				sessionLength: 60,
			},
			{
				day: 7,
				sessionLength: 30,
			}
		]
	};

	// make a false delay to simulate a real fetch
	await new Promise(resolve => setTimeout(resolve, 1000));

	return averageSessions;
}

export const fetchDBAverageSessions = async (id: number) => {
	const response = await fetch(`http://localhost:3000/user/${id}`);
	return await response.json();
}