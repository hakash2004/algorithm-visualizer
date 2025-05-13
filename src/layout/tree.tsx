"use client";
import ArrayBlock from "@/components/arrayBlock";
import LogBlock from "@/components/logBlock";

import "./layout.scss"
import TreeBlock from "@/components/treeBlock";
import { useEffect, useState } from "react";
import { Operations, Tree } from "@/helper/tree";
interface TreeLayoutProps {
  arr: number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  size: number;
  log: string[];
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TreeLayout({
  arr,
  setArr,
  size,
  log,
  setLog,
}: TreeLayoutProps) {
  
  const [root, setRoot] = useState<Tree | null>(null);

  useEffect(()=>{
            
    const newRoot = new Tree(5);
    Operations.add(newRoot, 6);
    Operations.add(newRoot, 69);
    Operations.add(newRoot, 77);
    Operations.add(newRoot, 71);
    Operations.add(newRoot, 72);
    Operations.add(newRoot, 73);
    Operations.levelOrder(newRoot);

    setRoot(newRoot)
    
  },[])


  return (
    <>
      <div className="Tree-layout-container layout-container">
        <div className="Tree-layout-wrapper layout-wrapper">
          {root && <TreeBlock root={root}/>}
          <ArrayBlock size={size} arr={arr} setArr={setArr} />
          <LogBlock log={log} setLog={setLog} />
        </div>
      </div>
    </>
  );
}
