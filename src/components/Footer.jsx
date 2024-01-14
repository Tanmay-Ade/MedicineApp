import FooterItems from "./FooterItems";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white md:mt-20 mt-40 font-abc">
      <FooterItems/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2023 Appy. All rights reserved</span>
        <span>Terms Privacy Policy</span>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;