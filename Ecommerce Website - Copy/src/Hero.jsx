// import { products } from "./assets/products";
import { useNavigate } from "react-router-dom";
import ProductsPage from "./ProductsPage";

const Hero = ({ category, setCategory, setDetail, products, deal }) => {
  const navigate = useNavigate();
  const handleClick = (value) => {
    setCategory(value.toUpperCase()); ///seting Category
    navigate("/search");
  };

  return (
    <div className="Hero flex flex-col justify-center flex-grow h-full">
      <div className="heroImgContainer  md:mr-0 w-full bg-fixed flex justify-center items-center">
        <div className="md:mr-72 mr-2 mt-40 flex flex-col">
          <h2 className="text-gray-500 font-semibold text-3xl md:text-5xl font-serif md:mr-10">
            End Of Season Sale
          </h2>
          <button
            onClick={() => {
              window.scrollTo({
                top: 800,
                behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
              });
            }}
            className="bg-white p-2 mr-32 md:ml-96 hover:shadow-lg hover:shadow-slate-100 hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </div>
      <h1
        animate={{ fontSize: "60px", color: "#45433e" }}
        className="font-bold text-5xl mt-32 md:m-8 text-center"
      >
        Categories
      </h1>
      <div className="categoryContainer">
        <div className="categorySection flex flex-col items-center md:flex-row mb-36">
          <div
            className="categorycard flex m-10 items-center flex-col w-40 h-40 md:w-1/2 "
            onClick={() => handleClick("Mobile Phone")}
          >
            <img
              className="w-36 h-36 hover:scale-110  "
              src="https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
              alt="Phone Image"
            />
            <h4>Mobile phone</h4>
          </div>
          <div
            className="categorycard flex m-10 items-center flex-col w-40 h-40 md:w-1/2 "
            onClick={() => handleClick("Laptop")}
          >
            <img
              className="w-36 h-36 hover:scale-110"
              src="https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg"
              alt="laptop"
            />
            <h4 className="text">Laptops</h4>
          </div>
          <div
            className="categorycard flex m-10 items-center flex-col w-40 h-40 md:w-1/2 "
            onClick={() => handleClick("Sport")}
          >
            <img
              className="w-36 h-36 hover:scale-110"
              src="https://intersport.com.au/wp-content/uploads/U_DN3606_100_V1-550x550.jpg"
              alt="sport"
            />
            <h4>Sports</h4>
          </div>
          <div
            className="categorycard flex m-10 items-center flex-col w-40 h-40 md:w-1/2 "
            onClick={() => handleClick("Clothing")}
          >
            <img
              className="w-36 h-36 hover:scale-110"
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              alt="Cloth"
            />
            <h4>Clothing</h4>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-center">Deal of the day</h2>
      <div className="dealsHero flex flex-col justify-around items-center md:flex-row m-36">
        {deal.map((element) => {
          return (
            <div
              className="productList flex flex-col items-center w-64 hover:shadow-lg"
              key={element.id}
              onClick={() => {
                setDetail((prev) => element);
                navigate("/details");
              }}
            >
              <img src={element.thumbnail} alt="" className="w-52 h-52" />
              <h4 className="text-center items-center">{element.title}</h4>
              <p>
                <strong>Price:</strong> ₹{element.price}
              </p>
            </div>
          );
        })}
      </div>
      <ProductsPage products={products} setDetail={setDetail} />
    </div>
  );
};

export default Hero;
