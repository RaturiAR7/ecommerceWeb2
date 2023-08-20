import { lazy, Suspense } from "react";

const LazyEarth = lazy(() => import("./3DComponents/EarthRender"));

const Contact = () => {
  return (
    <div className="contact page">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-bold mb-5">Contact Us</h1>
        <p className=" text-xl w-1/2 text-center -mb-5">
          We would love to hear it from you. No matter from which part of the
          world you are, we would love to know your opinions and requests.
        </p>
      </div>
      <div className="contact flex flex-col md:flex-row justify-evenly items-center">
        <div className="form  md:w-1/3 text-center">
          <form className="bg-gray-200 h-96 rounded-xl mt-10 ">
            <label htmlFor="Name">Your Name-</label>
            <input
              autoComplete="off"
              type="text"
              className="w-1/2 border-2 rounded-md m-4 text-center"
              id="Name"
              name="Name"
              placeholder="Enter Your Name"
            />
            <br />
            <label htmlFor="mailId">You Mail ID-</label>
            <input
              type="text"
              name="mailId"
              autoComplete="off"
              id="mailId"
              className="w-1/2 border-2 rounded-md  m-4 text-center"
              placeholder="Enter Your Email Id"
            />
            <br />
            <label htmlFor="Enquiry">Your Enquiry</label>
            <br />
            <textarea
              name="Enquiry"
              id="Enquiry"
              autoComplete="off"
              cols="20"
              rows="6"
            />
            <br />
            <button className="bg-slate-500 w-20 rounded-md hover:bg-slate-400">
              Submit
            </button>
          </form>
        </div>
        <div className="earth h-screen w-80 md:w-1/2">
          <Suspense fallback={<h1 className="text-2xl mt-20">Loading...</h1>}>
            <LazyEarth />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contact;
