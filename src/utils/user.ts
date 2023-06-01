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
		calorieCount: string;
		proteinCount: string;
		carbohydrateCount: string;
		lipidCount: string;
	};

	constructor({id, userInfos, todayScore, keyData}: UserMainData) {
		this.id = id;
		this.userInfos = userInfos;
		this.todayScore = todayScore*100;
		this.keyData = {
			calorieCount: `${(keyData.calorieCount/1000).toFixed(3)}kCal`,
			proteinCount: `${keyData.proteinCount}g`,
			carbohydrateCount: `${keyData.carbohydrateCount}g`,
			lipidCount: `${keyData.lipidCount}g`,
		};
	}
}