import {UserActivity} from "../types";

/**
 * @description Class to format user activity data. It keeps only the day by formatting
 * from "2020-12-31" to a string like "31".
 * @class CheckActivityData
 * @param {UserActivity} data - User activity data.
 */
export class CheckActivityData {
	userId: number;
	sessions: {
		day: string;
		kilogram: number;
		calories: number;
		date: string;
	}[];

	constructor({userId, sessions}: UserActivity) {
		this.userId = userId;
		this.sessions = sessions.map((session) => {
			return {
				day: session.day,
				kilogram: session.kilogram,
				calories: session.calories,
				date: session.day.split("-")[2]
			};
		});
	}
}