import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
