import { useEffect, useState } from "react";
import { IoNotificationsSharp, IoChatbox, IoSettings } from "react-icons/io5";
import classes from "./navbar.module.css";

interface NavbarType {
  socket: any;
  user: string;
}

const Navbar: React.FC<NavbarType> = ({ socket, user }: NavbarType) => {
  const [notifications, setNotifications] = useState<Array<any>>([]);
  const [open, setOpen] = useState<Boolean>(false);

  useEffect(() => {
    socket.on("getNotification", (data: any) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }: any) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span
        className={classes.notification}
      >{`${senderName} ${action} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className={classes.navbar}>
      <span className={classes.logo}>Lama App</span>
      <p>Hi {user}</p>
      <div className={classes.icons}>
        <div className={classes.icon} onClick={() => setOpen(!open)}>
          <IoNotificationsSharp fontSize={25} />
          {notifications.length > 0 && (
            <div className={classes.counter}>{notifications.length}</div>
          )}
        </div>
        <div className={classes.icon}>
          <IoChatbox fontSize={25} />
        </div>
        <div className={classes.icon}>
          <IoSettings fontSize={25} />
        </div>
        {open && (
          <div className={classes.notifications}>
            {notifications.map((notif) => displayNotification(notif))}
            <button className={classes.notificationButton} onClick={handleRead}>
              Mark as read
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
