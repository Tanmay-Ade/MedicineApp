import Items from "./Items";
import {
  QUICK_LINKS,
  OUR_SERVICES,
  CONTACT_INFO,
  FOLLOW_US,
} from './Menu';

const FooterItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items Links={QUICK_LINKS} title="QUICK_LINKS" />
      <Items Links={OUR_SERVICES} title="OUR_SERVICES" />
      <Items Links={CONTACT_INFO} title="CONTACT_INFO" />
      <Items Links={FOLLOW_US} title="FOLLOW_US" />
    </div>
  );
};

export default FooterItems;