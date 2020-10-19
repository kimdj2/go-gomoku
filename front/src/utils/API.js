import 'axios'
import axios from 'axios'

const END_POINT='http://localhost/app'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default axios.create({
  baseURL: END_POINT,
  responseType: "json",
  withCredentials: true
});
