import { Philosophy } from "@/types/types"
import { create } from "zustand"

interface PhilosophyState {
  philosophy: Philosophy
  setPhilosophy: (ptype: Philosophy) => void
}

const usePhilosophyStore = create<PhilosophyState>((set) => ({
  philosophy: Philosophy.Advaitha,
  setPhilosophy: (ptype) => set(() => ({ philosophy: ptype })),
}))

export default usePhilosophyStore
