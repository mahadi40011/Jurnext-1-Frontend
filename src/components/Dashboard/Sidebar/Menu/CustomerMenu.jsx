import { GiTakeMyMoney } from "react-icons/gi";
import { IoBookmarks, IoHome } from "react-icons/io5";
import MenuItem from "../../../Shared/MenuItem";
import { FaTicketAlt } from "react-icons/fa";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem label="Home" address="/" icon={IoHome} />
      <MenuItem label="All Ticket" address="/all-ticket" icon={FaTicketAlt} />
      <MenuItem
        icon={IoBookmarks}
        label="My Booked Ticket"
        address="my-booked-ticket"
      />
      <MenuItem
        icon={GiTakeMyMoney}
        label="Transaction History"
        address="transaction-history"
      />
    </>
  );
};

export default CustomerMenu;
