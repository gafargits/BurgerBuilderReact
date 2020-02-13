import axios from 'axios';

const instance = axios.create({
  baseURL: `https://myburgerapp-657a4.firebaseio.com/`
})

export default instance;