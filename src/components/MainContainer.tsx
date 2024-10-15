import LeftScroll from "./LeftScroll"
import RightScroll from "./RightScroll"

const MainContainer = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto min-h-[calc(100vh-96px)]">
      <LeftScroll />
      <div className="flex-grow"></div>
      <RightScroll />
    </div>
  )
}

export default MainContainer
