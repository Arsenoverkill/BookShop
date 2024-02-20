import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import BookShop from "./pages/BookShop/BookShop";
import Books from "./pages/Books/Books";
import Categories from "./pages/Categories/Categories";
import { useState } from "react";
import Search from "./pages/Search/Search";
import Order from "./pages/Order/Order";
import Admin from "./pages/Admin/Admin";
import Password from "./pages/Password/Password";

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="App">
      <Header setValue={setValue} />
      <Routes>
        <Route path="/" element={<BookShop />} key={1} />
        <Route path="/books" element={<Books />} key={2} />
        <Route path="/books/:id" element={<Categories />} key={3} />
        <Route path="/search" element={<Search values={value} />} key={4} />
        <Route path="/order" element={<Order />} key={5} />
        <Route path="/admin" element={<Admin />} key={6} />
        <Route path="/password" element={<Password />} key={7} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
