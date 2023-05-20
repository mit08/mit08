import './App.css';
// import './index.css';
import Practice from './components/Practice';
import NavBar from './components/NavBar';
import Login from './components/login';
import SignUp from './components/signup';
import AirPollution from './components/AirPollution' ;
import Compare from './components/Compare';
import Weather from './components/Weather';
import Home from './components/Home' ;
import AvgSalary from './components/AvgSalary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const [str1, setstr1] = useState("");
  const [Userid,setUserid]=useState("")
  // var str1="delhi"
  function changestr1(newstr) {
    setstr1(newstr);
    // str1=newstr;
  }
  // App.use(cors());
  // document.body.style.backgroundImage = "https://media.istockphoto.com/id/1252492857/vector/abstract-white-monochrome-vector-background-for-design-brochure-website-flyer-geometric.jpg?s=1024x1024&w=is&k=20&c=kVEY0hEoc7JSCqNlpvO9Cr7oELuccNKl2zic2uwD19U="
  useEffect(() => {
    
    // document.body.style.backgroundImage = `url(${"https://t3.ftcdn.net/jpg/04/85/99/36/360_F_485993606_sRsHaBPEbZVumWht2od5P6zsqCgynWMF.jpg"})`
    document.body.style.backgroundImage = `url(${"https://img.freepik.com/free-photo/blue-abstract-gradient-wave-wallpaper_53876-108364.jpg?w=1060&t=st=1680501176~exp=1680501776~hmac=2c43a2074fc3eca7e7b16c740a126a8575c0c45b08a989e6eb5f6e626672f8c0"})`
    document.body.style.height = "100%";
    document.body.style.backgroundSize = "1920px 1080px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [])
  return (

    <BrowserRouter>
      <div id="main1">
        <NavBar func={changestr1} uid={Userid} />
      </div>
      <div className="mt-5  container" >
        <Routes >
          <Route exact path="/Practice" element={<Practice />} />
          <Route exact path="/Search" element={<Search str={str1} />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/AvgSalary" element={<AvgSalary />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Compare" element={<Compare />} />
          <Route exact path="/Weather" element={<Weather />} />
          <Route exact path="/AirPollution" element={<AirPollution />} />


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;