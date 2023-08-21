import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import DashboardPage from "./views/DashboardPage";
import CreatePage from "./views/CreatePage";
import DetailsPage from "./views/DetailsPage";
import EditPage from "./views/EditPage"
// dashboard, create, update, details
function App() {
  return (
    <div className="App">
      <h1>Travel Adviser</h1>
      <Routes>
        <Route path="/destinations" elements={<DashboardPage/>}/>
        <Route path="/destinations/new" elements={<CreatePage/>}/>
        <Route path="/destinations/:id" elements={<DetailsPage/>}/>
        <Route path="/destinations/:id/edit" elements={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
