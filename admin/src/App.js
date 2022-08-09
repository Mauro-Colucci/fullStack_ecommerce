import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct"
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";


function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin ;

  const AppLayout = ({admin}) => admin ? (

    <>
      <Topbar/>
      <div className="container">
          <Sidebar/>
          <Outlet />
      </div>
    </>
  ) : null

  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<AppLayout admin={admin}/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/newProduct" element={<NewProduct/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:productsId" element={<Product/>}/>
          </Route>
      </Routes>

    </Router>
  );
}

export default App;

