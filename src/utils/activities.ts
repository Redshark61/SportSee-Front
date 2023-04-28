import {UserActivity} from "../types";

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