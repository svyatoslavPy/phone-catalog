/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'dark-theme' | 'light-theme';
}

const initialState: ThemeState = {
  theme: 'light-theme',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.theme === 'dark-theme') {
        state.theme = 'light-theme';
      } else {
        state.theme = 'dark-theme';
      }
    },
  },
});

export default ThemeSlice;
