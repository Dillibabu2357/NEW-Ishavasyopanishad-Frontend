import LargeHorizontalScroll from "@/assets/large_horizontal_scroll.png"

import { BeatLoader } from "react-spinners"
import ErrorMessage from "../shared/ErrorMessage"
import useSutraStore from "@/store/sutraStore"
import useLanguageStore from "@/store/languageStore"
import usePhilosophyStore from "@/store/philosophyStore"
import { useGetInterpretationQuery } from "@/api/interpretation.api"
import CustomBeatLoader from "../shared/CustomBeatLoader"

const InterpretationView = () => {
  const { sutra_no } = useSutraStore()
  const { language } = useLanguageStore()
  const { philosophy } = usePhilosophyStore()

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
      <div className="h-[350px] px-8 overflow-y-auto">
        {isLoading && <CustomBeatLoader />}
        {error && <ErrorMessage error={"No interpretation found"} />}
        {data && data.text}
      </div>

      {/* For bottom padding when scrolling  */}
      <div className="pb-14"></div>
    </div>
  )
}

export default InterpretationView
