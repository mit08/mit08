// import React from 'react'
import { useRef, useState, useEffect, useContext } from "react";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// const LOGIN_URL = "/auth";

function LoginUser() {
  //   const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  return (
    <>
      <section className="login-page">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <h1>Log In</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="pasword">Password :</label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <p>
            <small>
              <span className="line">
                <a href="/forgotp">Forgot Password?</a>
              </span>
            </small>
          </p>
        </div>
        <div className="align">
          <button variant="outline-dark" type="submit">
            LogIn
          </button>
        </div>
        {/* </form> */}
        <p>
          <small>
            {" "}
            Don't have an Account?
            <span className="line">
              <a href="/Registration">Sign Up</a>
            </span>
          </small>
        </p>
      </section>
    </>
    //   )}
    // </>
  );
}

export default LoginUser;
