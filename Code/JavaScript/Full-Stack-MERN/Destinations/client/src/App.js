import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import DashboardPage from "./views/DashboardPage";
import CreatePage from "./views/CreatePage";
import DetailsPage from "./views/DetailsPage";
import EditPage from "./views/EditPage"
// dashboard, create, update, details
function App() {
  return (
    <div className="container mt-5">
      <h1>Travel Adviser</h1>
      <p>
        <Link to="/destinations">Dashboard</Link> |
        <Link to="/destinations/new"> Create a new destination</Link>
      </p>
      <Routes>
        <Route path="/destinations" element={<DashboardPage/>}/>
        <Route path="/destinations/new" element={<CreatePage/>}/>
        <Route path="/destinations/:id" element={<DetailsPage/>}/>
        <Route path="/destinations/:id/edit" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
