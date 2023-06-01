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
	const isDebug = Boolean(+import.meta.env.VITE_DEBUG);

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
				let fetchedData = {} as T | { data: T }
				setLoading(true);
				if (isDebug) {
					fetchedData = await mock();
				} else {
					fetchedData = await db();
				}
				if (!hasDataProperty<T>(fetchedData)){
					setData(new Formatter(fetchedData));
				} else {
					setData(new Formatter(fetchedData.data));
				}
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})()
	}, []);

	return {data, error, loading};
}

// Type guard to check if fetchedData is of type { data: T }
function hasDataProperty<T>(obj: any): obj is { data: T } {
  return 'data' in obj && Object.keys(obj).length === 1;
}

function fetchMock<T>(data: T): Promise<T>{
	return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

function fetchDB<T>(endpoint: string): Promise<{ data: T }>{
	const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
	return fetch(url).then(response => response.json());
}