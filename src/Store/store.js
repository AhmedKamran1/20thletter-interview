import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const store = configureStore({
  reducer: { card: cardSlice.reducer },
});

export const cardActions = cardSlice.actions;
export default store;
