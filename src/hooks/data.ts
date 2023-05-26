import {averageSessions, userActivities, user, performanceData} from "../mocks";
import {useEffect, useState} from "react";
import {CheckActivityData, CheckAverageSessionData, CheckPerformanceData, CheckUserData} from "../utils";


interface ParamsType {
	url: string;
	type: "average-sessions" | "activities" | "user" | "performance";
}

export function useFetchData<T>({url, type}: ParamsType) {
	const [data, setData] = useState<T>({} as T);
	const [error, setError] = useState<any>('');
	const [loading, setLoading] = useState<boolean>(true);
	const isDebug = import.meta.env.VITE_DEBUG;

	let mock: any;
	const db = ()=>fetchDB<T>(url);
	let Formatter: any;

	switch (type) {
		case "average-sessions":
			mock = ()=>fetchMock(averageSessions);
			Formatter = CheckAverageSessionData;
			break;
		case "activities":
			mock = ()=>fetchMock(userActivities);
			Formatter = CheckActivityData;
			break;
		case "user":
			mock = ()=>fetchMock(user);
			Formatter = CheckUserData;
			break;
		case "performance":
			mock = ()=>fetchMock(performanceData);
			Formatter = CheckPerformanceData;
			break;
	}

	useEffect(() => {
		(async () => {
			try {
				let fetchedData = {} as T;
				setLoading(true);
				if (isDebug) {
					fetchedData = await mock();
				} else {
					fetchedData = await db();
				}
			setData(new Formatter(fetchedData));
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})()
	}, []);

	return {data, error, loading};
}

function fetchMock<T>(data: T): Promise<T>{
	return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

function fetchDB<T>(url: string): Promise<T>{
	return fetch(url).then(response => response.json());
}