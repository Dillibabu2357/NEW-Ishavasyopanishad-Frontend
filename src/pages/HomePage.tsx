import Header from "@/components/shared/Header"
import MainContainer from "@/components/app/MainContainer"
import BaseLayout from "@/layouts/BaseLayout"

export default function HomePage() {
  return (
    <BaseLayout>
      <Header />
      <MainContainer />
    </BaseLayout>
  )
}
