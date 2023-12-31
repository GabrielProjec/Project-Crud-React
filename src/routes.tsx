import { Route, Routes } from "react-router-dom";

//PAGES
import UserCreate from "./pages/Users/Create";
import UserEdit from "./pages/Users/Edit";
import UserList from "./pages/Users/List";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/users">
        <Route path="/users" element={<UserList />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserEdit />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
