import "./App.css";
import { useNavigate } from "react-router-dom";
// import { products } from "./assets/products";
const ProductsPage = ({ addToCart, products, setDetail }) => {
  const navigate = useNavigate();
  const onClickHandler = (product) => {
    setDetail(product);
    navigate("/details");
  };
  return (
    <div className="productsPage text-center w-full">
      <h1 className="text-5xl font-extrabold mt-4 mb-14">Products</h1>
      <div className="allproducts grid md:grid-cols-4 w-full ">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="productList p-10 flex flex-col justify-center items-center"
              onClick={() => onClickHandler(product)}
            >
              <img
                className="h-1/2 hover:scale-105"
                src={product.thumbnail}
                alt="productImage"
              />
              <h2>{product.title}</h2>
              <h4>{`Price: ${product.price}`}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
