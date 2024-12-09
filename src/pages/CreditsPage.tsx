import Header from "@/components/shared/Header"
import BaseLayout from "@/layouts/BaseLayout"
import LargeHorizontalScroll from "@/assets/large_horizontal_scroll.png"

const CreditsPage = () => {
  const credits = [
    {
      role: "Principal Investigator",
      name: "Dr. Amba Kulkarni",
    },
    {
      role: "Co-investigator",
      name: "Dr. S Vidyashree",
    },
    {
      role: "Concept and Visualization",
      name: "Dr. M.A. Alwar",
    },
    {
      role: "Project Administrator",
      name: "Venkatesh R",
    },
    {
      role: "Software Developer",
      name: "Pranav K Bhaskar",
    },
    {
      role: "Project Linguist",
      name: "Vinay Iyer",
    },
    {
      role: "Art Work",
      name: "L K Acharya & Basavaraju",
    },
  ]

  return (
    <BaseLayout>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h1 className="text-4xl font-bold text-orange-600">Credits</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {credits.map((credit, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 w-[350px]"
              style={{
                backgroundImage: `url(${LargeHorizontalScroll})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-orange-600 mb-2">
                  {credit.role}
                </h2>
                <div className="w-12 h-1 bg-orange-300 mx-auto mb-4"></div>
                <p className="text-darkbrown font-medium">{credit.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  )
}

export default CreditsPage
