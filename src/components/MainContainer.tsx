import LeftScroll from "./LeftScroll"
import MantraView from "./MantraView"
import RightScroll from "./RightScroll"
import SearchBar from "@/components/SearchBar"
import TransliterationView from "./TransliterationView"

const MainContainer = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto mt-10 min-h-[calc(100vh-96px)]">
      <LeftScroll />
      <div className="flex-grow">
        <SearchBar />
        <MantraView />
        <TransliterationView />
        <SearchBar />
      </div>
      <RightScroll />
    </div>
  )
}

export default MainContainer
