import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  image: "",
};

const categorySlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { setName, setImage } = categorySlice.actions;
export default categorySlice.reducer;
