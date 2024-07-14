import axios from "axios";

const validateToken = async () => {
     const authToken = localStorage.getItem("Authorization");
     const Tokenvalid = async (token) => {
          try {
               const response = await axios.post(
                    "http://localhost:3000/auth/validate-token",
                    { token }
               );
               return response.data.isValid;
          } catch (error) {
               return false;
          }
     };

     const isValid = await Tokenvalid(`${authToken}`);
     if (isValid) {
          return true;
     } else {
          return false;
     }
};

export default validateToken;
