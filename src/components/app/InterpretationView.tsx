import LargeHorizontalScroll from "@/assets/large_horizontal_scroll.png"

import ErrorMessage from "../shared/ErrorMessage"
import useSutraStore from "@/store/sutraStore"
import useLanguageStore from "@/store/languageStore"
import usePhilosophyStore from "@/store/philosophyStore"
import { useGetInterpretationQuery } from "@/api/interpretation.api"
import CustomBeatLoader from "../shared/CustomBeatLoader"
import MultilineText from "../shared/MultilineText"
import TexturedButton from "../shared/TexturedButton"
import { Philosophy } from "@/types/types"

const InterpretationView = () => {
  const { sutra_no } = useSutraStore()
  const { language } = useLanguageStore()
  const { philosophy, setPhilosophy } = usePhilosophyStore()

  const { error, isLoading, data } = useGetInterpretationQuery(
    sutra_no,
    language,
    philosophy,
  )

  return (
    <div
      style={{
        backgroundImage: `url(${LargeHorizontalScroll})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* For top padding when scrolling  */}
      <div className="pt-8"></div>

      <div className="flex justify-center">
        <TexturedButton
          selected={philosophy === Philosophy.Advaitha}
          onClick={() => setPhilosophy(Philosophy.Advaitha)}
        >
          Advaita
        </TexturedButton>
        <TexturedButton
          selected={philosophy === Philosophy.Dvaitha}
          onClick={() => setPhilosophy(Philosophy.Dvaitha)}
        >
          Dvaita
        </TexturedButton>
        <TexturedButton
          selected={philosophy === Philosophy.Vishishtadvaita}
          onClick={() => setPhilosophy(Philosophy.Vishishtadvaita)}
        >
          Vishishtadvaita
        </TexturedButton>
      </div>

      <div className="h-[350px] max-w-[90%] mx-auto overflow-y-auto">
        {isLoading && <CustomBeatLoader />}
        {error && <ErrorMessage error={"No interpretation found"} />}
        <div className="font-semibold text-darkbrown px-4 pt-2 text-lg">
          {data && <MultilineText text={data.text} gap={4} />}
        </div>
      </div>

      {/* For bottom padding when scrolling  */}
      <div className="pb-14"></div>
    </div>
  )
}

export default InterpretationView
