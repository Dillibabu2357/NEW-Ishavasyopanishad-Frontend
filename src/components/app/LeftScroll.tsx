import VScrollImg from "@/assets/vertical_scroll.png"
import ChantIcon from "@/assets/chant_icon.png"
import TeachMeIcon from "@/assets/teach_me_icon.png"
import LearnMoreIcon from "@/assets/learn_more_icon.png"
import ChantDarkIcon from "@/assets/chant_dark_icon.png"
import TeachMeDarkIcon from "@/assets/teach_me_dark_icon.png"
import LearnMoreDarkIcon from "@/assets/learn_more_dark_icon.png"
import { useState } from "react"

const LeftScroll = () => {
  const [selected, setSelected] = useState<"chant" | "teach_me" | "learn_more">(
    "chant",
  )
  const [hovered, setHovered] = useState<
    "chant" | "teach_me" | "learn_more" | null
  >(null)

  const getIcon = (item: "chant" | "teach_me" | "learn_more") => {
    if (selected === item || hovered === item) {
      return item === "chant"
        ? ChantDarkIcon
        : item === "teach_me"
          ? TeachMeDarkIcon
          : LearnMoreDarkIcon
    }
    return item === "chant"
      ? ChantIcon
      : item === "teach_me"
        ? TeachMeIcon
        : LearnMoreIcon
  }

  return (
    <div
      className="flex flex-col h-[500px] w-[250px] justify-center pb-8 gap-10 items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${VScrollImg})`,
        backgroundSize: "100% 100%",
        minWidth: "250px",
      }}
    >
      {["chant", "teach_me", "learn_more"].map((item) => (
        <div
          key={item}
          onClick={() =>
            setSelected(item as "chant" | "teach_me" | "learn_more")
          }
          onMouseEnter={() =>
            setHovered(item as "chant" | "teach_me" | "learn_more")
          }
          onMouseLeave={() => setHovered(null)}
          className="flex flex-col items-center p-2 cursor-pointer"
        >
          <h4
            className={`${
              selected === item || hovered === item
                ? "font-bold text-orange-500"
                : ""
            }`}
          >
            {item === "chant"
              ? "Chant"
              : item === "teach_me"
                ? "Teach Me"
                : "Learn More"}
          </h4>
          <img
            src={getIcon(item as "chant" | "teach_me" | "learn_more")}
            alt={`${item.charAt(0).toUpperCase() + item.slice(1)} Mode`}
            height="64px"
            width="64px"
          />
        </div>
      ))}
    </div>
  )
}

export default LeftScroll
