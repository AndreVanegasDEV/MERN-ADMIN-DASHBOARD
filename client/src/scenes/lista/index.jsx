import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetLideresQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Lideres = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetLideresQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
    },
    {
      field: "ciudad",
      headerName: "Ciudad",
      flex: 0.5,
    },
    {
      field: "cedula",
      headerName: "Cedula",
      flex: 0.5,
    },
    {
      field: "celular",
      headerName: "Celular",
      flex: 0.6,
    },
    {
      field: "correo",
      headerName: "Correo",
      flex: 1,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Lideres" subtitle="" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Lideres;
