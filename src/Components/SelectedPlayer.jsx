import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const SelectedPlayer = ({ select, removePlayer }) => {
  // console.log(select);
  const handleRemove = () => {
    removePlayer(select)
  };
  return (
    <div className="flex justify-between items-center mt-5 border border-gray-300 p-3 rounded-xl">
      <div className="flex">
        <img
          className="w-[50px] h-[50px] rounded-xl"
          src={select.image}
          alt="image"
        />
        <div>
          <h2 className="font-bold ml-3">{select.name}</h2>
          <h3 className="ml-3">{select.position}</h3>
        </div>
      </div>
      <div>
        <button onClick={handleRemove}>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: "rgb(235, 76, 124)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
