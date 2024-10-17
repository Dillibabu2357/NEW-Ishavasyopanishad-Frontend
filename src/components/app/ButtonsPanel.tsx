import TexturedButton from "@/components/shared/TexturedButton"
import { ChevronFirst, ChevronLast, Play, Repeat, Volume } from "lucide-react"

const ButtonsPanel = () => {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <TexturedButton>
        <ChevronFirst />
      </TexturedButton>

      <TexturedButton>
        <Play />
      </TexturedButton>

      <TexturedButton>
        <ChevronLast />
      </TexturedButton>

      <TexturedButton>
        <Repeat />
      </TexturedButton>

      <TexturedButton>
        <Volume />
      </TexturedButton>
    </div>
  )
}

export default ButtonsPanel
