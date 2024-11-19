import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"
import { useGetResultQuery } from "@/api/search.api"

import LightBarImg from "@/assets/light_bar.png"
import DarkBarImg from "@/assets/dark_bar.png"
import CustomBeatLoader from "../shared/CustomBeatLoader"
import ErrorMessage from "../shared/ErrorMessage"

import useLanguageStore from "@/store/languageStore"
import useModeStore from "@/store/modeStore"
import { Language, Mode, Philosophy } from "@/types/types"
import useSutraStore from "@/store/sutraStore"
import usePhilosophyStore from "@/store/philosophyStore"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const debouncedSearchTerm = useDebounce(searchTerm, 250)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { setLanguage } = useLanguageStore()
  const { setMode } = useModeStore()
  const { setSutraNo } = useSutraStore()
  const { setPhilosophy } = usePhilosophyStore()

  const {
    data: results,
    isLoading,
    error,
  } = useGetResultQuery(debouncedSearchTerm)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSelect = (
    lang: Language,
    mode: string,
    sutraNo: number,
  ) => {
    setLanguage(lang)
    setSutraNo(sutraNo)
    if (mode === Mode.Chant) {
      setMode(Mode.Chant)
    } else if (mode === Mode.TeachMe) {
      setMode(Mode.TeachMe)
    } else if (mode === "interpretation") {
      setMode(Mode.LearnMore)
      const pType = mode.split(" - ")[1]
      setPhilosophy(pType as Philosophy)
    }
    setSearchTerm("")
  }

  return (
    <div className="relative mb-4">
      <div className="relative w-full mx-auto">
        <Input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleInputChange}
          className="h-10 pl-10 pr-4 rounded-md w-full placeholder:text-armygreen placeholder:font-bold"
          style={{
            backgroundImage: `url(${LightBarImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-armygreen" />
      </div>
      {searchTerm !== "" && results && (
        <div
          className="absolute w-full p-2 flex flex-col gap-2 rounded-md"
          style={{
            backgroundImage: `url(${LightBarImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {isLoading && <CustomBeatLoader />}
          {error && <ErrorMessage error={"Search failed"} />}
          {results.map((result, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-2 w-full text-armygreen font-semibold hover:text-white flex items-center hover:cursor-pointer hover:rounded-sm"
              style={{
                backgroundImage: `url(${hoveredIndex === index ? DarkBarImg : "none"})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() =>
                handleSearchSelect(result.lang, result.mode, result.sutra_no)
              }
            >
              <p className="whitespace-nowrap overflow-hidden text-ellipsis flex-[9]">
                {result.text}
              </p>
              <p className="flex-[1] text-right">{result.sutra_no}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
