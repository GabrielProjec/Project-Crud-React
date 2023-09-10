import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/users">
        <Route path="/users" element={<>Users</>} />
        <Route path="/users/new" element={<>New Users</>} />
        <Route path="/users/:id" element={<>Edit Users</>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
