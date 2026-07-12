import Footer from "@/src/layout/Footer/Footer";
import NavBar from "@/src/layout/NavBar/NavBar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="w-full mx-auto">{children}</main>
      <Footer />
    </>
  );
}
