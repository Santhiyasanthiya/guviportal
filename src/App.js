import logo from './logo.svg';
import './App.css';
import { Register } from './Pages/Register';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import Login from './Pages/Login';
import { PageNotFound } from './Pages/PageNotFound';
import { ProtectedRoute } from './Pages/ProtectedRoute';

function App() {
  return (
   <div>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>   } />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
       
      </Routes>
   </div>
  )
}
export default App