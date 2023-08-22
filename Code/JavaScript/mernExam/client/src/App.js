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
      <h1>Store Finder</h1>
      <p>
        <Link to="/stores">Dashboard</Link>
      </p>
      <Routes>
        <Route path="/stores" element={<DashboardPage/>}/>
        <Route path="/stores/new" element={<CreatePage/>}/>
        <Route path="/stores/:id" element={<DetailsPage/>}/>
        <Route path="/stores/:id/edit" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
