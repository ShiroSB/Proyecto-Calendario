import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import NewObjective from "./components/NewObjective";
import Home from "./components/home";
import DeleteID from "./components/DeleteID";
import ShowObjective from "./components/ShowObjective";
import EditEdit from "./components/EditEdit";
import GuardarFecha from "./components/GuardarFecha";

function App() {
  return (
    <Router>
      <nav>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/newobjective">New Objective</NavLink>
          </li>
          <li>
            <NavLink to="/deleteid">Delete Objective</NavLink>
          </li>
          <li>
            <NavLink to="/showobjective">Show Objective</NavLink>
          </li>
          <li>
            <NavLink to="/editedit">Edit Edit</NavLink>
          </li>
          <li>
            <NavLink to="/guardarfecha">Login</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newobjective" element={<NewObjective />} />
        <Route path="/deleteid" element={<DeleteID />} />
        <Route path="/showobjective" element={<ShowObjective />} />
        {/* <Route path="/editobjective" element={<EditObjective />} /> */}
        <Route path="/editedit" element={<EditEdit />} />
        <Route path="/guardarfecha" element={<GuardarFecha />} />
      </Routes>
    </Router>
  );
}
export default App;
