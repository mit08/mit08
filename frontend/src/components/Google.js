import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gapi } from 'gapi-script';
function Google() {
  var refe = useRef();
  var [isLogIn, setLogIn] = useState(false);
  var [data, setData] = useState({});
  const obj = window.gapi;
  var CLIENT_ID = "355367033227-g3rr36a02g06lrev47m1fa94nc7k8fle.apps.googleusercontent.com";
  var API_KEY = "AIzaSyAR18WEx2u15IrGzRRYgXTslGGRKWwTnoM";
  const SCOPES = "https://mail.google.com/";
  obj.load("client:auth2", async () => {
    obj.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPES,
      plugin_name: "Cdsa",
    })
  });
  const handleCal = async () => {
    var dov = window.gapi.auth2.getAuthInstance();
    if (isLogIn === false) {
      await dov.signIn().then((e) => {
        console.log(e)
        var db = e.qv;
        setData(() => { return db; });
        console.log(data);
        console.log(e); console.log(window.gapi.auth2);
        console.log(e.getAuthResponse());
      })
    }
    var state = window.gapi.auth2.getAuthInstance().isSignedIn.Oa;
    setLogIn(state);
  }
  // logout functions for expermintal purpose
  const out = () => {
    window.gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log(window.gapi.auth2.getAuthInstance().isSignedIn);

    }).catch(err => console);
  }
  return (
    <>
      <button onClick={handleCal} className="btn_google" ref={refe}>
        <div className='btn_div_google'>
          <div className="subdiv01">
            <i className='fa fa-google' id="btn_i_google"></i>
          </div>
          <div className="subdiv02">
            <p className='btn_p_google'>Click to sign into Google</p>
          </div>
        </div>
      </button>
      {
        isLogIn === true ? <p style={{ color: "green", fontWeight: "800" }}> user already logged in</p> : <p style={{ color: "red", fontWeight: "800" }}> log in required</p>
      }
      {
        isLogIn === true ?
          <>
            <p>First Name :{data.BZ}</p>
            <p>Last Name :{data.RX}</p>
            <p>email :{data.dw}</p>z
            <p>Profile Link :{data.yO}</p>
          </> : <></>
      }
      <button onClick={out}>sign out</button>
    </>
  );
}

export default Google;