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
import { useCreateVotanteMutation } from "state/api";


const Inscribir = () => {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [cedula, setCedula] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const createVotanteMutation = useCreateVotanteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVotante = await createVotanteMutation.mutateAsync({
        nombre,
        ciudad,
        cedula,
        celular,
        correo,
        edad,
      });
      console.log('Nuevo votante creado:', newVotante);
      // Realiza alguna acción adicional después de la creación del usuario
    } catch (error) {
      console.error('Error al crear el votante:', error);
      // Maneja el error de alguna manera
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Registro de simpatizante" subtitle="" />
      <Box mt="40px" height="75vh">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre del votante"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Edad del votante"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ciudad donde vota"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cedula del votante"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
          <input
            type="text"
            placeholder="Numero de celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <input
            type="text"
            placeholder="Correo del votante"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button type="submit">Crear Simpatizante</button>
        </form>
      </Box>
    </Box>
  );
};

export default Inscribir;