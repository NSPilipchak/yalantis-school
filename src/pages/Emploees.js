import "./Emploees.css";
import React, { useEffect, useState } from "react";
import { getUsers } from "../service/Api";
import Alphabet from "../components/Alphabet";
import UserListByMonth from "../components/UserListByMonth";
import { userByAlpha } from "../helpers/Helpers";

const Emploees = () => {
  const [activeUsers, setActiveUsers] = useState(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const [usersByAlpha, setUserByAlpha] = useState([]);
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data = [] } = await getUsers();
      setRawData(data);
      userByAlpha(data, usersByAlpha, setUserByAlpha);
    };
    fetchData();
  }, []);

  return (
    <section className="main">
      <div className="alphabet">
        <p>Employees</p>
        <Alphabet
          usersByAlpha={usersByAlpha}
          activeUsers={activeUsers}
          setActiveUsers={setActiveUsers}
          rawData={rawData}
        />
      </div>
      <div className="user-list-by--month">
        <p>Employees birthday</p>
        <UserListByMonth users={activeUsers} />
      </div>
    </section>
  );
};

export default Emploees;
