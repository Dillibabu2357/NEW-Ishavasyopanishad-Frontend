import { create } from "zustand"

interface SutraState {
  sutra_no: number
  setSutraNo: (sutraNo: number) => void
}

const useSutraStore = create<SutraState>((set) => ({
  sutra_no: 1,
  setSutraNo: (sutraNo) => set(() => ({ sutra_no: sutraNo })),
}))

export default useSutraStore
