import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import Header from "components/Header";
import { useCreateLiderMutation } from "state/api";

export default function NewLiderForm() {
  const [createLider, { isLoading }] = useCreateLiderMutation();

  function submitLider(event) {
    event.preventDefault();
    createLider(event.target['nombre'].value);
    event.target.reset();
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Registro de lideres" subtitle="" />
      <Box mt="40px" height="75vh">
        <form onSubmit={(e) => submitLider(e)}>
          <input type='text' id='nombre' placeholder="Nombre del lider" />
          <input type='text' id='ciudad' placeholder="Ciudad donde vota" />
          <input type='text' id='cedula' placeholder="Cedula del lider" />
          <input type='text' id='celular' placeholder="Numero de celular" />
          <input type='text' id='correo' placeholder="Correo del lider" />
          <input type='submit' value='add new Lider' disabled={isLoading} />
          {isLoading && ' Loading...'}
        </form>
      </Box>
    </Box>
  );
}

// const Registrar = () => {
//   const [nombre, setNombre] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [cedula, setCedula] = useState('');
//   const [celular, setCelular] = useState('');
//   const [correo, setCorreo] = useState('');
//   const createLiderMutation = useCreateLiderMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newLider = await createLiderMutation.mutateAsync({
//         nombre,
//         ciudad,
//         cedula,
//         celular,
//         correo,
//       });
//       console.log('Nuevo lider creado:', newLider);
//       // Realiza alguna acción adicional después de la creación del usuario
//     } catch (error) {
//       console.error('Error al crear el lider:', error);
//       // Maneja el error de alguna manera
//     }
//   };

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="Registro de lideres" subtitle="" />
//       <Box mt="40px" height="75vh">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Nombre del lider"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Ciudad donde vota"
//             value={ciudad}
//             onChange={(e) => setCiudad(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Cedula del lider"
//             value={cedula}
//             onChange={(e) => setCedula(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Numero de celular"
//             value={celular}
//             onChange={(e) => setCelular(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Correo del lider"
//             value={correo}
//             onChange={(e) => setCorreo(e.target.value)}
//           />
//           <button type="submit">Crear Lider</button>
//         </form>
//       </Box>
//     </Box>
//   );
// };
