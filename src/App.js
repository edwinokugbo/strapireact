import { useState, useEffect } from 'react'
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'
import './css/style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Settings } from './Settings'

function App() {  
  const [appstyle, setAppStyle] = useState('')
  const [homeBG, setHomeBG] = useState(Settings.headerBG[0])
  const [counter, setCounter] = useState(0)
  const [root, setRoot] = useState(true)
  const location = useLocation();

  var interval = null

  // Set slideshow counter on component mount
  useEffect(() => {    
    if (root) {
      interval = setInterval(() => {
        setCounter(prev => prev + 1)
      }, Settings.slideDuration);
    }
    return () => {
      clearInterval(interval)
    }
  }, [])

  // This useEffect is for running the background image change on the home screen
  // You can disacrd it if you dont want that effect. You can also set the image change 
  // feature and duration in the Settings.js file
  useEffect(() => {
    setHomeBG(Settings.headerBG[counter])
    if (counter > 2) {
      setCounter(0)
    }
  }, [counter])

  // Load cover image for only Home page. This useEffect checks for route location
  // changes and loads the background Image to fill the screen, if the route is the home page
  useEffect(() => {
    if (location.pathname === "/") {
      setHomeBG(Settings.headerBG[0])
      setAppStyle("app")
      setRoot(true)
    } else {
      setAppStyle("")
      setHomeBG('')
      setRoot(false)
    }
  }, [location])

  return (
      <div 
        id="app"
        className={appstyle}
        style={{backgroundImage: root ? `url(${homeBG})` : '', transition: "all ease 3s"}}
        >

        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
