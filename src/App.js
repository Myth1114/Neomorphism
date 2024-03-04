import React, { useState, useEffect } from "react";
import "./App.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";
function App() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  const date = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  console.log(time.toLocaleTimeString());

  return (
    <div className="App">
      <div className="Container">
        <h1>Neomorphism</h1>
        <div className="ContainerFirstLevel">
          <div className="Box">
            <div className="Clock">{hour}</div>
            <div className="Date">
              <span>{date.toLocaleDateString()}</span>
            </div>
            <div className="Smiley">
              <div>
                <img src="Images/smile.png" alt="smile" />
              </div>
              <div>
                <span>
                  <small>100%</small>
                </span>
              </div>
            </div>
          </div>
          <div className="Box2">
            <div className="Square">
              <span>Today</span>
              <div className="Time">
                <div className="GreenSquare">
                  <span>{hour}</span>
                  <small>h</small>
                </div>
                <div className="GreenSquare">
                  <span>{minute}</span>
                  <small>m</small>
                </div>
                <div className="GreenSquare">
                  <span>{second}</span>
                  <small>s</small>
                </div>
              </div>
            </div>
            <div className="SquareTwo">
              <img src="Images/wifi.png" alt="wifi" />
            </div>
          </div>
        </div>
        <div className="ContainerSecondLevel">
          <div className="Box">
            <div className="Box1">
              <div className="SmallSquare">
                <span className="Icons">
                  <FaXTwitter className="Twitter" />
                </span>
              </div>
              <div className="SmallSquare">
                <span className="Icons">
                  <FaChrome className="Chrome" />
                </span>
              </div>
            </div>
            <div className="Rectangle">
              <img src="Images/flight.png" alt="flight" />
            </div>
          </div>
          <div className="Circle">
            <img src="Images/clock.png" alt="clock" />
          </div>
        </div>
        <div className="ContainerThirdLevel">
          <div className="ThirdSquare">
            <div className="Box3">
              <span className="plus">+</span>
              <span className="cup">
                <img src="/Images/glass.png" alt="cup" />
              </span>
              <span className="minus">-</span>
            </div>
            <span>
              <small>0/8</small>
            </span>
            <span>
              <small>Time To drink Water</small>
            </span>
          </div>
          <div className="ThirdRectangle">
            <div className="common">
              <span>
                <small>Calendar</small>
              </span>
              <img src="/Images/calender.png" alt="calender" />
            </div>
            <div className="common">
              <span>
                <small>Notes</small>
              </span>
              <img src="/Images/notes.png" alt="notes" />
            </div>
          </div>
          <div className="ThirdSocial">
            <div className="facebook">
              <img src="/Images/facebook.png" alt="facebook" />
            </div>
            <div className="insta">
              <img src="/Images/insta.png" alt="insta" />
            </div>
          </div>
        </div>
        <div className="Footer">
          <div className="CallIcon">
            <img src="Images/phone.png" alt="call" />
          </div>
          <div className="cameraIcon">
            <img src="Images/camera.png" alt="camera" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
