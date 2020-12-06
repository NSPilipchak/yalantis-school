import React from "react";
import PropTypes from "prop-types";

const UserList = ({setActiveUsers, users = []}) => {
    if (users.length === 0) {
        return <div>---</div>;
    } else {
        return <div className="user-list__list">
            {users.map((user) => (
                <div className="user-list__item" key={user.id}>
                    {user.lastName} {user.firstName}
                    <input type="checkbox"
                           onChange={() => setActiveUsers(user.id)}
                           id={user.id}/>
                </div>
            ))}
        </div>
    }
};

UserList.propTypes = {
    users: PropTypes.array,
    setActiveUsers: PropTypes.func,
};

export default UserList;