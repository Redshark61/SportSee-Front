export const fetchMockUser = async (id: number) => {
	const user = {
	  id: id,
	  userInfos: {
		firstName: "John",
		lastName: "Doe",
		age: 30
	  },
	  todayScore: 85,
	  keyData: {
		calorieCount: 2000,
		proteinCount: 100,
		carbohydrateCount: 250,
		lipidCount: 70
	  }
	};

	// make a false delay to simulate a real fetch
	await new Promise(resolve => setTimeout(resolve, 1000));

	return user;
}

export const fetchDBUser = async (id: number) => {
	const response = await fetch(`http://localhost:3000/user/${id}`);
	return await response.json();
}