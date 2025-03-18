
import {Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Home from "./pages/Home.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignUp from "./pages/UserSignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignUp/>} />

      </Routes>
    </div>
  )
};

export default App;
