import VScrollImg from "@/assets/vertical_scroll.png"

const LeftScroll = () => {
  return (
    <div
      className="flex flex-col h-[500px] w-[250px] items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${VScrollImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col items-center my-10">
        <h2 className="text-xl font-bold mb-2">Hi</h2>
        <button className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-md transition">
          Hello
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Hi</h2>
        <button className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-md transition">
          Hello
        </button>
      </div>
    </div>
  )
}

export default LeftScroll
