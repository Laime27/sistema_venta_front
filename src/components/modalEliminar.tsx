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
  
  interface ModalEliminarProps {
    abierto: boolean;
    cerrar: () => void;
    idElemento: number | string | null;
    eliminar: (id: number | string) => void;
    titulo?: string;
    descripcion?: string;
  }
  
  function ModalEliminar({
    abierto,
    cerrar,
    idElemento,
    eliminar,
    titulo = "¿Estás seguro?",
    descripcion = "Esta acción no se puede deshacer.",
  }: ModalEliminarProps) {
    
    const manejarEliminar = () => {
      if (idElemento !== null) {
        eliminar(idElemento);
        cerrar();
      }
    };
  
    return (
      <AlertDialog open={abierto}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{titulo}</AlertDialogTitle>
            <AlertDialogDescription>{descripcion}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cerrar}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={manejarEliminar}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  
  export default ModalEliminar;
  