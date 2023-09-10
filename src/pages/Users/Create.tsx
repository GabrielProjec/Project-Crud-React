import { Box, Paper, Stack } from "@mui/material";
import Form from "./components/Form";
import PageTitle from "../../components/PageTitle";
import Breadcrumbs from "../../components/Breadcumbs";

function Create() {
  return (
    <div>
      <Stack direction={{ xs: "column", sm: "row" }} gap={1} mb={2}>
        <Box sx={{ flexGrow: 1 }}>
          <PageTitle title="Lista" />
          <Breadcrumbs
            path={[{ label: "Usuarios", to: "/users/" }, { label: "Novo" }]}
          />
        </Box>
      </Stack>
      <Paper>
        <Form />
      </Paper>
    </div>
  );
}

export default Create;
