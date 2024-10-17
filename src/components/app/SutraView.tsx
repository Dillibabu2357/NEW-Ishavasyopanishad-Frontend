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
        minHeight: "200px",
      }}
    >
      {isLoading && <BeatLoader />}
      {error && <ErrorMessage error={error.message} />}
      <div className="px-12 pt-8 pb-14">
        {data && (
          <div className="font-bold text-orange-500 text-xl text-center">
            {data.text && parseHTML(data.text)}
          </div>
        )}
        <p className="mt-4">
          oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate | pūrṇasya pūrṇamādāya
          pūrṇamevāvaśiṣyate || oṃ pūrṇamadaḥ pūrṇamidaṃ pūrṇātpūrṇamudacyate |
          pūrṇasya pūrṇamādāya pūrṇamevāvaśiṣyate ||
        </p>
      </div>
    </div>
  )
}

export default SutraView
