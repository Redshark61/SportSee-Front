import {UserAverageSessions} from "../types";

export class CheckAverageSessionData {
	userId: number;
	sessions: {
		day: string;
		sessionLength: number;
	}[];
	correspondingDays = {
		1: "L",
		2: "M",
		3: "M",
		4: "J",
		5: "V",
		6: "S",
		7: "D"
	}

	constructor({userId, sessions}: UserAverageSessions) {
		this.userId = userId;
		this.sessions = sessions.map(({day, sessionLength}) => {
			let letter: string;
			if (1<=day && day<=7) {
				letter = this.correspondingDays[day as keyof typeof this.correspondingDays];
			} else {
				letter = "X";
				console.error(`Day  -- ${day} -- is not between 1 and 7`)
			}
			return {
				day: letter,
				sessionLength
			}
		});
	}
}