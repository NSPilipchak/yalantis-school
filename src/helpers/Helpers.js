import React from "react";
import {getMonth} from "../service/Api";

const months = getMonth();

export function sortArray(users) {
    users.sort(function (a, b) {
        var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
    })
    return users;
}

export function userByMonths(users) {
    users = sortArray(users)
    const usersByMonth = [];
    months.forEach((month, index) => {
        usersByMonth[index] = users.filter(
            user => new Date(user.dob).getMonth() === index
        );
    });
    return usersByMonth;
}

export function stringInfoUser(user) {
    return `${user.lastName} ${user.firstName} - 
    ${new Date(user.dob).getDate()} 
    ${months[new Date(user.dob).getMonth()]} 
    ${new Date(user.dob).getFullYear()} year`
}