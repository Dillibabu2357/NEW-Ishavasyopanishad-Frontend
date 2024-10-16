import Header from "@/components/shared/Header"
import MainContainer from "@/components/MainContainer"
import BaseLayout from "@/layouts/BaseLayout"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <MainContainer />
    </BaseLayout>
  )
}
