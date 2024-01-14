import pharma from "../assets/images/Medicine.gif";
import {RiWhatsappFill} from 'react-icons/ri'

const Home = () => {
  return (
    <div
      className="md:h-screen mx-5 bg-emerald-600 text-white md:flex justify-between items-center mt-10 shadow-md pb-10 rounded"
      id="home"
    >
      <img
        src={pharma}
        alt=""
        className="2xl:h-[45vh] 2xl:w-[35vw] px-1 pt-10 sm:w-80 md:h-96 h-64 mx-auto"
      />

      <div className="2xl:w-[45vw] md:w-[50vw] md:pl-10 mt-16 mx-4">
        <h1 className="2xl:text-5xl md:text-5xl font-bold text-3xl md:text-left text-center font-def ">
          Stay Safe, Stay Healthy
        </h1>
        <p className="2xl:text-lg pt-10 md:text-left text-justify font-abc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          eaque cumque nihil, corporis voluptas, ipsam nulla natus temporibus
          consequatur aperiam perferendis quibusdam tempora modi, facere ad
          asperiores ratione? Eum, officiis?
        </p>
        <button className="2xl:text-lg 2xl:p-3 border border-b-4 border-teal-900 md:mt-10 p-2 rounded md:w-40 font-semibold w-full min-[500px]:w-[50vw] mt-5 hover:border-teal-800 hover:font-bold">
          <h1 className="flex md:justify-evenly md:items-center justify-center items-center md:gap-0 gap-2 hover:gap-5 font-abc">Contact Me <RiWhatsappFill className="text-xl hover:text-2xl"/> </h1>
        </button>
      </div>
    </div>
  );
};

export default Home;