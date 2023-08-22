import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import DashboardPage from "./components/DashboardPage";
import CreatePage from "./components/CreatePage";
import DetailsPage from "./components/DetailsPage";
import EditPage from "./components/EditPage"
// dashboard, create, update, details
function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/products" elements={<DashboardPage/>}/>
        <Route path="/products/new" elements={<CreatePage/>}/>
        <Route path="/products/:id" elements={<DetailsPage/>}/>
        <Route path="/products/:id/edit" elements={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;