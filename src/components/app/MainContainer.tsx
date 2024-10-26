import LeftScroll from "./LeftScroll"
import SutraView from "./SutraView"
import RightScroll from "./RightScroll"
import SearchBar from "./SearchBar"
import MeaningView from "./MeaningView"
import ButtonsPanel from "./ButtonsPanel"
import { Route, Routes } from "react-router-dom"
import InterpretationView from "./InterpretationView"

const MainContainer = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto mt-10 min-h-[calc(100vh-96px)]">
      <LeftScroll />
      <div className="flex-grow">
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SutraView />
                <MeaningView />
              </>
            }
          />
          <Route
            path="chant"
            element={
              <>
                <SutraView />
                <MeaningView />
              </>
            }
          />
          <Route
            path="teach-me"
            element={
              <>
                <SutraView />
                <MeaningView />
              </>
            }
          />
          <Route path="learn-more" element={<InterpretationView />} />
        </Routes>
        <ButtonsPanel />
      </div>
      <RightScroll />
    </div>
  )
}

export default MainContainer
