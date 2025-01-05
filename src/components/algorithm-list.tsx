"use client";
import { useState } from "react";

function AlgorithmItem({
  parent,
  children,
}: {
  parent: string;
  children: any[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleListParentClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <button className="list-parent" onClick={handleListParentClick} >
        {parent}{isExpanded ? "▲" : "▼"}
      </button>
      <div className="list-childrens" style={{display:"flex", flexDirection:"column"}}>
        {isExpanded &&
          children.map((item, index) => {
            if (typeof item == "string") {
              return (
                <div key={item} className="list-children">
                  {item}
                </div>
              );
            }
            if (typeof item == "object") {
              return (
                <AlgorithmItem
                  parent={item.parent}
                  children={item.children}
                  key={index}
                />
              );
            }
          })}
      </div>
    </>
  );
}

export default function AlgorithmList() {
  const algorithms = [
    {
      parent: "Pathfinding algorithms",
      children: [
        {
          parent: "Unweighted Graph",
          children: ["Breadth-First Search", "Depth-First Search"],
        },
        {
          parent: "Weighted Graph",
          children: [
            "Dijkstra's Algorithm",
            "A*",
            "Bellman-Ford Algorithm",
            "Floyd-Warshall Algorithm",
            "Johnson's Algorithm",
          ],
        },
      ],
    },
    {
      parent : "Graph Algorithms",
      children : [
        {
          parent : "Traversal",
          children : ["Breadth-First Search", "Depth-First Search"]
        },
        {
          parent : "Shortest Path",
          children : ["Dijkstra's Algorithm", "A* Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm" ]
        }
      ]
    }
  ];

  return (
    <>
      <div className="algorithm-list-container">
        <div className="algorithm-list-wrapper">
          {algorithms.map((algorithm: any, index: number) => (
            <AlgorithmItem
              parent={algorithm.parent}
              children={algorithm.children}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
