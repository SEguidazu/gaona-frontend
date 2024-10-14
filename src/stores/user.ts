import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  id: string;
  username: string;
  email: string;
  jwt: string;
};

type State = {
  user: User;
};

export const initialState: State = {
  user: {
    id: "",
    username: "",
    email: "",
    jwt: "",
  },
};

type Action = {
  updateUser: (user: State) => void;
};

const useUserStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        updateUser: (user: State) => set((state) => ({ ...state, ...user })),
      }),
      {
        name: "user",
      }
    )
  )
);

export default useUserStore;
