import React, { useState } from "react";
import "./MainComponent.css";

export default function MainComponent() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleClick(boxIndex) {
    // Check if the box is already filled or game is already won
    if (boxes[boxIndex] === null && !Win()) {
      const updatedBoxes = [...boxes];
      updatedBoxes[boxIndex] = currentPlayer;

      setBoxes(updatedBoxes);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

//   function Win() {
//     // Define all possible winning combinations
//     const winConditions = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//     ];

//     // Check if any of the win conditions are satisfied
//     for (let condition of winConditions) {
//       const [a, b, c] = condition;
//       if (
//         boxes[a] &&
//         boxes[a] === boxes[b] &&
//         boxes[a] === boxes[c]
//       ) {
//         return true;
//       }
//     }

//     return false;
//   }
function Win() {
    if (
      checkCondition(boxes[0], boxes[1], boxes[2]) ||
      checkCondition(boxes[3], boxes[4], boxes[5]) ||
      checkCondition(boxes[6], boxes[7], boxes[8]) ||
      checkCondition(boxes[0], boxes[4], boxes[8]) ||
      checkCondition(boxes[2], boxes[4], boxes[6]) ||
      checkCondition(boxes[0], boxes[3], boxes[6]) ||
      checkCondition(boxes[1], boxes[4], boxes[7]) ||
      checkCondition(boxes[2], boxes[5], boxes[8])
    ) {
      return true;
    }
    return false;}

    function checkCondition(a, b, c) {
        if ( a && a === b && a === c) {
          return true;
        }
        return false;
      }

  function Draw() {
    return boxes.every((box) => box !== null) && !Win();
  }

  let message = "";
  if (Win()) {
    message = "Winner: " + currentPlayer;
  } else if (Draw()) {
    message = "Draw";
  } else {
    message = "Next player: " + (currentPlayer === "X" ? "O" : "X");
  }

  return (
    <div>
      <center>
        <div className="square">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              onClick={() => handleClick(index)}
            >
              {box}
            </div>
          ))}
        </div>
        <p>{message}</p>
      </center>
    </div>
  );
}
