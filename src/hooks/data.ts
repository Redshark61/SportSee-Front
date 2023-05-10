import {fetchDBAverageSessions, fetchMockAverageSessions} from "./averageSessions";
import {fetchDBActivity, fetchMockActivity} from "./activities";
import {fetchDBUser, fetchMockUser} from "./user";
import {useEffect, useState} from "react";

interface ParamsType {
	id: number;
	type: "average-sessions" | "activities" | "user";
}

export function useFetchData<T>({id, type}: ParamsType) {
	const [data, setData] = useState<T>({} as T);
	const [error, setError] = useState<any>('');
	const [loading, setLoading] = useState<boolean>(true);
	const isDebug = import.meta.env.VITE_DEBUG;

	let mock: any;
	let db: any;

	switch (type) {
		case "average-sessions":
			mock = fetchMockAverageSessions;
			db = fetchDBAverageSessions;
			break;
		case "activities":
			mock = fetchMockActivity;
			db = fetchDBActivity
			break;
		case "user":
			mock = fetchMockUser;
			db = fetchDBUser;
			break;
	}

	useEffect(() => {
		(async () => {
			let fetchedData = {} as any;
			try {
				setLoading(true);
				if (isDebug) {
					fetchedData = await mock(id);
				} else {
					fetchedData = await db(id);
				}
			setData(fetchedData);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})()
	}, [id]);

	return {data, error, loading};
}