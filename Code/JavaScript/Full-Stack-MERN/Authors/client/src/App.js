import './App.css';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import DashboardPage from "./components/DashboardPage";
import CreatePage from "./components/CreatePage";
import DetailsPage from "./components/DetailsPage";
import EditPage from "./components/EditPage"
// dashboard, create, update, details
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <p>
        <Link to="/authors">Dashboard</Link>|
        <Link to="/authors/new"> Add an author </Link>
      </p>
      <Routes>
        <Route path="/authors" element={<DashboardPage/>}/>
        <Route path="/authors/new" element={<CreatePage/>}/>
        <Route path="/authors/:id" element={<DetailsPage/>}/>
        <Route path="/authors/:id/edit" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
