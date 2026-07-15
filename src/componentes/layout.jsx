import Navbar from "./Navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;