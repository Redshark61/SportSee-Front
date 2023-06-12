import {UserPerformanceData} from "../types";

/**
 * @description Class to format user performance data. It converts the kind of
 * performance from a lower string to a capitalized string.
 * @class CheckPerformanceData
 * @param {UserPerformanceData} data - User performance data.
 */
export class CheckPerformanceData {
	userId: number;
	kind: {
		[key: number]: string;
	};
	data: {
		value: number;
		kind: string;
	}[];
	mappingKind: {
		[key: string]: string;
	} = {
		'intensity': 'Intensité',
		'cardio': 'Cardio',
		'endurance': 'Endurance',
		'strength': 'Force',
		'energy': 'Énergie',
		'speed': 'Vitesse',
	}

	constructor({userId, kind, data}: UserPerformanceData) {
		this.userId = userId;
		this.kind = kind;
		this.data = data.map((item) => {
			return {
				value: item.value,
				kind: this.mappingKind[this.kind[item.kind]].charAt(0).toUpperCase() + this.mappingKind[this.kind[item.kind]].slice(1)
			};
		});
	}
}