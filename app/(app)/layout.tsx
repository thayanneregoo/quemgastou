import Navbar from "@/app/components/navbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
      <Navbar />

      <main >
        {children}
      </main>
    </div>
  )
}