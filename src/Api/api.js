import axios from 'axios';

const API_URI='https://checkmarksbackend.onrender.com';
let result;
const signupfunction=async(data) => {
  const {email, name, password}=data
  result=await axios.post(`${API_URI}/user/signup`,{email, name, password});
    return result;
}

const userinfo= () => {
  return result;
}


 const googleauth= async (code)=> {
  const resultdata= await axios.get(`${API_URI}/user/googleauth?code=${code}`);
  const token=resultdata.data.token;
  localStorage.setItem('Authinfo',token)
  result=(resultdata.data.user);
  return result;
}

export default {signupfunction,userinfo,googleauth};
