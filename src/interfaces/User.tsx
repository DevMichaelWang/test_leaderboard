export interface User {
    username: string;
    setUserName: (username: string) => void;
}

export interface SearchUser {
    data: (string | number)[][] | null;
    searchUser: (username: string) => void;
}

export interface LeaderboardData {
    bananas : number,
    lastDayPlayed : string,
    longestStreak : number,
    name : string,
    stars : number,
    subscribed : boolean,
    uid : string
}




