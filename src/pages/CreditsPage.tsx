import Header from "@/components/shared/Header"
import BaseLayout from "@/layouts/BaseLayout"

export default function CreditsPage() {
  return (
    <BaseLayout>
      <Header />
      <h1 className="mt-10 text-center font-bold text-4xl pb-4 text-orange-500 underline capitalize">
        Credits
      </h1>
    </BaseLayout>
  )
}
