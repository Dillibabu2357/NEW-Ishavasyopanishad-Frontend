import { useGetSutraQuery } from "@/api/sutras.api"
import HorizontalScroll from "@/assets/horizontal_scroll.png"
import ErrorMessage from "../shared/ErrorMessage"
import { BeatLoader } from "react-spinners"
import { parseHTML } from "@/utils/utils"

const SutraView = () => {
  const { error, isLoading, data } = useGetSutraQuery(14)

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
        {isLoading && <BeatLoader />}
        {error && <ErrorMessage error={error.message} />}
        {data && (
          <div className="font-bold text-orange-500 text-xl text-center">
            {data.text && parseHTML(data.text)}
          </div>
        )}
        <p className="mt-4 text-armygreen font-semibold">
          oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate | pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate |
          pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate || pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ||
        </p>

        <p className="mt-4">
          oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate | pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate |
          pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate || pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ||
        </p>
      </div>

      {/* For bottom padding when scrolling  */}
      <div className="pb-14"></div>
    </div>
  )
}

export default SutraView
