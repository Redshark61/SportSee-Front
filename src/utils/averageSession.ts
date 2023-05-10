import {UserAverageSessions} from "../types";

export class CheckAverageSessionData{
	userId: number;
	sessions: {
        day: number;
        sessionLength: number;
    }[];

	constructor({userId, sessions}: UserAverageSessions){
		this.userId = userId;
		this.sessions = sessions;
	}
}