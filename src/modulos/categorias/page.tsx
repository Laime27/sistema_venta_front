import { useEffect, useState } from "react";
import { listarCategorias } from "../categorias/servicio/categoriaServicio";
import TablaCategoria from "./components/tablaCategoria";
import ModalCategoria from "./components/modalCategoria";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus } from "lucide-react";

function Categorias() {
  interface Categoria {
    id: number;
    nombre: string;
  }

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function ListarCategorias() {
      const response = await listarCategorias();
      setCategorias(response);
    }

    ListarCategorias();
  }, []);

  return (
    <div className="flex justify-center mt-8 ">
      <Card className="w-full max-w-3xl p-6 shadow-lg  rounded-lg">
  
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            Categorías
            <Badge className="bg-blue-500 text-white">{categorias.length}</Badge>
          </CardTitle>

          <Button onClick={() => setOpen(true)} className="">
           <Plus />  Agregar Categoría
          </Button>
        </CardHeader>

       
        <CardContent>
          <TablaCategoria categorias={categorias} />
        </CardContent>

      
        <ModalCategoria open={open} onClose={() => setOpen(false)} id={null} />
      </Card>
    </div>
  );
}

export default Categorias;
