// import doctors from "../photos/Online Doctor.gif";
import doctors from '../assets/images/Online Doctor.gif'

const Contact = () => {
  return (
    <div className="md:h-screen mt-28 mx-5 pb-5" id="contact">
      <h1 className="text-4xl text-center font-bold uppercase p-5 font-jkl">
        Contact <span className="text-emerald-600">Me</span>{" "}
      </h1>

      <div className="mt-10 md:flex md:justify-around">
        <div>
          <img
            src={doctors}
            alt=""
            className="md:h-96 md:w-96 md:my-0 h-80 w-80 mx-auto my-10"
          />
        </div>

        <div>
          <form
            action=""
            className="border-2 border-emerald-600 md:h-96 md:w-96 text-center py-5 mx-5"
          >
            <h1 className="text-2xl font-bold uppercase my-5 text-gray-700 font-jkl">
              Order Now!
            </h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="block md:w-80 w-64 mx-auto my-5 py-2 border-2 border-emerald-600 p-2 outline-none font-abc"
            />
            <input
              type="phone"
              placeholder="+91"
              className="block md:w-80 w-64 mx-auto my-5 py-2 border-2 border-emerald-600 p-2 outline-none font-abc"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="block md:w-80 w-64 mx-auto my-5 py-2 border-2 border-emerald-600 p-2 outline-none font-abc"
            />
            <button className="border border-b-4 border-emerald-600 px-10 py-2 md:mt-5 text-emerald-600 font-semibold hover:border-emerald-700 hover:text-emerald-800 hover:font-bold font-jkl">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;