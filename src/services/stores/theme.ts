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
  colorMode: ColorMode.dark,
  setColorMode: (colorMode: ColorMode) => {
    return set({ colorMode });
  },
  toggleColorMode: () => {
    const colorMode = get().colorMode !== ColorMode.light ? ColorMode.light : ColorMode.dark
    return set({ colorMode });
  },
}));
