import { APP_THEME } from "config/constants";
import { getData, saveData } from "services/storage";
import { ColorMode } from 'types/common';
import create from "zustand";

type ThemeState = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  colorMode: getData(APP_THEME) || 'dark',
  setColorMode: (colorMode: ColorMode) => {
    return set({ colorMode });
  },
  toggleColorMode: () => {
    const colorMode = get().colorMode !== 'light' ? 'light' : 'dark'
    saveData(APP_THEME, colorMode);
    return set({ colorMode });
  },
}));
