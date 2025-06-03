import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MyNavbar from './components/Navbar';
import HomeSection from './HomeSection';
import PastaTypes from './components/PastaTypes';
import ItalianCuisine from './components/Włoskakuchnia';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';
import Newsletter from './components/Newsletter';
import FaqAccordion from './components/FaQ';
import Media from './components/Media';
import CourseHighlightsList from './components/Lists';
import Pricing from './components/Pricing';
import LocationMap from './components/Map';
import CallToAction from './components/End';

function App() {

  return (
    <>
<header>
  <MyNavbar></MyNavbar>

</header>
<main>
  <HomeSection></HomeSection>
  <PastaTypes></PastaTypes>
  <ItalianCuisine></ItalianCuisine>
<CourseHighlightsList></CourseHighlightsList>

<Testimonials></Testimonials>
<Pricing></Pricing>
 <ContactForm></ContactForm>
 <Newsletter></Newsletter>
 <FaqAccordion></FaqAccordion>
<LocationMap></LocationMap>
<CallToAction></CallToAction>
 <Media></Media>
 

</main>
<footer>

</footer>




</>

  );
}

export default App;
