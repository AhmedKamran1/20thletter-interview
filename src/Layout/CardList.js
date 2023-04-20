import Wrapper from "../UI/Wrapper";
import classes from "./CardList.module.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../Store/store";

const CardList = ({ card }) => {
  const dispatch = useDispatch();
  const { title, subtitle, cardColor, textColor, id } = card;

  const colorChangeHandler = () => {
    dispatch(cardActions.changeColor(id));
  };

  return (
    <Wrapper
      className={classes.card}
      cardColor={cardColor}
      textColor={textColor}
      id={id}
    >
      <h3 className={classes.title}>{title}</h3>
      <button
        className={classes.button}
        style={{backgroundColor: '#' + textColor, color: 'white'}}
        onClick={colorChangeHandler}
      >
        Change Color
      </button>
      <p className={classes.paragraph}>{subtitle}</p>
    </Wrapper>
  );
};

export default CardList;
