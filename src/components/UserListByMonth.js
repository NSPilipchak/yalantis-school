import React from "react";
import PropTypes from "prop-types";

const UserListByMonth = ({users = [], months}) => {
    console.log(users);

    const usersByMonth = [];
    months.forEach((month, index) => {
        usersByMonth[index] = users.filter(
            (user) => new Date(user.dob).getMonth() === index
        );
    });

    return <div className="user-list-by-month__list">
        {months.map((month, index) => {
            return usersByMonth[index].length > 0 &&
                (<div key={month}>
                    <p>{month}</p>
                    <ul>
                        {usersByMonth[index].map((user) => (
                            <li className="user-list-by-month__item" key={user.id}>
                                {user.lastName} {user.firstName} -&nbsp;
                                {new Date(user.dob).getDate()}&nbsp;
                                {months[new Date(user.dob).getMonth()]},&nbsp;
                                {new Date(user.dob).getFullYear()} year
                            </li>
                        ))}
                    </ul>
                </div>);
        })}
    </div>
};

UserListByMonth.propTypes = {
    users: PropTypes.array,
    months: PropTypes.array,
};

export default UserListByMonth;