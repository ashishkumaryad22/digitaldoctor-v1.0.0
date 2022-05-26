import axios from "axios";

// const apiUrl = 'http://localhost:8080';
const apiUrl = "http://localhost:9999/user-service";
class AuthService {
  loginDoctor(data) {
      return axios.post(`${apiUrl}/api/v1/doctor/login`, data);
  }
  loginPatient(data) {
   return axios.post(`${apiUrl}/api/v1/patient/login`, data);
  }

  registerDoctor(data) {
    return axios.post(`${apiUrl}/api/v1/doctor`, data);
  }
  registerPatient(data) {
    return axios.post(`${apiUrl}/api/v1/patient`, data);
  }
}
export default new AuthService();
