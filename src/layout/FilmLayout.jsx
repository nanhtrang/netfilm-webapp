import {Container} from "react-bootstrap";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import ArticleBanner from "../components/ArticleBanner.jsx";

function FilmLayout({children}) {
  return (
    <div className="d-flex flex-column vh-100">
      <Banner/>
      <ArticleBanner/>
      <Footer />
    </div>
  )
}

export default FilmLayout