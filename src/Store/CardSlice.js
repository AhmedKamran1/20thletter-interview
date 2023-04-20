import { createSlice } from "@reduxjs/toolkit";

const randomCardColor = Math.floor(Math.random() * 16777215).toString(16);
const randomTextColor = Math.floor(Math.random() * 16777215).toString(16);
let assignId = 1;

const cards = [
  {
    title: "Title",
    subtitle: "Subtitle",
    cardColor: randomCardColor,
    textColor: randomTextColor,
    id: assignId
  },
];

const cardInitialState = { cardList: cards };

const cardSlice = createSlice({
  name: "Card",
  initialState: cardInitialState,
  reducers: {
    changeColor(state, action) {
      const index = state.cardList.findIndex(
        (card) => card.id === action.payload
      );
      state.cardList[index].cardColor = Math.floor(Math.random() * 16777215).toString(16);
      state.cardList[index].textColor = Math.floor(Math.random() * 16777215).toString(16);
    },

    addCard(state, action) {
      assignId++;
      state.cardList.push({
        title: "Title",
        subtitle: "Subtitle",
        cardColor: Math.floor(Math.random() * 16777215).toString(16),
        textColor: Math.floor(Math.random() * 16777215).toString(16),
        id: assignId
      });
    },
  },
});

export default cardSlice;