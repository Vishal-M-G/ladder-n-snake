import React, { useState, useEffect } from "react";
import EjectIcon from "@mui/icons-material/Eject";

const App = () => {
  let [noP, setNoP] = useState(0);
  let [dieVal, setDieVal] = useState(5);
  let [turn, setTurn] = useState(0);
  let [open, inVopen] = useState(true);
  let [ar, setAr] = useState([
    [0, false],
    [0, false],
    [0, false],
    [0, false],
  ]);

  let [res, setRes] = useState([-1, -1, -1]);

  useEffect(() => {
    if (turn != 100 && ar[turn][1] === true) setTurn((turn + 1) % noP);
    setTimeout(() => {
      let fc = 0;
      for (let k of ar) {
        if (k[1] === true) fc++;
      }
      if (fc === noP - 1) {
        alert("Game Over");
        document.location.reload();
      }
    }, 1);
  });

  const LightBoard = () => {
    return (
      <div id="lgb">
        <div className="lHeading">
          <p>
            🐍 Welcome to VmG's <span>Ladder & Snake</span> 🐍
          </p>
        </div>
        <div className="lBody">
          <div>
            <h3 style={{ textAlign: "center" }}>
              <i>Its Recomended to play in full scrern mode</i>
            </h3>
            <h1 style={{ display: "inline" }}>Select number of players</h1>
            &nbsp;&nbsp;
            <select
              style={{ height: "5vh", width: "4vw" }}
              value={noP}
              onChange={(self) => {
                setNoP(parseInt(self.target.value));
              }}
            >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button
            id="start"
            onClick={() => {
              if (noP > 1) inVopen(false);
              else alert("Common bro ! number of players cannot be zero 😆 ");
            }}
          >
            Start
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {open && <LightBoard />}
      <div id="boardContainer">
        <div id="board">
          <div className="rows">
            <img src="cobra.png" alt="snake" className="snakes" id="sf38_20" />
            <img src="cobra.png" alt="snake" className="snakes" id="sf99_77" />
            <img src="cobra.png" alt="snake" className="snakes" id="sf66_26" />
            <img
              src="ladder.png"
              alt="ladder"
              className="imgLadder"
              id="f6_t52"
            />
            <img
              src="ladder.png"
              alt="ladder"
              className="imgLadder"
              id="f24_t62"
            />
            <img
              src="ladder.png"
              alt="ladder"
              className="imgLadder"
              id="f55_t71"
            />
            <div className="box" id="u100">
              {noP > 0 && ar[0][0] >= 100 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] >= 100 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] >= 100 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] >= 100 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>FINISH</h3>
            </div>
            <div className="box" id="u99">
              {noP > 0 && ar[0][0] === 99 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 99 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 99 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 99 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>99</h3>
            </div>
            <div className="box" id="u98">
              {noP > 0 && ar[0][0] === 98 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 98 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 98 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 98 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>98</h3>
            </div>
            <div className="box" id="u97">
              {noP > 0 && ar[0][0] === 97 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 97 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 97 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 97 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>97</h3>
            </div>
            <div className="box" id="u96">
              {noP > 0 && ar[0][0] === 96 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 96 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 96 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 96 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>96</h3>
            </div>
            <div className="box" id="u95">
              {noP > 0 && ar[0][0] === 95 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 95 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 95 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 95 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>95</h3>
            </div>
            <div className="box" id="u94">
              {noP > 0 && ar[0][0] === 94 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 94 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 94 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 94 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>94</h3>
            </div>
            <div className="box" id="u93">
              {noP > 0 && ar[0][0] === 93 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 93 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 93 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 93 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>93</h3>
            </div>
            <div className="box" id="u92">
              {noP > 0 && ar[0][0] === 92 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 92 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 92 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 92 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>92</h3>
            </div>
            <div className="box" id="u91">
              {noP > 0 && ar[0][0] === 91 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 91 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 91 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 91 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>91</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u81">
              {noP > 0 && ar[0][0] === 81 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 81 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 81 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 81 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>81</h3>
            </div>
            <div className="box" id="u82">
              {noP > 0 && ar[0][0] === 82 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 82 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 82 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 82 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>82</h3>
            </div>
            <div className="box" id="u83">
              {noP > 0 && ar[0][0] === 83 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 83 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 83 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 83 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>83</h3>
            </div>
            <div className="box" id="u84">
              {noP > 0 && ar[0][0] === 84 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 84 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 84 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 84 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>84</h3>
            </div>
            <div className="box" id="u85">
              {noP > 0 && ar[0][0] === 85 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 85 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 85 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 85 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>85</h3>
            </div>
            <div className="box" id="u86">
              {noP > 0 && ar[0][0] === 86 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 86 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 86 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 86 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>86</h3>
            </div>
            <div className="box" id="u87">
              {noP > 0 && ar[0][0] === 87 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 87 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 87 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 87 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>87</h3>
            </div>
            <div className="box" id="u88">
              {noP > 0 && ar[0][0] === 88 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 88 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 88 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 88 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>88</h3>
            </div>
            <div className="box" id="u89">
              {noP > 0 && ar[0][0] === 89 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 89 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 89 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 89 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>89</h3>
            </div>
            <div className="box" id="u90">
              {noP > 0 && ar[0][0] === 90 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 90 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 90 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 90 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>90</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u80">
              {noP > 0 && ar[0][0] === 80 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 80 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 80 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 80 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>80</h3>
            </div>
            <div className="box" id="u79">
              {noP > 0 && ar[0][0] === 79 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 79 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 79 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 79 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>79</h3>
            </div>
            <div className="box" id="u78">
              {noP > 0 && ar[0][0] === 78 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 78 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 78 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 78 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>78</h3>
            </div>
            <div className="box" id="u77">
              {noP > 0 && ar[0][0] === 77 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 77 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 77 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 77 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>77</h3>
            </div>
            <div className="box" id="u76">
              {noP > 0 && ar[0][0] === 76 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 76 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 76 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 76 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>76</h3>
            </div>
            <div className="box" id="u75">
              {noP > 0 && ar[0][0] === 75 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 75 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 75 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 75 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>75</h3>
            </div>
            <div className="box" id="u74">
              {noP > 0 && ar[0][0] === 74 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 74 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 74 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 74 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>74</h3>
            </div>
            <div className="box" id="u73">
              {noP > 0 && ar[0][0] === 73 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 73 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 73 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 73 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>73</h3>
            </div>
            <div className="box" id="u72">
              {noP > 0 && ar[0][0] === 72 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 72 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 72 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 72 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>72</h3>
            </div>
            <div className="box" id="u71">
              {noP > 0 && ar[0][0] === 71 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 71 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 71 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 71 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>71</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u61">
              {noP > 0 && ar[0][0] === 61 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 61 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 61 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 61 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>61</h3>
            </div>
            <div className="box" id="u62">
              {noP > 0 && ar[0][0] === 62 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 62 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 62 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 62 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>62</h3>
            </div>
            <div className="box" id="u63">
              {noP > 0 && ar[0][0] === 63 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 63 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 63 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 63 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>63</h3>
            </div>
            <div className="box" id="u64">
              {noP > 0 && ar[0][0] === 64 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 64 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 64 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 64 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>64</h3>
            </div>
            <div className="box" id="u65">
              {noP > 0 && ar[0][0] === 65 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 65 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 65 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 65 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>65</h3>
            </div>
            <div className="box" id="u66">
              {noP > 0 && ar[0][0] === 66 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 66 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 66 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 66 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>66</h3>
            </div>
            <div className="box" id="u67">
              {noP > 0 && ar[0][0] === 67 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 67 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 67 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 67 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>67</h3>
            </div>
            <div className="box" id="u68">
              {noP > 0 && ar[0][0] === 68 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 68 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 68 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 68 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>68</h3>
            </div>
            <div className="box" id="u69">
              {noP > 0 && ar[0][0] === 69 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 69 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 69 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 69 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>69</h3>
            </div>
            <div className="box" id="u70">
              {noP > 0 && ar[0][0] === 70 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 70 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 70 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 70 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>70</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u60">
              {noP > 0 && ar[0][0] === 60 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 60 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 60 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 60 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>60</h3>
            </div>
            <div className="box" id="u59">
              {noP > 0 && ar[0][0] === 59 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 59 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 59 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 59 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>59</h3>
            </div>
            <div className="box" id="u58">
              {noP > 0 && ar[0][0] === 58 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 58 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 58 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 58 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>58</h3>
            </div>
            <div className="box" id="u57">
              {noP > 0 && ar[0][0] === 57 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 57 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 57 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 57 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>57</h3>
            </div>
            <div className="box" id="u56">
              {noP > 0 && ar[0][0] === 56 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 56 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 56 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 56 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>56</h3>
            </div>
            <div className="box" id="u55">
              {noP > 0 && ar[0][0] === 55 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 55 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 55 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 55 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>55</h3>
            </div>
            <div className="box" id="u54">
              {noP > 0 && ar[0][0] === 54 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 54 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 54 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 54 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>54</h3>
            </div>
            <div className="box" id="u53">
              {noP > 0 && ar[0][0] === 53 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 53 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 53 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 53 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>53</h3>
            </div>
            <div className="box" id="u52">
              {noP > 0 && ar[0][0] === 52 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 52 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 52 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 52 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>52</h3>
            </div>
            <div className="box" id="u51">
              {noP > 0 && ar[0][0] === 51 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 51 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 51 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 51 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>51</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u41">
              {noP > 0 && ar[0][0] === 41 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 41 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 41 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 41 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>41</h3>
            </div>
            <div className="box" id="u42">
              {noP > 0 && ar[0][0] === 42 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 42 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 42 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 42 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>42</h3>
            </div>
            <div className="box" id="u43">
              {noP > 0 && ar[0][0] === 43 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 43 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 43 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 43 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>43</h3>
            </div>
            <div className="box" id="u44">
              {noP > 0 && ar[0][0] === 44 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 44 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 44 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 44 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>44</h3>
            </div>
            <div className="box" id="u45">
              {noP > 0 && ar[0][0] === 45 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 45 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 45 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 45 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>45</h3>
            </div>
            <div className="box" id="u46">
              {noP > 0 && ar[0][0] === 46 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 46 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 46 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 46 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>46</h3>
            </div>
            <div className="box" id="u47">
              {noP > 0 && ar[0][0] === 47 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 47 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 47 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 47 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>47</h3>
            </div>
            <div className="box" id="u48">
              {noP > 0 && ar[0][0] === 48 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 48 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 48 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 48 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>48</h3>
            </div>
            <div className="box" id="u49">
              {noP > 0 && ar[0][0] === 49 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 49 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 49 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 49 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>49</h3>
            </div>
            <div className="box" id="u50">
              {noP > 0 && ar[0][0] === 50 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 50 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 50 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 50 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>50</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u40">
              {noP > 0 && ar[0][0] === 40 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 40 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 40 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 40 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>40</h3>
            </div>
            <div className="box" id="u39">
              {noP > 0 && ar[0][0] === 39 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 39 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 39 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 39 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>39</h3>
            </div>
            <div className="box" id="u38">
              {noP > 0 && ar[0][0] === 38 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 38 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 38 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 38 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>38</h3>
            </div>
            <div className="box" id="u37">
              {noP > 0 && ar[0][0] === 37 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 37 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 37 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 37 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>37</h3>
            </div>
            <div className="box" id="u36">
              {noP > 0 && ar[0][0] === 36 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 36 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 36 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 36 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>36</h3>
            </div>
            <div className="box" id="u35">
              {noP > 0 && ar[0][0] === 35 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 35 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 35 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 35 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>35</h3>
            </div>
            <div className="box" id="u34">
              {noP > 0 && ar[0][0] === 34 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 34 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 34 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 34 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>34</h3>
            </div>
            <div className="box" id="u33">
              {noP > 0 && ar[0][0] === 33 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 33 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 33 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 33 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>33</h3>
            </div>
            <div className="box" id="u32">
              {noP > 0 && ar[0][0] === 32 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 32 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 32 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 32 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>32</h3>
            </div>
            <div className="box" id="u31">
              {noP > 0 && ar[0][0] === 31 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 31 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 31 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 31 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>31</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u21">
              {noP > 0 && ar[0][0] === 21 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 21 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 21 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 21 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>21</h3>
            </div>
            <div className="box" id="u22">
              {noP > 0 && ar[0][0] === 22 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 22 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 22 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 22 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>22</h3>
            </div>
            <div className="box" id="u23">
              {noP > 0 && ar[0][0] === 23 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 23 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 23 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 23 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>23</h3>
            </div>
            <div className="box" id="u24">
              {noP > 0 && ar[0][0] === 24 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 24 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 24 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 24 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>24</h3>
            </div>
            <div className="box" id="u25">
              {noP > 0 && ar[0][0] === 25 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 25 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 25 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 25 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>25</h3>
            </div>
            <div className="box" id="u26">
              {noP > 0 && ar[0][0] === 26 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 26 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 26 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 26 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>26</h3>
            </div>
            <div className="box" id="u27">
              {noP > 0 && ar[0][0] === 27 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 27 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 27 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 27 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>27</h3>
            </div>
            <div className="box" id="u28">
              {noP > 0 && ar[0][0] === 28 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 28 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 28 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 28 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>28</h3>
            </div>
            <div className="box" id="u29">
              {noP > 0 && ar[0][0] === 29 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 29 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 29 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 29 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>29</h3>
            </div>
            <div className="box" id="u30">
              {noP > 0 && ar[0][0] === 30 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 30 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 30 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 30 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>30</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id="u20">
              {noP > 0 && ar[0][0] === 20 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 20 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 20 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 20 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>20</h3>
            </div>
            <div className="box" id="u19">
              {noP > 0 && ar[0][0] === 19 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 19 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 19 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 19 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>19</h3>
            </div>
            <div className="box" id="u18">
              {noP > 0 && ar[0][0] === 18 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 18 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 18 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 18 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>18</h3>
            </div>
            <div className="box" id="u17">
              {noP > 0 && ar[0][0] === 17 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 17 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 17 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 17 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>17</h3>
            </div>
            <div className="box" id="u16">
              {noP > 0 && ar[0][0] === 16 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 16 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 16 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 16 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>16</h3>
            </div>
            <div className="box" id="u15">
              {noP > 0 && ar[0][0] === 15 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 15 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 15 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 15 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>15</h3>
            </div>
            <div className="box" id="u14">
              {noP > 0 && ar[0][0] === 14 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 14 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 14 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 14 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>14</h3>
            </div>
            <div className="box" id="u13">
              {noP > 0 && ar[0][0] === 13 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 13 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 13 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 13 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>13</h3>
            </div>
            <div className="box" id="u12">
              {noP > 0 && ar[0][0] === 12 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 12 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 12 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 12 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>12</h3>
            </div>
            <div className="box" id="u11">
              {noP > 0 && ar[0][0] === 11 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 11 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 11 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 11 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>11</h3>
            </div>
          </div>
          <div className="rows">
            <div className="box" id=">u1">
              {noP > 0 && (ar[0][0] === 1 || ar[0][0] === 0) && (
                <EjectIcon className="players" id="player1" />
              )}
              {noP > 1 && (ar[1][0] === 1 || ar[1][0] === 0) && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && (ar[2][0] === 1 || ar[2][0] === 0) && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && (ar[3][0] === 1 || ar[3][0] === 0) && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>1</h3>
            </div>
            <div className="box" id=">u2">
              {noP > 0 && ar[0][0] === 2 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 2 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 2 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 2 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>2</h3>
            </div>
            <div className="box" id=">u3">
              {noP > 0 && ar[0][0] === 3 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 3 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 3 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 3 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>3</h3>
            </div>
            <div className="box" id=">u4">
              {noP > 0 && ar[0][0] === 4 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 4 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 4 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 4 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>4</h3>
            </div>
            <div className="box" id=">u5">
              {noP > 0 && ar[0][0] === 5 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 5 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 5 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 5 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>5</h3>
            </div>
            <div className="box" id=">u6">
              {noP > 0 && ar[0][0] === 6 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 6 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 6 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 6 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>6</h3>
            </div>
            <div className="box" id=">u7">
              {noP > 0 && ar[0][0] === 7 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 7 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 7 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 7 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>7</h3>
            </div>
            <div className="box" id=">u8">
              {noP > 0 && ar[0][0] === 8 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 8 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 8 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 8 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>8</h3>
            </div>
            <div className="box" id=">u9">
              {noP > 0 && ar[0][0] === 9 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 9 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 9 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 9 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>9</h3>
            </div>
            <div className="box" id="u10">
              {noP > 0 && ar[0][0] === 10 && (
                <EjectIcon className="players" id="player1" />
              )}{" "}
              {noP > 1 && ar[1][0] === 10 && (
                <EjectIcon className="players" id="player2" />
              )}
              {noP > 2 && ar[2][0] === 10 && (
                <EjectIcon className="players" id="player3" />
              )}
              {noP > 3 && ar[3][0] === 10 && (
                <EjectIcon className="players" id="player4" />
              )}
              <h3>10</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="diceContainer">
        <button
          id="random"
          onClick={(tar) => {
            tar.target.disabled = true;
            let obj = {
              1: { x: 0, y: -90, z: 0 },
              2: { x: 0, y: 180, z: 0 },
              3: { x: -90, y: 0, z: 0 },
              4: { x: 90, y: 0, z: 0 },
              5: { x: 0, y: 0, z: 0 },
              6: { x: 0, y: 90, z: 0 },
            };
            let ele = document.getElementById("dice");
            let k = (parseInt(Math.random() * 1000) % 6) + 1;
            setDieVal(k);
            let rand = [
              360, 720, 1080, 1440, 1800, 2160, 2520, 2880, 3240, 3600,
            ];
            ele.style.transform = `rotateX(${
              obj[k].x + rand[parseInt(Math.random() * 1000) % 10]
            }deg) rotateY(${
              obj[k].y + rand[parseInt(Math.random() * 1000) % 10]
            }deg) rotateZ(${
              obj[k].z + rand[parseInt(Math.random() * 1000) % 10]
            }deg)`;
            ele.style.transition = "transform 3s";
            setTimeout(() => {
              ar[turn][0] += k;
              if (ar[turn][0] >= 100 && ar[turn][1] === false) {
                for (let i = 0; i < noP - 1; i++) {
                  if (res[i] === -1) {
                    res[i] = turn;
                    break;
                  }
                }
                ar[turn][1] = true;
              }
              if (
                ar[turn][0] === 6 ||
                ar[turn][0] === 24 ||
                ar[turn][0] === 55 ||
                ar[turn][0] === 99 ||
                ar[turn][0] === 38 ||
                ar[turn][0] === 66
              ) {
                let t = turn;
                setTurn(100);
                setTimeout(() => {
                  if (ar[t][0] === 6) ar[t][0] = 52;
                  else if (ar[t][0] === 24) ar[t][0] = 62;
                  else if (ar[t][0] === 55) ar[t][0] = 71;
                  else if (ar[t][0] === 99) ar[t][0] = 77;
                  else if (ar[t][0] === 38) ar[t][0] = 20;
                  else if (ar[t][0] === 66) ar[t][0] = 26;
                  setTurn((t + 1) % noP);
                  tar.target.disabled = false;
                }, 2000);
              } else {
                tar.target.disabled = false;
                setTurn((turn + 1) % noP);
              }
            }, 3100);
          }}
        >
          Roll the dice
        </button>
        <div id="diceCont">
          <div id="dice">
            <div className="face" id="fone">
              <div className="dot"></div>
            </div>
            <div className="face" id="ftwo">
              <div className="two_in_row" style={{ rotate: "45deg" }}>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="face" id="fthree">
              <div className="three_in_row">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
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
        </div>
        <div>
          {noP > 0 && (
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              Current Turn : Player{" "}
              {
                <EjectIcon
                  style={{
                    fontSize: "50px",
                    border: "1px solid white",
                    marginLeft: "0.5vh",
                  }}
                  id={`player${turn + 1}`}
                />
              }
            </h1>
          )}
        </div>
        <div className="price">
          {noP > 1 && (
            <div>
              <div>
                <img src="gold.png" alt="" />
              </div>
              <div>
                {res[0] != -1 && (
                  <EjectIcon
                    id={`player${res[0] + 1}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </div>
            </div>
          )}
          {noP > 2 && (
            <div>
              <div>
                <img src="silver.png" alt="" />
              </div>
              <div>
                {res[1] != -1 && (
                  <EjectIcon
                    id={`player${res[1] + 1}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </div>
            </div>
          )}
          {noP > 3 && (
            <div>
              <div>
                <img src="bron.png" alt="" />
              </div>
              <div>
                {res[2] != -1 && (
                  <EjectIcon
                    id={`player${res[2] + 1}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default App;
