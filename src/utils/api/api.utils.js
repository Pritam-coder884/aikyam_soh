import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const createStudent = async ({userRegister}) => {
    try {
      const response = await axios.post(
        `${API_URL}/student/read`,
        {userRegister},
        // {
        //   headers: {
        //     Authorization: `Bearer ${idToken}`,
        //   },
        // }
      );
  
      return response.data.data;
    } catch (err) {
      throw new Error(err.message);
    }
  };