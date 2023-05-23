
import { useState } from 'react';
import jsonData from '../constant/leaderboard.json';
import { Alert, AlertButton } from 'react-native';
import {SearchUser, LeaderboardData } from '../interfaces/user'
  
const dataArray: LeaderboardData[] = Object.values (jsonData);
dataArray.sort((a, b) => b.bananas - a.bananas);


const SearchState = (): SearchUser => {
  const [data, setData] = useState<(string | number)[][] | null>(null);

  const showAlert = (): void => {
    const buttons: AlertButton[] = [
      { text: 'Ok', onPress: () => console.log('Clicked Ok button.') },
    ];

    Alert.alert('Warning', 'This user name does not exist! Please specify an existing user name!', buttons);
  };

  const searchUser = (username: string): void => {
    const index = dataArray.findIndex((item) => item.name === username);

    if (index === -1) {
      setData(null);
      showAlert();
    } else if (index < 10) {
      const newData: (string | number)[][] = [];
      for (let i = 0; i < 10; i++) {
        newData.push([
          dataArray[i].name,
          i + 1,
          dataArray[i].bananas,
          dataArray[i].name === username ? 'yes' : 'no',
        ]);
      }
      setData(newData);
    } else {
      const newData: (string | number)[][] = [];
      for (let i = 0; i < 9; i++) {
        newData.push([
          dataArray[i].name,
          i + 1,
          dataArray[i].bananas,
          dataArray[i].name === username ? 'yes' : 'no',
        ]);
      }
      newData.push([
        dataArray[index].name,
        index + 1,
        dataArray[index].bananas,
        'yes',
      ]);
      setData(newData);
    }
  };

  return {
    data,
    searchUser,
  };
};

export default SearchState;

