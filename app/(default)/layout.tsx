import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import Animate from "@/components/animate"
import { ApolloProvider } from '@apollo/client';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Animate />
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  )
}
