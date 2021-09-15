import CreateBlog from "./createBlog/CreateBlog";
import EverythingBlog from "./everythingBlog/EverythingBlog";
import TopFeature from "./features/TopFeature";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { headerData } from "./header/headerData";
import Home from "./pages/home/Home";
import StunningDesign from "./stunningDesign/StunningDesign";
import TopBar from "./topbar/TopBar";
import './App.css'

function App() {
  return (
    <>
      <TopBar>
     
      </TopBar>
      <Header sliders={headerData}/>
      <Home/>
      <TopFeature/>
      <StunningDesign/>
      <EverythingBlog/>
      <CreateBlog/>
      <Footer/>
      <a href="#">
        <i className="fas fa-chevron-circle-up up-arrow btn btn-5"></i>
      </a>
    </>

  );
}

export default App;
