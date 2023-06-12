import {averageSessions, userActivities, user, performanceData} from "../mocks";
import {useEffect, useState} from "react";
import {CheckActivityData, CheckAverageSessionData, CheckPerformanceData, CheckUserData} from "../utils";


interface ParamsType {
	url: string;
	type: "average-sessions" | "activities" | "user" | "performance";
}

/**
 * @description Custom hook to fetch data from the API or from the mock.
 * @param {string} url - The url to fetch data from.
 * @param {string} type - The type of data to fetch.
 */
export function useFetchData<T>({url, type}: ParamsType) {
	// Setting up the states
	const [data, setData] = useState<T>({} as T);
	const [error, setError] = useState<any>('');
	const [loading, setLoading] = useState<boolean>(true);
	const isDebug = Boolean(+import.meta.env.VITE_DEBUG);

	let mock: any;
	const db = ()=>fetchDB<T>(url);
	let Formatter: any;

	// Getting the mock and the formatter depending on the type
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

				// If the debug mode is on, we fetch the mock, otherwise we fetch the API
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

/**
 * @description Type guard to check if fetchedData is of type { data: T }
 * @param {any} obj - The object to check.
 * @returns {boolean} - True if the object has a data property and no other property.
*/
function hasDataProperty<T>(obj: any): obj is { data: T } {
  return 'data' in obj && Object.keys(obj).length === 1;
}

/**
 * @description Mock function to simulate a fetch.
 * @param data - The data to return.
 * @returns {Promise<T>} - A promise that resolves with the data after 1 second.
 */
function fetchMock<T>(data: T): Promise<T>{
	return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

/**
 * @description Function to fetch data from the API.
 * @param endpoint - The endpoint to fetch data from.
 * @returns {Promise<{ data: T }>} - A promise that resolves with the data.
 */
function fetchDB<T>(endpoint: string): Promise<{ data: T }>{
	const url = `${import.meta.env.VITE_API_URL}${endpoint}`;
	return fetch(url).then(response => response.json());
}