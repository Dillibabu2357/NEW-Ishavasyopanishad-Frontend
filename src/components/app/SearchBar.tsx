import SearchBarImg from "@/assets/light_bar.png"

const SearchBar = () => {
  return (
    <div
      className="h-10 mx-2 rounded-md flex items-center pl-2 mb-4"
      style={{
        backgroundImage: `url(${SearchBarImg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      Search
    </div>
  )
}

export default SearchBar
