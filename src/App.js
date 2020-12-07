import "./App.css";
import React, { useEffect, useState } from "react";
import { getUsers, getMonth, getAlphabet } from "./service/Api";
import UserList from "./components/UserList";
import Alphabet from "./components/Alphabet";
import UserListByMonth from "./components/UserListByMonth";

const App = () => {
  const alphabet = getAlphabet();
  const months = getMonth();
  const [activeUsers, setActiveUsers] = useState([]);
  const [usersByAlpha, setUserByAlpha] = useState([]);
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data = [] } = await getUsers();
      setRawData(data);
      alphabet.forEach((letter, index) => {
        usersByAlpha[index] = data
          .filter(user => user.lastName.toUpperCase().startsWith(letter))
          .sort(function(a, b) {
            let nameA = a.lastName.toLowerCase(),
              nameB = b.lastName.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
      });
      setUserByAlpha([...usersByAlpha]);
    };
    fetchData();
  }, []);

  const handleSelectUser = id => {
    // const abc = rawData.find(user => user.id === id)
    // const bca = activeUsers.filter(user => user.id !== id)
    // const cab = user => user.id === id
    // debugger
    activeUsers.find(user => user.id === id)
      ? setActiveUsers(activeUsers.filter(user => user.id !== id))
      : setActiveUsers([...activeUsers, rawData.find(user => user.id === id)]);
    // console.log("activeUsers", activeUsers);
  };

  return (
    <div className="app">
      <div className="alphabet">
        <p>Employees</p>
        {alphabet.map((letter, index) => (
          <div key={`letter_index${index}`}>
            <Alphabet key={index} letter={letter} />
            <UserList
              users={usersByAlpha[index]}
              setActiveUsers={handleSelectUser}
            />
          </div>
        ))}
      </div>
      <div className="user-list-by--month">
        <p>Employees birthday</p>
        <UserListByMonth users={activeUsers} months={months} />
      </div>
    </div>
  );
};

export default App;
