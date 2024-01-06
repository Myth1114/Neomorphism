import React from "react";
import "./App.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";
import { RiMickeyLine } from "react-icons/ri";
function App() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  return (
    <div className="App">
      <div className="Container">
        <h1>Neomorphism</h1>

        <div class="ContainerFirstLevel">
          <div class="Box">
            <div className="Clock">
              {hour}:{minute}
            </div>
            <div className="Date">
              <span>22/12/1203</span>
            </div>
            <div className="Smiley">
              <div>
                <span>
                  <RiMickeyLine />
                </span>
              </div>
              <div>
                <span>100%</span>
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
            <div className="Square"></div>
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
            <div className="Rectangle"></div>
          </div>
          <div className="Circle"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
