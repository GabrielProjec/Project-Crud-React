import { Box, Button, IconButton, Paper, Stack } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Link as RouterLink } from "react-router-dom";

// ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

// COMPONENTS
import PageTitle from "../../components/PageTitle";
import DataTable from "../../components/DataTable";
import Breadcumbs from "../../components/Breadcumbs";

function List() {
  const onCall = (params: GridRenderCellParams) => {
    // Chamada via WhatsApp
  };

  const onEdit = (params: GridRenderCellParams) => {
    // Edição de usuário
  };

  const onDelete = (params: GridRenderCellParams) => {
    // Exclusão de usuário
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "Nome",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.fullName.split(" ")?.shift() || ""}`,
    },
    {
      field: "lastName",
      headerName: "Sobrenome",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.fullName.split(" ")?.pop() || ""}`,
    },
    { field: "document", headerName: "CPF", width: 150 },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      valueGetter: (params: GridValueGetterParams) =>
        params.row.birthDate &&
        `${
          new Date().getFullYear() -
          new Date(params.row.birthDate).getFullYear()
        }`,
    },
    { field: "email", headerName: "E-mail", width: 200 },
    { field: "mobile", headerName: "Celular", width: 180 },
    {
      field: "actions",
      headerName: "Ações",
      minWidth: 150,
      renderCell: (params) => (
        <Stack direction="row" spacing={2}>
          <IconButton
            color="success"
            size="small"
            onClick={() => onCall(params)}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>

          <IconButton color="info" size="small" onClick={() => onEdit(params)}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            color="error"
            size="small"
            onClick={() => onDelete(params)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const users = [
    {
      id: "1",
      fullName: "Felipe Fontoura",
      document: "986.007.560-30",
      birthDate: new Date(1982, 1, 1),
      email: "felipe@teste.com.br",
      emailVerified: true,
      mobile: "(11) 99999-9999",
      zipCode: "00000-000",
      addressName: "Rua Teste",
      number: "123",
      complement: "",
      neighborhood: "Bairro Teste",
      city: "São Paulo",
      state: "SP",
    },
  ];
  return (
    <div>
      <Stack direction={{ xs: "column", sm: "row" }} gap={1} mb={2}>
        <Box sx={{ flexGrow: 1 }}>
          <PageTitle title="Lista" />
          <Breadcumbs
            path={[{ label: "Usuarios", to: "/users" }, { label: "Lista" }]}
          />
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          <Button
            component={RouterLink}
            to="/users/new"
            variant="contained"
            startIcon={<PersonAddAltIcon />}
          >
            Novo Usuário
          </Button>
        </Box>
      </Stack>
      <Paper>
        <DataTable rows={users} columns={columns} />
      </Paper>
    </div>
  );
}

export default List;
