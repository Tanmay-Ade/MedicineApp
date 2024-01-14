import { BiSolidChevronRightSquare } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { HiCurrencyRupee } from "react-icons/hi";

const Service = () => {
  return (
    <div className="mx-5 md:h-screen mt-32 bg-yellow-50" id="service">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold uppercase pt-2 font-jkl">
          Our <span className="text-green-500">Services</span>
        </h1>
      </div>

      <div className="md:h-96 md:w-full mt-16 md:flex md:justify-evenly sm:block">
        <div className="border-2 border-green-500 shadow-lg shadow-green-200 md:h-96 md:w-80 rounded-md bg-white h-96 mx-5 my-10 sm:w-[55vw] sm:mx-auto">
          <GiMedicines className="mx-5 my-5 text-3xl text-green-600" />
          <h2 className="mx-5 my-5 font-bold text-xl font-jkl">Medicine</h2>
          <p className="mx-5 font-abc text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe eaque vero asperiores animi voluptatum ullam, architecto vitae
            ab dolorem facere laudantium beatae nam aut eligendi cum sapiente
            odio enim?
          </p>
          <button className="mx-5 mt-10 border-2 border-green-400 px-2 py-1 text-green-500 font-semibold">
            <h1 className="flex justify-evenly items-center gap-2 hover:text-green-600 hover:gap-5">
              Learn More <BiSolidChevronRightSquare className="text-2xl" />
            </h1>
          </button>
        </div>

        <div className="border-2 border-green-500 shadow-lg shadow-green-200 md:h-96 md:w-80 rounded-md bg-white h-96 mx-5 my-10 sm:w-[55vw] sm:mx-auto">
          <HiCurrencyRupee className="mx-5 my-5 text-3xl text-green-600" />
          <h2 className="mx-5 my-5 font-bold text-xl font-jkl">Low Price</h2>
          <p className="mx-5 font-abc text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe eaque vero asperiores animi voluptatum ullam, architecto vitae
            ab dolorem facere laudantium beatae nam aut eligendi cum sapiente
            odio enim?
          </p>
          <button className="mx-5 mt-10 border-2 border-green-400 px-2 py-1 text-green-500 font-semibold">
            <h1 className="flex justify-evenly items-center gap-2 hover:text-green-600 hover:gap-5">
              Learn More <BiSolidChevronRightSquare className="text-2xl" />
            </h1>
          </button>
        </div>

        <div className="border-2 border-green-500 shadow-lg shadow-green-200 md:h-96 md:w-80 rounded-md bg-white h-96 mx-5 my-10 sm:w-[55vw] sm:mx-auto">
          <TbTruckDelivery className="mx-5 my-5 text-3xl text-green-600" />
          <h2 className="mx-5 my-5 font-bold text-xl font-jkl">Free Delievery</h2>
          <p className="mx-5 font-abc text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe eaque vero asperiores animi voluptatum ullam, architecto vitae
            ab dolorem facere laudantium beatae nam aut eligendi cum sapiente
            odio enim?
          </p>
          <button className="mx-5 mt-10 border-2 border-green-400 px-2 py-1 text-green-500 font-semibold">
            <h1 className="flex justify-evenly items-center gap-2 hover:text-green-600 hover:gap-5">
              Learn More <BiSolidChevronRightSquare className="text-2xl" />
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;