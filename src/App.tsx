import { Outlet } from "react-router-dom";
import Footer from "./shared/footer/Footer";
import Nav from "./shared/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
