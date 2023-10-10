import axios from 'axios';
import {isDevelopment} from "../utils/utils";

export default axios.create({
  baseURL: isDevelopment ? process.env.BASE_URL : process.env.BASE_URL
  // Add/Change Base url your production URL above
});
