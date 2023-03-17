import { createSlice } from "@reduxjs/toolkit";

//intial state
const initialState = {
  level: 1,
  coin: 15,
  isContinue: true,
  newLevel: 1,
};

//create slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //nextLevel
    nextLevel: (state) => {
      state.level += 1;
      state.coin += 2;
      state.isContinue = true;
    },
    //reduce coin
    decreaseCoin: (state) => {
      state.coin -= 5;
    },
    //change continue state
    changeContinue: (state, action) => {
      state.isContinue = action.payload;
    },
    //update level
    updateLatestLevel: (state, action) => {
      state.level = action.payload.level;
      state.coin = action.payload.coin;
    },
    //update new level
    updateNewLevel: (state, action) => {
      if (action.payload === "reset") {
        state.newLevel = 1;
      } else if (action.payload.type === "previous") {
        state.newLevel = action.payload.newLevel;
        state.isContinue = false;
      } else if (action.payload === "next") {
        state.newLevel += 1;
      }
    },
  },
});

//generate action
export const {
  nextLevel,
  decreaseCoin,
  changeContinue,
  updateLatestLevel,
  updateNewLevel,
} = userSlice.actions;

//generate reducers
const userReducer = userSlice.reducer;

export default userReducer;
