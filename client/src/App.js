// import CreateBlog from "./createBlog/CreateBlog";
import CreateBlog from "./component/createBlog/CreateBlog"
import EverythingBlog from "./component/everythingBlog/EverythingBlog";
import TopFeature from "./component/features/TopFeature";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import { headerData } from "./component/header/headerData";
import StunningDesign from "./component/stunningDesign/StunningDesign";
import TopBar from "./component/topbar/TopBar";
import './App.css'
import SingleStory from "./pages/singleStory/SingleStory";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import MyStory from "./pages/myStory/MyStory";
import Home from "./pages/home/Home"
import Post from "./pages/post/Post";
import NewPost from "./pages/newPost/NewPost";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
      
      {/* <Header sliders={headerData}/> */}
      {/* <Home/>
      <TopFeature/>
      <StunningDesign/>
      <EverythingBlog/>
      <CreateBlog/> 
      <MyStory/>
      <SingleStory/>
      <About/> */}
      {/* <Contact/> */}
      {/* <NewPost/> */}
      {/* <Post/>       */}
      {/* <Setting/> */}
      {/* <Login/> */}
      {/* <Register/> */}

      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route  path="/register">
            {user ? <Home/> : <Register/>}
        </Route>

        <Route  path="/login">
        {user ? <Home/> : <Login/>}
        </Route>

        <Route exact  path="/my-story">
            <MyStory/>
        </Route>

        <Route  path="/my-story/single-story">
            <SingleStory/>
        </Route>

        <Route exact  path="/about">
            <About/>
        </Route>

        <Route exact  path="/contact">
            <Contact/>
        </Route>

        <Route exact  path="/new-post">
        {user ? <NewPost/> : <Register/>}
        </Route>

        <Route exact  path="/post/:id">
            <Post/>
        </Route>


        <Route exact  path="/about">
            <About/>
        </Route>

        <Route exact  path="/setting">
        {user ? <Setting/> : <Register/>}
        </Route>

        <Route exact  path="/my-story">
            <MyStory/>
        </Route>
      </Switch>
     
      <Footer/>

      <a href="#">
        <i className="fas fa-chevron-circle-up up-arrow btn btn-5"></i>
      </a>
    </Router>

  );
}

export default App;
