import BgTop from "@/assets/bg_top.png"
import BgBottom from "@/assets/bg_bottom.png"

interface BaseLayoutProps {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-[#F5F3E7] overflow-hidden">
      <img
        src={BgTop}
        alt="background top"
        className="absolute top-0 left-0 w-full max-h-[200px]"
      />

      <img
        src={BgBottom}
        alt="background bottom"
        className="absolute bottom-0 left-0 w-full max-h-[200px]"
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default BaseLayout
