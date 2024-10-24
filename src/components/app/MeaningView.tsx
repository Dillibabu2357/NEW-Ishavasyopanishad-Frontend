import { useGetMeaningQuery } from "@/api/meaning.api"
import HorizontalScroll from "@/assets/horizontal_scroll.png"
import { BeatLoader } from "react-spinners"
import ErrorMessage from "../shared/ErrorMessage"
import useLanguageStore from "@/store/languageStore"

const MeaningView = () => {
  const { language } = useLanguageStore()
  const { error, isLoading, data } = useGetMeaningQuery(1, language)

  return (
    <div
      style={{
        backgroundImage: `url(${HorizontalScroll})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* For top padding when scrolling  */}
      <div className="pt-8"></div>
      <div className="h-[200px] px-8 overflow-y-auto">
        {isLoading && (
          <div className="text-center">
            <BeatLoader />
          </div>
        )}
        {error && <ErrorMessage error={"No meaning found"} />}
        {data && data.text}
      </div>

      {/* For bottom padding when scrolling  */}
      <div className="pb-14"></div>
    </div>
  )
}

export default MeaningView
