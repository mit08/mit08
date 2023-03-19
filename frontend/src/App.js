import './App.css';
import Practice from './components/Practice';
import Waterqulity from './components/Waterqulity';
import NavBar from './components/NavBar';
import Polution from './components/Polution';
import ReviewForm from './components/ReviewForm';
import LoginUser from './components/LoginUser';
import Register from './components/Register';
import Compare from './components/Compare';
import Weather from './components/Weather';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

import { useEffect, useState } from 'react';


function App() {
  const [str1, setstr1] = useState("");
  // var str1="delhi"
  function changestr1(newstr) {
    setstr1(newstr);

    // str1=newstr;


  }
  // App.use(cors());
  // document.body.style.backgroundImage = "https://media.istockphoto.com/id/1252492857/vector/abstract-white-monochrome-vector-background-for-design-brochure-website-flyer-geometric.jpg?s=1024x1024&w=is&k=20&c=kVEY0hEoc7JSCqNlpvO9Cr7oELuccNKl2zic2uwD19U="
  useEffect(() => {
    document.body.style.backgroundImage = `url(${"https://t3.ftcdn.net/jpg/04/85/99/36/360_F_485993606_sRsHaBPEbZVumWht2od5P6zsqCgynWMF.jpg"})`
    document.body.style.height = "100%";
    document.body.style.backgroundSize = "1920px 1080px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";



  }, []
  )
  return (

    <BrowserRouter>
      <div id="main1">
        <NavBar func={changestr1} />
        {/* <NavBar /> */}
      </div>
      <div className="mt-5  container" >
        <Routes >
          <Route exact path="/Practice" element={<Practice />} />
          <Route exact path="/Polution" element={<Polution />} />
          {/* <Route exact path="/Waterqulity" element={<Waterqulity />} /> */}
          <Route exact path="/ReviewForm" element={<ReviewForm />} />
          <Route exact path="/Search" element={<Search str={str1} />} />

          <Route exact path="/Register" element={<Register />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          <Route exact path="/LoginUser" element={<LoginUser />} />
          <Route exact path="/Compare" element={<Compare />} />
          <Route exact path="/Weather" element={<Weather />} />



        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
