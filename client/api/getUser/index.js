import axios from "axios";

const getUser= (pageNumberUsers) => axios.get(`https://reqres.in/api/users?page=${pageNumberUsers}`);

export default getUser;