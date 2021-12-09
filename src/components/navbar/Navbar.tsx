import { IoNotificationsSharp, IoChatbox, IoSettings } from "react-icons/io5";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Lama App</span>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <IoNotificationsSharp fontSize={25} />
          <div className={classes.counter}>2</div>
        </div>
        <div className={classes.icon}>
          <IoChatbox fontSize={25} />
          <div className={classes.counter}>2</div>
        </div>
        <div className={classes.icon}>
          <IoSettings fontSize={25} />
          <div className={classes.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
