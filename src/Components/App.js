import React from "react";

const App = () => {
  return (
    <>
      <div id="boardContainer">
        <div id="board">
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="rows">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
      <div id="diceContainer">
        <div id="dice">
          <div className="face" id="fone">
            <div className="dot"></div>
          </div>
          <div className="face" id="ftwo"></div>
          <div className="face" id="fthree"></div>
          <div className="face" id="ffour">
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="face" id="ffive">
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="dot"></div>
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="face" id="fsix">
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="two_in_row">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button
        // onClick={() => {
        //   document.getElementById("dice").style.transform =
        //     "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        //   setTimeout(() => {
        //     document.getElementById("dice").style.transform = "none";
        //   }, 1000);
        // }}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default App;
