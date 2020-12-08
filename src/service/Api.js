import axios from "axios";

export async function getUsers() {
  let res;
  try {
    res = await axios(
      "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    );
  } catch (e) {
    console.log(e);
  }
  return res;
}
