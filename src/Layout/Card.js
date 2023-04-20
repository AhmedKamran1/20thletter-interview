import { useSelector } from "react-redux";
import Wrapper from "../UI/Wrapper";
import CardList from "./CardList";
import classes from "./Card.module.css";
import AddCard from "./AddCard";

const Card = () => {
  const cardList = useSelector((state) => state.card.cardList);
  

  return (
    <Wrapper className={classes.container}>
      {cardList.map((card) => (
        <CardList
          card={card}
          key={Math.random()}
        />
      ))}
      <AddCard />
    </Wrapper>
  );
};

export default Card;
