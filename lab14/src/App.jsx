import Index from './pages/Index';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/loginCastillo" element={<Login />} />
      <Route path="/forgotpasswordCastillo" element={<ForgotPassword />} />
      <Route path="/registerCastillo" element={<Register />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;