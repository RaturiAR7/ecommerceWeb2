// import { products } from "./assets/products";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DetailPage = ({ detail, setDetail, addToCart, products }) => {
  const onClickDetail = (product) => {
    setDetail((prev) => product);
  };
  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
    });
  };

  return (
    <div className="container flex flex-col w-full">
      {scrollToTop()}
      <h1 className="text-center font-extrabold text-4xl">Details Page</h1>
      <div className="flex flex-col md:flex-row lg:justify-around items-center mt-20 w-full">
        <div className="flex justify-center items-center md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            autoFocus
            className="w-2/3 h-2/3 md:w-1/2"
          >
            <div>
              <img src={detail.images[0]} />
            </div>
            <div>
              <img src={detail.images[1]} />
            </div>
            <div>
              <img src={detail.images[2]} />
            </div>
            {/* <div>
              <img src={detail.images[3]} />
            </div> */}
          </Carousel>
        </div>
        <div className="info w-1/2 md:w-1/2 items-center text-center">
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-lg">
            <strong>Description: </strong> {detail.description}
          </p>
          <p>
            <strong>Price:</strong>₹{detail.price}
          </p>
          <button
            className="detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200"
            onClick={() => addToCart(detail.id)}
          >
            Add to cart
          </button>
          <button
            className="detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200"
            onClick={() => alert("Order Placed")}
          >
            Order Now
          </button>
        </div>
      </div>
      <h2 className="text-center font-extrabold text-4xl m-32">
        Related Products
      </h2>
      <div className="grid md:grid-cols-3">
        {products.map((product) => {
          if (product.category === detail.category)
            return (
              <div
                className="relatedProductm-10 items-center flex flex-col hover:shadow-2xl"
                onClick={() => onClickDetail(product)}
              >
                <img className="w-60 h-60" src={product.thumbnail} alt="" />
                <h2>{product.title}</h2>
                <h4>{`Price: ₹ ${product.price}`}</h4>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
