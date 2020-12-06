import axios from "axios";

export async function getUsers() {
    let res;
    try {
        res = await axios('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    } catch (e) {
        console.log(e)
    }
    return res;
}

export function getMonth() {
    return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
}

export function getAlphabet() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}