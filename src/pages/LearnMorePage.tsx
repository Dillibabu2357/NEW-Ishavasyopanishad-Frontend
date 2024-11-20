import Header from "@/components/shared/Header"
import BaseLayout from "@/layouts/BaseLayout"
import LeftScroll from "@/components/app/LeftScroll"
import SearchBar from "@/components/app/SearchBar"
import RightScroll from "@/components/app/RightScroll"
import InterpretationView from "@/components/app/InterpretationView"
import ButtonsPanel from "@/components/app/ButtonsPanel"

export default function LearnMorePage() {
  return (
    <BaseLayout>
      <Header />
      <div className="flex justify-center gap-4 mt-10">
        <LeftScroll />
        <div className="flex-grow max-w-4xl">
          <SearchBar />
          <InterpretationView />
          <ButtonsPanel />
        </div>
        <RightScroll />
      </div>
    </BaseLayout>
  )
}
