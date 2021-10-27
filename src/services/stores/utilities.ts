import create from "zustand";

type UserState = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export const useUtilities = create<UserState>((set) => ({
  showModal: false,
  setShowModal: (showModal: boolean) => {
    return set({ showModal });
  },
}));
