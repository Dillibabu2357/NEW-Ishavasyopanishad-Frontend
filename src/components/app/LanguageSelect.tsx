import { useState } from "react"
import LightBarImg from "@/assets/light_bar.png"
import DarkBarImg from "@/assets/dark_bar.png"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LanguageSelect = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isItemHovered, setIsItemHovered] = useState(false)

  return (
    <Select>
      <SelectTrigger
        className="w-[180px] border-none outline-black"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          backgroundImage: `url(${isHovered ? DarkBarImg : LightBarImg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent
        className="w-[180px] border-none"
        style={{
          backgroundImage: `url(${LightBarImg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SelectItem
          value="en"
          style={{
            backgroundImage: `url(${isItemHovered ? DarkBarImg : LightBarImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => setIsItemHovered(true)}
          onMouseLeave={() => setIsItemHovered(false)}
        >
          English
        </SelectItem>
        <SelectItem value="ka">Kannada</SelectItem>
        <SelectItem value="te">Telugu</SelectItem>
        <SelectItem value="ta">Tamil</SelectItem>
        <SelectItem value="hi">Hindi</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelect
