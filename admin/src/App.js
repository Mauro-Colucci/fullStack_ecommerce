import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct"
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/users" element={<UserList/>}/>
         <Route path="/user/:userId" element={<User/>}/>
         <Route path="/newUser" element={<NewUser/>}/>
         <Route path="/newProduct" element={<NewProduct/>}/>
         <Route path="/products" element={<ProductList/>}/>
         <Route path="/product/:productsId" element={<Product/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
