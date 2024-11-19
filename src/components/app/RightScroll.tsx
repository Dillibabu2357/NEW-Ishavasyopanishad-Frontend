import VScrollImg from "@/assets/vertical_scroll.png"
import TexturedButton from "../shared/TexturedButton"
import { useGetSutraListQuery } from "@/api/sutras.api"
import ErrorMessage from "../shared/ErrorMessage"
import LanguageSelect from "./LanguageSelect"
import useSutraStore from "@/store/sutraStore"
import CustomBeatLoader from "../shared/CustomBeatLoader"

const RightScroll = () => {
  const { error, isLoading, data } = useGetSutraListQuery()
  const { sutra_no, setSutraNo } = useSutraStore()

  return (
    <div
      className="h-[600px] w-[250px]  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${VScrollImg})`,
        backgroundSize: "100% 100%",
        minWidth: "250px",
      }}
    >
      <div className="flex flex-col items-center gap-2 mx-8 ml-10 mt-14">
        <LanguageSelect />
        {isLoading && <CustomBeatLoader />}
        {error && <ErrorMessage error={error.message} />}
        <div className="flex gap-2 flex-wrap justify-center mt-2">
          <TexturedButton
            key={0}
            selected={sutra_no === 0}
            onClick={() => setSutraNo(0)}
          >
            Shanti Mantra
          </TexturedButton>
          {data &&
            data.length > 0 &&
            data.map((item) =>
              item.number > 0 ? (
                <TexturedButton
                  key={item.id}
                  selected={item.number === sutra_no}
                  className="p-0 w-10 h-10 pb-1"
                  onClick={() => setSutraNo(item.number)}
                >
                  {item.number}
                </TexturedButton>
              ) : null,
            )}
          <TexturedButton
            key={0}
            selected={sutra_no === -1}
            onClick={() => setSutraNo(-1)}
          >
            Shanti Mantra
          </TexturedButton>
        </div>
      </div>
    </div>
  )
}

export default RightScroll
