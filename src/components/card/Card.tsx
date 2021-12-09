import { useState } from "react";
import {
  IoChatbubbleOutline,
  IoHeart,
  IoHeartOutline,
  IoInformationCircle,
  IoRepeatOutline,
} from "react-icons/io5";
import classes from "./card.module.css";

interface CardType {
  post: any;
}

const Card: React.FC<CardType> = ({ post }: CardType) => {
  const { userImg, username, fullname, postImg } = post;
  const [liked, setLiked] = useState<Boolean>(false);

  const handleNotification = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.info}>
          <img src={userImg} alt={username} className={classes.userImage} />
          <span>{fullname}</span>
        </div>
        <img src={postImg} alt="" className={classes.postImage} />
        <div className={classes.interaction}>
          <div>
            {liked ? (
              <IoHeart
                color="red"
                fontSize={20}
                className={classes.cardIcon}
                onClick={handleNotification}
              />
            ) : (
              <IoHeartOutline
                color="red"
                fontSize={20}
                className={classes.cardIcon}
                onClick={handleNotification}
              />
            )}
            <IoChatbubbleOutline
              fontSize={20}
              className={classes.cardIcon}
              color="green"
            />
            <IoRepeatOutline
              fontSize={20}
              className={classes.cardIcon}
              color="brown"
            />
          </div>
          <IoInformationCircle fontSize={18} className={classes.cardIcon} />
        </div>
      </div>
    </>
  );
};

export default Card;
