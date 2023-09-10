import { Box, Button, IconButton, Paper, Stack } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

// ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

// COMPONENTS
import PageTitle from "../../components/PageTitle";
import DataTable from "../../components/DataTable";
import Breadcumbs from "../../components/Breadcumbs";
import { User } from "./types/User";

function List() {
  const navigate = useNavigate();

  const onCall = (params: GridRenderCellParams) => {
    // se existe o número de telefone, abre o WhatsApp
    if (!params.row.mobile) return;

    window.location.href = `https://wa.me/55${params.row.mobile.replace(
      /[^\d]+/g,
      ""
    )}`;
  };

  const onEdit = (params: GridRenderCellParams) => {
    // se existe o id, navega para a página de edição
    if (!params.row.id) return;
    navigate(`/users/${params.row.id}`);
  };

  const onDelete = (params: GridRenderCellParams) => {
    // se existe o id, remove o usuário
    if (!params.row.id) return;
    setUsers(users.filter((user) => user.id !== params.row.id));
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

  const [users, setUsers] = useLocalStorage<User[]>("users", []);

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
