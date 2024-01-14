import doctors from "../assets/images/Doctors.gif";
import {BiSolidUserRectangle} from 'react-icons/bi'
import {HiCurrencyRupee} from 'react-icons/hi'
import {TbTruckDelivery} from 'react-icons/tb'
import {RiBookmark3Fill} from 'react-icons/ri'

const About = () => {
  return (
    <div className="mt-16 h-fullg mx-5 rounded-t" id="about">
      <div>
        <h1 className="md:text-4xl font-bold text-center uppercase md:pt-2 text-3xl pt-10 font-jkl">
          <span className="text-green-500">About</span> Us
        </h1>
      </div>

      <div className="md:flex justify-between items-center my-16 block">
        <div className="md:w-[40vw] md:pl-20 md:px-0 px-10">
          <img
            src={doctors}
            alt=""
            className="md:w-[100vw] md:h-[60vh] rounded"
          />
        </div>

        <div className="md:w-[45vw] md:pr-20 md:px-0 px-2">
          <h2 className="md:text-3xl md:text-left font-semibold my-5 md:w-96 drop-shadow-sm text-gray-600 text-2xl text-center w-80 font-ghi ">
            We Take Care Of Your Healthy Life
          </h2>
          <p className="md:py-1 md:text-left text-center py-5 font-abc">
            Welcome to our medicine delivery service in Kalyan! We take pride in
            providing trusted brands at cheap prices, ensuring affordable
            healthcare for all. With our exclusive focus on Kalyan, we offer
            free delivery, ensuring convenience and accessibility for our valued
            customers. Trust us to deliver your medications securely, promptly,
            and hassle-free.
          </p>
          
        </div>
      </div>

      {/*  */}
      <div className="md:h-56 md:flex md:justify-evenly md:py-0 bg-emerald-600 h-full py-1">
        <div className="md:h-44 md:w-44 mx-6 my-6 border-2 shadow bg-white shadow-green-600 h-full border-green-400">
            <div className="px-2 text-center">
              <BiSolidUserRectangle className="mx-auto my-4 text-4xl"/>
              <h2 className="text-5xl font-bold">80+</h2>
              <p className="my-4 font-semibold">Customers</p>
            </div>
        </div>
        <div className="md:h-44 md:w-44 mx-6 my-6 border-2 shadow  bg-white shadow-green-600 h-full border-green-400">
            <div className="px-2 text-center">
              <HiCurrencyRupee className="mx-auto my-4 text-4xl"/>
              <h2 className="text-5xl font-bold">100%</h2>
              <p className="my-4 font-semibold">Low Price</p>
            </div>
        </div>
        <div className="md:h-44 md:w-44 mx-6 my-6 border-2 shadow  bg-white shadow-green-600 h-full border-green-400">
            <div className="px-2 text-center">
              <TbTruckDelivery className="mx-auto my-4 text-4xl"/>
              <h2 className="text-5xl font-bold">Free</h2>
              <p className="my-4 font-semibold">Delivery</p>
            </div>
        </div>
        <div className="md:h-44 md:w-44 mx-6 my-6 border-2 shadow  bg-white shadow-green-600 h-full border-green-400">
            <div className="px-2 text-center">
              <RiBookmark3Fill className="mx-auto my-4 text-4xl"/>
              <h2 className="text-5xl font-bold">Top</h2>
              <p className="my-4 font-semibold">Brands</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;