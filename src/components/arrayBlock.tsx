import "./components.scss";
import { useEffect, useState } from "react";
interface ArrayProps {
  size: number;
  arr : number[];
  setArr : React.Dispatch<React.SetStateAction<number[]>>;
}
export default function ArrayBlock({ size, arr, setArr}: ArrayProps) {

  const swap = (arr: number[], i: number, j: number) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  useEffect(()=>{

      const shuffledArray = [...arr];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          swap(shuffledArray, i, j);
        }
        setArr([...shuffledArray]);
    },[])
//   const handleShuffle = () => {
//   };

  return (
    <>
      <div className="array-container">
        <div
          className="array-wrapper"
          style={{ scale: `calc(1 / (${size} * 0.1))` }}
        >
          <div className="array">
            {arr.map((element: number, index: number) => {
              return (
                <div className="array-element" key={`${element}-${index}`}>
                  {element}
                </div>
              );
            })}
          </div>
          <div className="index">
            {arr.map((element: number, index: number) => {
              return (
                <div className="index-element" key={`${element}-${index}`}>
                  {index}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="edit"> */}
      {/* <button onClick={handleShuffle}>shuffle</button> */}
      {/* </div> */}
    </>
  );
}
