import { create } from "zustand";

type State = {
  modeType: string;
  dataDetail: null | object;
};

type Action = {
  setModetype: (mode: State["modeType"]) => void;
  setDataDetail: (mode: State["dataDetail"]) => void;
};

export const useModeZustand = create<State & Action>((set) => ({
  modeType: "home",
  setModetype: (mode) => set(() => ({ modeType: mode })),
  dataDetail: null,
  setDataDetail: (data) => set(() => ({ dataDetail: data })),
}));
