import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: 0,
  stockQuantity: 0,
  description: "",
  categoryId: "",
  images: [] as string[],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setStockQuantity: (state, action: PayloadAction<number>) => {
      state.stockQuantity = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },
    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
  },
});

export const {
  setName,
  setPrice,
  setStockQuantity,
  setDescription,
  setCategoryId,
  setImages,
} = productSlice.actions;
export default productSlice.reducer;
