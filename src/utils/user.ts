import {UserMainData} from "../types";

export class CheckUserData {
	id: number;
	userInfos: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore: number;
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};

	constructor({id, userInfos, todayScore, keyData}: UserMainData) {
		this.id = id;
		this.userInfos = userInfos;
		this.todayScore = todayScore*100;
		this.keyData = keyData;
	}
}