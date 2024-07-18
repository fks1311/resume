import { atom } from "recoil";

export const userInfoStateAtom = atom({
  key: "userInfoState",
  default: {
    occupation: [],
    job: [],
    usable_skill: [],
  },
});
