import { createSlice } from "@reduxjs/toolkit";

//intial state
const initialState = {
  level: 1,
  coin: 15,
};

//create slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //nextLevel
    nextLevel: (state, action) => {
      state.level = action.payload.userLevel + 1;
      state.score = action.payload.coin + 2;
    },
    //reduce coin
    decreaseCoin: (state, action) => {
      state.coin = action.payload - 5;
    },
  },
});

//generate action
const { nextLevel, decreaseCoin } = userSlice.actions;

//generate reducers
const userReducer = userSlice.reducer;

export default userReducer;
