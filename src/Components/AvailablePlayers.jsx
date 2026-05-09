import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ fetchPlayers,availableBalance,setAvailableBalance, setPursesPlayers,pursesPlayers }) => {
  const players = use(fetchPlayers);
  // console.log(players);
  return (
    <div className="max-w-[83%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {players.map((player) => (
        <AvailablePlayer availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} pursesPlayers={pursesPlayers} setPursesPlayers={setPursesPlayers} key={player.id} player={player}></AvailablePlayer>
      ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
