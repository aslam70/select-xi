import React from 'react';
import SelectedPlayer from './SelectedPlayer';
const SelectedPlayers = ({pursesPlayers,removePlayer}) => {
  return (
    <div className='max-w-[83%] mx-auto '>
      {
        pursesPlayers.map((select)=>(<SelectedPlayer  key={select.id} removePlayer={removePlayer} select={select}></SelectedPlayer>))
      }
    </div>
  );
};

export default SelectedPlayers;