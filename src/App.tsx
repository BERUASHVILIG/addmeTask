import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import User from "./pages/User";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddUser />} />
      <Route path="/User" element={<User />} />
    </Routes>
  );
};

export default App;
