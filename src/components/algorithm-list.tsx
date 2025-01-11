"use client";
import { log } from "console";
import { useState } from "react";

function AlgorithmItem({
  parent,
  subParent,
  children,
}: {
  parent: string;
  subParent : boolean;
  children: any[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleListParentClick = (parent : string, subParent : boolean) => {
    // subParent ? null : console.log(parent); 
    setIsExpanded(!isExpanded);
  };
  const handleListChildClick = (item: string) => {
    // console.log(item);
  };
  return (
    <>
      <button className="list-parent" onClick={()=>handleListParentClick(parent,subParent)}>
        {parent}
        {isExpanded ? "▲" : "▼"}
      </button>
      <div
        className="list-childrens"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {isExpanded &&
          children.map((item, index) => {
            if (typeof item == "string") {
              return (
                <button
                  key={item}
                  className="list-children"
                  onClick={() => handleListChildClick(item)}
                >
                  {item}
                </button>
              );
            }
            if (typeof item == "object") {
              return (
                <AlgorithmItem
                  parent={item.parent}
                  subParent={true}
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
      parent: "Graph Algorithms",
      children: [
        {
          parent: "Traversal",
          children: ["Breadth-First Search", "Depth-First Search"],
        },
        {
          parent: "Shortest Path",
          children: [
            "Dijkstra's Algorithm",
            "A* Algorithm",
            "Bellman-Ford Algorithm",
            "Floyd-Warshall Algorithm",
          ],
        },
        {
          parent: "Minimum Spanning Tree",
          children: ["Prim's Algorithm", "Kruskal's Algorithm"],
        },
        {
          parent: "Connected Components",
          children: [
            "Tarjan's Algorithm",
            "Kosaraju's Algorithm",
            "Union-Find (Disjoint Set Union)",
          ],
        },
        {
          parent: "Maximum Flow",
          children: [
            "Ford-Fulkerson",
            "Edmonds-karp Algorithm",
            "Dinic's Algorithm",
          ],
        },
        {
          parent: "Topological Sorting",
          children: ["Kahn's Algorithm", "DFS-based Topological Sort"],
        },
      ],
    },
    {
      parent: "Sorting Algorithms",
      children: [
        {
          parent: "Comparison-based",
          children: [
            "Bubble Sort",
            "Selection Sort",
            "Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
            "Shell Sort",
          ],
        },
        {
          parent: "Non-comparison-based",
          children: ["Counting Sort", "Radix Sort", "Bucket Sort"],
        },
        {
          parent: "Hybrid Sorting Algorithms",
          children: [
            "TimSort (Python, Java standard sorting)",
            "IntroSort(C++ standard sorting)",
          ],
        },
      ],
    },
    {
      parent: "Divide and Conquer Algorithms",
      children: [
        "Binary Search",
        "Merge Sort",
        "Quick Sort",
        "Closest Pair of Points",
        "Karatsuba Multiplication",
        "Strassen's Matrix Multiplication",
      ],
    },
    {
      parent: "Dynamic Programming Algorithms",
      children: [
        {
          parent: "Optimization Problems",
          children: [
            "0/1 Knapsack Problem",
            "Rod Cutting Problem",
            "Matrix Chain Multiplication",
            "Coin Change Problem",
            "Subset Sum Problem",
          ],
        },
        {
          parent: "Sequence Alignment",
          children: [
            "Longest Common Subsequence (LCS)",
            "Longest Increasing Subsequence (LIS)",
            "Edit Distance (Levenshtein Distance)",
          ],
        },
        {
          parent: "Pathfinding",
          children: ["Floyd-Warshall Algorithm", "Bellman-Ford Algorithm"],
        },
      ],
    },
    {
      parent: "Greedy Algorithms",
      children: [
        {
          parent: "Optimization Problems",
          children: [
            "Activity Selection Problem",
            "Job Scheduling Problem",
            "Fraction Knapack Problem",
          ],
        },
        {
          parent: "Encoding",
          children: ["Huffman Coding"],
        },
        {
          parent: "Graph Problems",
          children: [
            "Prim's Algorithm (minimum spanning tree)",
            "Kruskal's Algorithm (minimum spanning tree)",
          ],
        },
      ],
    },
    {
      parent: "Backtracing Algorithms",
      children: [
        {
          parent: "Constraint Satisfaction",
          children: ["N-Queens Problem", "Suoku Solver", "Word Search"],
        },
        {
          parent: "Pathfinding",
          children: ["Rat in a Maze", "knight's Tour Problem"],
        },
        {
          parent: "Graph Problems",
          children: ["Hamiltonian Path Problem", "Coloring Problem"],
        },
      ],
    },
    {
      parent: "String Algorithms",
      children: [
        {
          parent: "Pattern Matching",
          children: [
            "Knuth-Morris-Pratt Algorithm",
            "Rabin-karp Algorithm",
            "Boyer-Moore Algorithm",
            "Z Algorithm",
          ],
        },
        {
          parent: "Substring Problems",
          children: [
            "Longest Palindromic Substring",
            "Suffix Array Construction",
            "Suffix Tree Construction",
          ],
        },
        {
          parent: "Multi-Pattern Matching",
          children: ["Aho=Corasick Algorithm"],
        },
      ],
    },
    {
      parent: "Computational Geometry Algorithms",
      children: [
        {
          parent: "Convex Hull",
          children: ["Graham's Scan", "Jarvis March"],
        },
        {
          parent: "Point Problems",
          children: ["Closest Pair of Points", "Linr Segment Intersection"],
        },
        {
          parent: "Diagram Construction",
          children: ["Voronoi Diagram", "Delanuay Triangulation"],
        },
        {
          parent: "Sweep Line Algorithms",
          children: ["Bentley-Ottman Algorithm (for insertion Detection)"],
        },
      ],
    },
    {
      parent: "Numerical Algorithms",
      children: [
        {
          parent: "Number Theory",
          children: [
            "Euclidean Algorithm (GCD)",
            "Sieve of Eratosthenes (Prime Numbers)",
            "Fast Modular Ecponentiation",
          ],
        },
        {
          parent: "Matrix Operations",
          children: [
            "Gaussian Elimination",
            "LU Decomposition",
            "Power of a Matrix",
          ],
        },
        {
          parent: "Approximation",
          children: [
            "Newton's Method (root approximation)",
            "Monte Carlo Integration",
          ],
        },
      ],
    },
    {
      parent: "Miscellaneous Algorithms",
      children: [
        {
          parent: "Data structures",
          children: [
            "Union-Find (Disjoint Set Union)",
            "Feneick Tree (Binary Index Tree)",
            "Segment Tree",
            "Trie (Prefix Tree)",
          ],
        },
        {
          parent: "Randomized Algorithms",
          children: ["Reservoir Sampling", "Randomized QuickSort"],
        },
        {
          parent: "Hashing",
          children: ["Bloom Filters", "Consistent Hashing"],
        },
        {
          parent: "Ranking and Web Algorithms",
          children: [
            "PageRank Algorithm",
            "HITS Algorithm (Hyperlink-Induced Topic Search)",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="algorithm-list-container">
        <div className="algorithm-list-wrapper">
          {algorithms.map((algorithm: any, index: number) => (
            <AlgorithmItem
              parent={algorithm.parent}
              subParent={false}
              children={algorithm.children}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
