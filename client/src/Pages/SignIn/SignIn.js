import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./SignIn.css";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function SignIn() {
  const [userData, setUserData] = useContext(UserContext);
  const [isLogIn, setLogIn] = useState(true);
  const [isLogIn2, setLogIn2] = useState(false);
  const navigate = useNavigate();

  const showForgot = (e) => {
    e.preventDefault();
    setLogIn2(true);
  };

  const showSignIn = (e) => {
    e.preventDefault();
    setLogIn(true);
    setLogIn2(false);
  };
  const showSignUp = (e) => {
    e.preventDefault();
    setLogIn(false);
    setLogIn2(false);
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user]);

  return (
    <section id="home">
      <div className="slide-home">
        <div className="slide-item">
          <div className="container">
            <div className="row hero-padd">
              <div className="col-md-6 col-12 col-sm-6">
                <div className="authfy-login">
                  <div className="alert alert-danger">
                    Please log in to your account first.
                  </div>
                  {isLogIn2 ? (
                    <ForgotPassword
                      showSignIn={showSignIn}
                      showSignUp={showSignUp}
                    />
                  ) : isLogIn ? (
                    <Login showSignUp={showSignUp} showForgot={showForgot} />
                  ) : (
                    <SignUp showSignIn={showSignIn} />
                  )}
                </div>
              </div>

              <div className="col-md-6 col-12 col-sm-6">
                <div className="padd-text fadeInLeft">
                  <small className="small-text">About</small>
                  <h2 className="title-h2">Alx Networks</h2>
                  <p className="font-p mg-bt-30">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                  <p className="font-p mg-bt-30">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                  <a href="/explained/" className="btn btn-blue">
                    How it works
                  </a>
                </div>
                {/* <div className="opensessionwrapper">
                         <div className="opensession">
                            <img src="/files/misc/Open-session-flyer-mar6th2.jpg" alt="">
                         </div>
                         <div className="opentextwrapper">
                            <p><a href="https://us02web.zoom.us/j/89042055247?pwd=SHBhcHpFYmg0dXY4L2pVdWJQRS9DUT09">Click here to join the open session</a></p>
                         </div> 
                      </div>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
