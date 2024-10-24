import { create } from "zustand"

interface State {
  sutra_no: number
}

interface Actions {
  setSutraNo: (sutraNo: number) => void
}

const useSutraStore = create<State & Actions>((set) => ({
  sutra_no: 1,
  setSutraNo: (sutraNo) => set(() => ({ sutra_no: sutraNo })),
}))

export default useSutraStore
