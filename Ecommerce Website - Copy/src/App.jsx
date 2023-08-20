import "./App.css";
import "./index.css";
import Cart from "./Cart";
import ProductsPage from "./ProductsPage";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SearchPage from "./SearchResult";
import DetailPage from "./DetailPage";
import {
  Route,
  Routes,
  json,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import LogIn from "./LogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";

const HeroLazy = lazy(() => import("./Hero"));

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({});
  const [deal, setDeal] = useState([]); ////Deal of the day

  const navigate = useNavigate();
  let location = useLocation();
  const addToCart = (id) => {
    if (loggedIn) {
      if (!cart.includes(id)) {
        setCart((prevItems) => [...prevItems, Number(id)]);
        notify();
      }
    } else {
      notify();
      navigate("/login");
    }
  };

  const fetchProducts = async () => {
    try {
      const url = " https://dummyjson.com/products/";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    let deals = [];
    const randomDeal = () => {
      while (deals.length < 3) {
        let randomIndex = Math.floor(Math.random() * 10);
        deals.push(randomIndex);
      }
    };
    setDeal((prev) => []);
    randomDeal();
    products.forEach((element) => {
      if (deals.includes(element.id)) {
        setDeal((prev) => [...prev, element]);
      }
    });
  }, [products]);
  console.log(products);

  const deleteFromCart = (id) => {
    const newArr = [];
    cart.forEach((element) => {
      if (element !== id) newArr.push(element);
    });
    setCart((prev) => newArr);
  };

  const notify = () => toast(loggedIn ? "Added to cart" : "Log in first!");
  return (
    <div className="box-border relative">
      {location.pathname != "/login" && (
        <Navbar category={category} setCategory={setCategory} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route
          path="/"
          element={
            // <Hero
            //   category={category}
            //   setCategory={setCategory}
            //   setDetail={setDetail}

            // />
            <Suspense fallback={<h1>Loading...</h1>}>
              <HeroLazy
                products={products}
                category={category}
                setCategory={setCategory}
                setDetail={setDetail}
                deal={deal}
              />
            </Suspense>
          }
        />
        <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} />} />
        <Route
          path="/cart"
          element={
            <Cart
              deleteFromCart={deleteFromCart}
              cart={cart}
              products={products}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              products={products}
              category={category}
              addToCart={addToCart}
              setDetail={setDetail}
              setCategory={setCategory}
            />
          }
        />
        <Route
          path="/details"
          element={
            <DetailPage
              detail={detail}
              setDetail={setDetail}
              addToCart={addToCart}
              products={products}
            />
          }
        />
        <Route
          path="/allProducts"
          element={<ProductsPage addToCart={addToCart} setDetail={setDetail} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
}

export default App;
