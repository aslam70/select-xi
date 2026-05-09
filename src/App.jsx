import "./App.css";
import Navbar from "./Navbar";
import { ToastContainer, } from 'react-toastify';
import { Suspense, useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers";
const fetchPlayers = fetch("../public/player.json").then((res) => res.json());
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [pursesPlayers, setPursesPlayers] = useState([]);
  // console.log(pursesPlayers)
  const removePlayer = (p) => {
    const filteredData = pursesPlayers.filter((ply) => ply.name !== p.name);
    setPursesPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="flex justify-between items-center max-w-[83%] mx-auto mt-8">
        <h2 className=" font-bold">
          {toggle === true ? "Available Players" :  `Selected Players (${pursesPlayers.length}/6)`}
        </h2>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-3 border-2 border-r-0 border-gray-300 rounded-l-xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-3 border-2 border-l-0 border-gray-300 rounded-r-xl ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected({pursesPlayers.length})
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            fetchPlayers={fetchPlayers}
            pursesPlayers={pursesPlayers}
            setPursesPlayers={setPursesPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          pursesPlayers={pursesPlayers}
        ></SelectedPlayers>
      )}
       <ToastContainer />
    </>
  );
}

export default App;
