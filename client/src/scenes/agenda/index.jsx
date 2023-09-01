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
import { useGetReunionesQuery } from "state/api";

const Reunion = ({
  _id,
  nombre,
  zona,
  fecha,
  hora,
  descripcion,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {zona}
        </Typography>
        <Typography variant="body2">{fecha}</Typography>
        <Typography variant="body2">{hora}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
      </CardContent>
    </Card>
  );
};

const Reuniones = () => {
  const { data, isLoading } = useGetReunionesQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Agenda politica" subtitle="" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              nombre,
              zona,
              fecha,
              hora,
              descripcion,
            }) => (
              <Reunion
                key={_id}
                _id={_id}
                nombre={nombre}
                zona={zona}
                fecha={fecha}
                hora={hora}
                descripcion={descripcion}
              />
            )
          )}
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Reuniones;
