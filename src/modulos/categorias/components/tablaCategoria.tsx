import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  import ModalEliminar from "@/components/modalEliminar";
  import ModalCategoria from "./modalCategoria";
  import { Trash, Pen } from "lucide-react";
  

  interface Categoria {
    id: number;
    nombre: string
  }
  
  function TablaCategoria({ categorias }: { categorias: Categoria[] }) {
    const [open, setOpen] = useState(false);
    const [openEliminar, setOpenEliminar] = useState(false);

    const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  
    const handleOpenModal = (id: number) => {
      setIdSeleccionado(id);
      setOpen(true);
    };
  
    const handleOpenModalEliminar = (id: number) => {
        setIdSeleccionado(id);
        setOpenEliminar(true);
      };

    const handleEliminar = (id: number | string) => {
      console.log(`Eliminando categoría con ID: ${id}`);
      setOpen(false);
    };
  
    return (

      <>


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categorias.map((categoria) => (
              <TableRow key={categoria.id}>
                <TableCell>{categoria.nombre}</TableCell>
                <TableCell className="flex gap-2">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 size-8" onClick={() => handleOpenModal(categoria.id)}> <Pen /> </Button>
                  <Button className="bg-red-500 text-white hover:bg-red-600 size-8" onClick={() => handleOpenModalEliminar(categoria.id)}> <Trash /> </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        <ModalEliminar
          abierto={openEliminar}
          cerrar={() => setOpenEliminar(false)}
          idElemento={idSeleccionado}
          eliminar={handleEliminar}
        
        />

        <ModalCategoria
            open={open}
            onClose={() => setOpen(false)}
            id = {idSeleccionado}
        />

      </>
    );
  }
  
  export default TablaCategoria;
  