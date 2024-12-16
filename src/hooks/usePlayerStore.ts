import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  shuffle: () => void;
  recentTracks: string[];
  // isPlaying: boolean;
  // setIsPlaying: () => void;
}

// function shuffleTracks(array) {
//   // for (let i = array.length - 1; i >= 0; i--){
//   //   const j = Math.floor(Math.random() * (i + 1));
//   //   [array[i], array[j]] = [array[j], array[i]];
//   // }
//   console.log(array)
// }

const usePlayerStore = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) =>
    set({
      activeId: id,
    }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  shuffle: () =>
    set((state) => ({
      ids: state.ids
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
    })),
  recentTracks: [],
  // isPlaying: true,
  // setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying})),
}));

export default usePlayerStore;
