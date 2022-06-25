import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LIGHT_COLORS, DARK_COLORS, LIGHT_FONTS, DARK_FONTS} from 'common/Theme';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';

interface ThemeState {
  colors: typeof LIGHT_COLORS;
  fonts: typeof LIGHT_FONTS | typeof DARK_FONTS;
  isDarkMode:boolean
}

const initialState: ThemeState = {
  colors: LIGHT_COLORS,
  fonts: LIGHT_FONTS,
  isDarkMode:false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onModeChange(state, isDarkMode: PayloadAction<boolean>) {
      console.log("🚀 ~ file: theme.ts ~ line 23 ~ onModeChange ~ isDarkMode", isDarkMode)
      state.isDarkMode = isDarkMode.payload;
      if (isDarkMode.payload) {
        state.colors = DARK_COLORS;
        state.fonts = DARK_FONTS;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = LIGHT_FONTS;
      }
    },
  },
});

export const {onModeChange} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export const useTheme = () => {
  const theme = useSelector((state: RootStore) => state.theme);

  return theme;
};
