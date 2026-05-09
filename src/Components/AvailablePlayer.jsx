// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faFlag } from "@fortawesome/free-solid-svg-icons";
// import { toast } from "react-toastify";
// const AvailablePlayer = ({
//   player,
//   setAvailableBalance,
//   availableBalance,
//   setPursesPlayers,
//   pursesPlayers,
// }) => {
//   // console.log(player);
//   const [isSelected, setIsSelected] = useState(false);
//   const { name, nationality, position, rating, price, image } = player;
//   return (
//     <div>
//       <img
//         className="w-full h-70 object-cover rounded-lg"
//         src={image}
//         alt={image}
//       />
//       <div className="flex items-center gap-1">
//         <FontAwesomeIcon icon={faUser} />
//         <h2>{name}</h2>
//       </div>
//       <div className="flex justify-between">
//         <div className="flex items-center gap-1">
//           <FontAwesomeIcon icon={faFlag} />
//           <p>{nationality}</p>
//         </div>
//         <h3>All Rounder</h3>
//       </div>
//       <p>{rating}</p>
//       <div className="flex justify-between">
//         <p className="font-bold">{position}</p>
//         <p>{position}</p>
//       </div>
//       <div className="flex justify-between items-center">
//         <p>{price}</p>
//         <button
//           disabled={isSelected}
//           onClick={() => {
//             if (availableBalance < price) {
//               toast("not enough coin");
//               return;
//             }
//             if (pursesPlayers.length === 6) {
//               toast("6 players already added");
//               return;
//             }
//             setIsSelected(true);
//             setAvailableBalance(availableBalance - price);
//             setPursesPlayers([...pursesPlayers, player]);
//           }}
//           className="btn"
//         >
//           {isSelected === true ? "Selected" : "Choose Player"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvailablePlayer;

// AvailablePlayer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AvailablePlayer = ({
  player,
  setAvailableBalance,
  availableBalance,
  setPursesPlayers,
  pursesPlayers,
}) => {
  const { name, nationality, position, skill, rating, price, image } = player;

  // ✅ Fix 1: local state er bodole pursesPlayers theke derive kora
  const isSelected = pursesPlayers.some((p) => p.id === player.id);

  return (
    <div>
      <img
        className="w-full h-70 object-cover rounded-lg"
        src={image}
        alt={name}
      />
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faUser} />
        <h2>{name}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faFlag} />
          <p>{nationality}</p>
        </div>
        {/* ✅ Fix 2: hardcoded "All Rounder" er bodole skill field */}
        <h3>{skill}</h3>
      </div>
      {/* ✅ Fix 3: rating show kora */}
      <p>Rating: {rating}</p>
      <div className="flex justify-between">
        {/* ✅ Fix 4: position ekta jaygay, duplicate remove */}
        <p className="font-bold">{position}</p>
        {/* ✅ Fix 5: price formatted */}
        <p>৳ {price.toLocaleString("en-IN")}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          disabled={isSelected}
          onClick={() => {
            if (availableBalance < price) {
              // ✅ Fix 6: toast.error diye red toast
              toast.error("Not enough balance!");
              return;
            }
            if (pursesPlayers.length === 6) {
              toast.error("Squad full! Max 6 players allowed.");
              return;
            }
            setAvailableBalance(availableBalance - price);
            setPursesPlayers([...pursesPlayers, player]);
          }}
          className="btn"
        >
          {isSelected ? "Selected ✓" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default AvailablePlayer;