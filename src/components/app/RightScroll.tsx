import VScrollImg from "@/assets/vertical_scroll.png"
import TexturedButton from "../shared/TexturedButton"
import { useGetSutraListQuery } from "@/api/sutras.api"
import ErrorMessage from "../shared/ErrorMessage"
import { BeatLoader } from "react-spinners"

const RightScroll = () => {
  const { error, isLoading, data } = useGetSutraListQuery()
  return (
    <div
      className="flex flex-col h-[500px] w-[250px] items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${VScrollImg})`,
        backgroundSize: "100% 100%",
        minWidth: "250px",
      }}
    >
      {isLoading && <BeatLoader />}
      {error && <ErrorMessage error={error.message} />}
      <div className="flex my-10 mx-8 gap-2 flex-wrap justify-center">
        {Array.from({ length: 18 }, (_, i) => (
          <TexturedButton key={i + 1} className="text-black p-0 w-10 h-10 pb-1">
            {i + 1}
          </TexturedButton>
        ))}
      </div>

      <div className="flex my-10 mx-8 gap-2 flex-wrap justify-center"></div>
    </div>
  )
}

export default RightScroll
