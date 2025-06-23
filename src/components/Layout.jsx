import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'; // We'll style it later

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;