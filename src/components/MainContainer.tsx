import LeftScroll from "./LeftScroll"
import SutraView from "./SutraView"
import RightScroll from "./RightScroll"
import SearchBar from "@/components/SearchBar"
import MeaningView from "./MeaningView"
import ButtonsPanel from "./ButtonsPanel"

const MainContainer = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto mt-10 min-h-[calc(100vh-96px)]">
      <LeftScroll />
      <div className="flex-grow">
        <SearchBar />
        <SutraView />
        <MeaningView />
        <ButtonsPanel />
      </div>
      <RightScroll />
    </div>
  )
}

export default MainContainer
