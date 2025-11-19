import { create } from "zustand";

type State = {
  modeType: string;
};

type Action = {
  setModetype: (mode: State["modeType"]) => void;
};

export const useModeZustand = create<State & Action>((set) => ({
  modeType: "home",
  setModetype: (mode) => set(() => ({ modeType: mode })),
}));
