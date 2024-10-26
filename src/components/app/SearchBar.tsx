import SearchBarImg from "@/assets/light_bar.png"
import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchBar = () => {
  return (
    <div className="relative w-full mx-auto">
      <Input
        type="text"
        placeholder="Search here..."
        className="h-10 pl-10 pr-4 rounded-md w-full mb-4 placeholder:text-armygreen placeholder:font-bold"
        style={{
          backgroundImage: `url(${SearchBarImg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-armygreen" />
    </div>
  )
}

export default SearchBar
