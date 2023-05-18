import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './layout/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from './layout/AppRoutes';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
