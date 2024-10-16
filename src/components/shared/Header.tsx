import HdrImg from "@/assets/header_img.png"
import HdrBg from "@/assets/header_bg.png"
import TexturedButton from "@/components/shared/TexturedButton"

const Header = () => {
  return (
    <div
      className="flex justify-between items-center drop-shadow-lg"
      style={{
        backgroundImage: `url(${HdrBg})`,
      }}
    >
      <div className="flex gap-6 items-center justify-between">
        <img src={HdrImg} alt="Header Image" className="h-24" />
        <div className="text-center">
          <h2 className="text-armygreen font-bold text-xl">ईशावास्योपनिषद्</h2>
          <h2 className="text-orange-500 font-bold text-2xl">
            Īśāvāsyopaniṣad
          </h2>
        </div>
      </div>
      <div className="pr-4 pt-2">
        <TexturedButton selected>Home</TexturedButton>
        <TexturedButton>About</TexturedButton>
        <TexturedButton>Credits</TexturedButton>
        <TexturedButton>Help</TexturedButton>
      </div>
    </div>
  )
}

export default Header
