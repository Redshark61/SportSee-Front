export interface UserMainData {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: KeyData
}

export interface KeyData  {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}

export interface UserActivity {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

export interface UserAverageSessions {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
}

export interface UserPerformanceData {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: {
    value: number;
    kind: number;
  }[];
}