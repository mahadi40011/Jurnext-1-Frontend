import { GiTakeMyMoney } from "react-icons/gi";
import { IoBookmarks } from "react-icons/io5";
import MenuItem from "../../../Shared/MenuItem";

const CustomerMenu = () => {
  return (
    <>
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
