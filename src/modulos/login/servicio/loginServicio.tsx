import axios from "axios";

const URL = "http://api_sistemaventa.test/api/login";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(URL, { email, password });
    return response;

  } catch (error: any) {
    if (error.response) {
     return error.response;
    }
    throw new Error("Error de conexión con el servidor");
  }
};
