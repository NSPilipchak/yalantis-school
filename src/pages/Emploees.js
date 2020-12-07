import "../App.css";
import React, { useEffect, useState } from "react";
import { getUsers, getAlphabet } from "../service/Api";
import UserList from "../components/UserList";
import Alphabet from "../components/Alphabet";
import UserListByMonth from "../components/UserListByMonth";
import { sortArray } from "../helpers/Helpers";

const Emploees = () => {
    const alphabet = getAlphabet();
    const [activeUsers, setActiveUsers] = useState(
        JSON.parse(localStorage.getItem("users") || "[]")
    );
    const [usersByAlpha, setUserByAlpha] = useState([]);
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data = [] } = await getUsers();
            setRawData(data);
            alphabet.forEach((letter, index) => {
                usersByAlpha[index] = sortArray(
                    data.filter(user => user.lastName.toUpperCase().startsWith(letter))
                );
            });
            setUserByAlpha([...usersByAlpha]);
        };
        fetchData();
    }, []);

    const handleSelectUser = id => {
        activeUsers.find(user => user.id === id)
            ? setActiveUsers(activeUsers.filter(user => user.id !== id))
            : setActiveUsers([...activeUsers, rawData.find(user => user.id === id)]);
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
                            activeUsers={activeUsers}
                            setActiveUsers={handleSelectUser}
                        />
                    </div>
                ))}
            </div>
            <div className="user-list-by--month">
                <p>Employees birthday</p>
                <UserListByMonth users={activeUsers} />
            </div>
        </div>
    );
};

export default Emploees;
