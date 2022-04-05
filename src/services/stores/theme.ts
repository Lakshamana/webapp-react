import { THEME } from "config/constants";
import { getData, saveData } from "services/storage";
import create from "zustand";

enum ColorMode {
  light = "light",
  dark = "dark",
}

type ThemeState = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  colorMode: getData(THEME) || ColorMode.dark,
  setColorMode: (colorMode: ColorMode) => {
    saveData(THEME, colorMode);
    return set({ colorMode });
  },
  toggleColorMode: () => {
    const colorMode = get().colorMode !== ColorMode.light ? ColorMode.light : ColorMode.dark
    saveData(THEME, colorMode);
    return set({ colorMode });
  },
}));
