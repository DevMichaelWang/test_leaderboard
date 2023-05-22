import { useState } from 'react';
import data from '../constant/leaderboard.json';

const dataArray = Object.keys(data).map(key => data[key]);
dataArray.sort((a, b) => b.bananas - a.bananas);

const SearchState = () => {

    const [data, setData] = useState(null);
    const searchUser = (username) => {    
        const index = dataArray.findIndex((_, index) =>_.name === username);
        
        if (index === -1) {
            setData (null)
        } else if (index < 10) {
            let newData = []
            for (let i = 0; i < 10; i++) {
                newData.push ([
                    dataArray[i].name,
                    i + 1,
                    dataArray[i].bananas,
                    dataArray[i].name === username? "yes": "no"
                ])
            }
            setData (newData);
        } else {
            let newData = []
            for (let i = 0; i < 9; i++) {
                newData.push ([
                    dataArray[i].name,
                    i + 1,
                    dataArray[i].bananas,
                    dataArray[i].name === username? "yes": "no"
                ])
            }
            newData.push ([
                dataArray[index].name,
                index + 1,
                dataArray[index].bananas,
                "yes"
            ])
            setData (newData);
        }        
    };

    return {
        data,
        searchUser,
    };
};

export default SearchState;
