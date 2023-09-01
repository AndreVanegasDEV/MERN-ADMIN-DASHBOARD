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
import { useCreateReunionMutation } from "state/api";


const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [zona, setZona] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const createReunionMutation = useCreateReunionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReunion = await createReunionMutation.mutateAsync({
        nombre,
        zona,
        fecha,
        hora,
        descripcion,
      });
      console.log('Nueva reunión creada:', newReunion);
      // Realiza alguna acción adicional después de la creación del usuario
    } catch (error) {
      console.error('Error al crear la reunión:', error);
      // Maneja el error de alguna manera
    }
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Registro de Reuniones" subtitle="" />
      <Box mt="40px" height="75vh">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la reunión"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Zona de la reunión"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
          />
          <input
            type="text"
            placeholder="Fecha de la reunión"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <input
            type="text"
            placeholder="Hora de la reunión"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripcion de la reunión"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <button type="submit">Crear Reunión</button>
        </form>
      </Box>
    </Box>
  );
};

export default Registrar;