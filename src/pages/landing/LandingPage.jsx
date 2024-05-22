import {Container} from "react-bootstrap";
import Banner from "../../components/Banner.jsx";
import Footer from "../../components/Footer.jsx";
import ArticleBanner from "./component/ArticleBanner.jsx";
import './landingPage.css'
import FrequentlyQuestion from "./component/FrequentlyQuestion.jsx";

function LandingPage({children}) {
  return (
    <div className="d-flex flex-column vh-100">
      <Banner/>
      <ArticleBanner/>
      <FrequentlyQuestion/>
      <Footer/>
    </div>
  )
}

export default LandingPage