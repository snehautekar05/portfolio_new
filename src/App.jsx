import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./portfolio/footer/Footer";
import MainContent from "./portfolio/main-content/MainContent";
import Navbar from "./portfolio/navbar/Navbar";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <div className="font-primary">
        <Navbar />
        <main>
          <MainContent />
        </main>
        <Footer />
      </div>
      <a
        href="#"
        className="top tooltip tooltip-top tooltip"
        data-tip="Back to Top"
      >
        <FontAwesomeIcon
          className="lg:w-14 lg:h-14 w-10 h-10 glass rounded-full"
          icon={faArrowAltCircleUp}
          size="2xl"
        />{" "}
      </a>
    </>
  );
}

export default App;
