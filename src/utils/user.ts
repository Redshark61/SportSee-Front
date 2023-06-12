import {UserMainData} from "../types";

/**
 * @description Class to format user data. It formats the score to a percentage as
 * well as formatting the key data as a string.
 * @class CheckUserData
 * @param {UserMainData} data - User data.
 */
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