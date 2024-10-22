import { useGetMeaningQuery } from "@/api/meaning.api"
import HorizontalScroll from "@/assets/horizontal_scroll.png"
import { BeatLoader } from "react-spinners"
import ErrorMessage from "../shared/ErrorMessage"

const MeaningView = () => {
  const { error, isLoading, data } = useGetMeaningQuery(1, "en")

  return (
    <div
      className="px-12 pt-8 pb-14"
      style={{
        backgroundImage: `url(${HorizontalScroll})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        minHeight: "200px",
      }}
    >
      {isLoading && (
        <div className="text-center">
          <BeatLoader color={""} />
        </div>
      )}
      {error && <ErrorMessage error={error.message} />}
      <div>{data?.text}</div>
    </div>
  )
}

export default MeaningView
