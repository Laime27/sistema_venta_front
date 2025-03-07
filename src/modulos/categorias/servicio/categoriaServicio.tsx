
import axios from "@/libs/axios";


export const listarCategorias = async () => {
    const response = await axios.get("/api/categorias");
    return response.data;
};

