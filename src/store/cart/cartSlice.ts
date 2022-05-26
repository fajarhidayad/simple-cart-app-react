import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductProps } from "../../interfaces";

interface CartState {
  products: {
    product: ProductProps;
    quantity: number;
  }[];
}

interface CartItem {
  product: ProductProps;
  quantity: number;
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const index = state.products.findIndex(
        (item) => item.product.title === action.payload.product.title
      );
      if (index !== -1) {
        state.products[index].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    minItem: (state, action: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (item) => item.product.title === action.payload
      );

      if (state.products[index].quantity > 1) {
        state.products[index].quantity -= 1;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.product.title !== action.payload
      );
    },
  },
});

export const { addItem, minItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
