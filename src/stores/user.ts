import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  id: string | null;
  username: string | null;
  email: string | null;
  jwt: string | null;
};

type State = {
  user: User;
};

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    jwt: null,
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
