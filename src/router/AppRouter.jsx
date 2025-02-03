import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Brand from "../pages/Brand";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Home from "../pages/Home";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
        
          <Route path="" element={<Dashboard />} >
          {/* <Route path="" element={<Home/>}/> bunun yerine alttaki index yazanıda da kullanabiliriz */}
          <Route index element={<Home/>}/>
          <Route path="firms" element={<Firms/>} />
          <Route path="brand" element={<Brand/>} />
          <Route path="sales" element={<Sales/>} />
          <Route path="purchases" element={<Purchases/>} />
          <Route path="products" element={<Products/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
