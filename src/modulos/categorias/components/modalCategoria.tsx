import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";

interface ModalCategoriaProps {
  open: boolean;
  onClose: () => void;
  id: number | null;
  nombre?: string;
}

function ModalCategoria({ open, onClose, id, nombre = "" }: ModalCategoriaProps) {
  const [nombreCategoria, setNombreCategoria] = useState("");
  
  useEffect(() => {
    setNombreCategoria(nombre);
  }, [nombre, open]);

  const handleSave = () => {
    if (id) {
      console.log(`Editando categoría ID: ${id}, Nombre: ${nombreCategoria}`);
    } else {
      console.log(`Creando nueva categoría: ${nombreCategoria}`);
    }
    onClose();
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{id ? "Editar Categoría" : "Agregar Categoría"}</AlertDialogTitle>
          <AlertDialogDescription>
            {id ? "Modifica el nombre de la categoría y guarda los cambios." : "Ingresa el nombre de la nueva categoría."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Label e Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Categoría</label>
          <input
            type="text"
            value={nombreCategoria}
            onChange={(e) => setNombreCategoria(e.target.value)}
            className="border p-2 rounded-md w-full"
            placeholder="Nombre de la categoría"
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cerrar</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>{id ? "Actualizar" : "Crear"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ModalCategoria;
