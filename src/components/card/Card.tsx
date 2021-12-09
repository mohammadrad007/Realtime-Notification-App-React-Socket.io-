import {
  IoChatbubbleOutline,
  IoHeart,
  IoInformationCircle,
  IoRepeatOutline,
} from "react-icons/io5";
import classes from "./card.module.css";

interface CardType {
  posts: Array<any>;
}

const Card: React.FC<CardType> = ({ posts }: CardType) => {
  console.log(posts);

  return (
    <>
      {posts.map(({ id, username, fullname, userImg, postImg }) => (
        <div className={classes.card} key={id}>
          <div className={classes.info}>
            <img src={userImg} alt={username} className={classes.userImage} />
            <span>{fullname}</span>
          </div>
          <img src={postImg} alt="" className={classes.postImage} />
          <div className={classes.interaction}>
            <div>
              <IoHeart fontSize={20} className={classes.cardIcon} />
              <IoChatbubbleOutline fontSize={20} className={classes.cardIcon} />
              <IoRepeatOutline fontSize={20} className={classes.cardIcon} />
            </div>
            <IoInformationCircle fontSize={18} className={classes.cardIcon} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
