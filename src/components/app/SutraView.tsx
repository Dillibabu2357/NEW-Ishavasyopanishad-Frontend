import { useGetSutraQuery } from "@/api/sutras.api"
import HorizontalScroll from "@/assets/horizontal_scroll.png"
import ErrorMessage from "../shared/ErrorMessage"
import useSutraStore from "@/store/sutraStore"
import { useGetTransliterationQuery } from "@/api/transliteration.api"
import useLanguageStore from "@/store/languageStore"
import CustomBeatLoader from "../shared/CustomBeatLoader"
import MultilineText from "../shared/MultilineText"

const SutraView = () => {
  const { sutra_no } = useSutraStore()
  const { language } = useLanguageStore()
  const { error, isLoading, data } = useGetSutraQuery(sutra_no)
  const {
    error: transError,
    isLoading: isTransLoading,
    data: transliteration,
  } = useGetTransliterationQuery(sutra_no, language)

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
      <div className="h-[200px] px-8 overflow-y-auto box-content">
        {isLoading && <CustomBeatLoader />}
        {error && <ErrorMessage error={error.message} />}
        {data && (
          <div className="font-bold text-orange-500 text-2xl text-center">
            {data.text && <MultilineText text={data.text} />}
          </div>
        )}

        {isTransLoading && <CustomBeatLoader />}
        {transError && <ErrorMessage error={transError.message} />}
        {transliteration && (
          <p className="mt-4 text-armygreen font-semibold text-center text-xl">
            {transliteration.text && (
              <MultilineText text={transliteration.text} />
            )}
          </p>
        )}
      </div>

      {/* For bottom padding when scrolling  */}
      <div className="pb-14"></div>
    </div>
  )
}

export default SutraView
