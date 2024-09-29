import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

export interface FavoritesState {
  favorites: Product[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const productIndex = state.favorites.findIndex(
        item => item.id === action.payload,
      );

      state.favorites.splice(productIndex, 1);
    },
  },
});

export const { addToFavorites, removeProduct } = favoritesSlice.actions;

export default favoritesSlice;
