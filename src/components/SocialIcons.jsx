import {BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram, BiLogoWhatsapp} from 'react-icons/bi'

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 
        ">
          <BiLogoFacebookCircle/> 
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 
        ">
          <BiLogoTwitter/> 
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 
        ">
          <BiLogoInstagram/> 
      </span>
      <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 
        ">
          <BiLogoWhatsapp/> 
      </span>
    </div>
  );
};

export default SocialIcons;