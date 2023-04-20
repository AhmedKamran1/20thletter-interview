import classes from "./AddCard.module.css";
import Wrapper from "../UI/Wrapper";
import { useDispatch } from "react-redux";
import { cardActions } from "../Store/store";

const AddCard = () => {
  const dispatch = useDispatch();
  

  const addCardHandler = () => {
    dispatch(cardActions.addCard());
  };

  return (
    <Wrapper className={classes.addcard} onClick={addCardHandler}>
      <button className={classes.button}>+</button>
    </Wrapper>
  );
};

export default AddCard;
