"use client";
import { useState } from "react";
import AlgorithmList from "@/components/algorithm-list";
import ArrayBlock from "@/components/arrayBlock";
import "./global.scss";
import ChartBlock from "@/components/chartBlock";
import LogBlock from "@/components/logBlock";
import SortingLayout from "@/layout/sorting";
import Header from "@/components/header";
import GraphLayout from "@/layout/graph";
import TreeLayout from "@/layout/tree";

export default function Home() {
  const [size, setSize] = useState<number>(20);
  const [arr, setArr] = useState<number[]>(
    Array.from({ length: size }, (_, index) => index + 1)
  );
  const [log, setLog] = useState<string[]>([
    "iguyuhv",
    "guhguh",
    "huvuhvu",
  ]);
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-wrapper">
          <div className="header">
            <Header />
          </div>
          <div className="algorithm-list">
            <AlgorithmList />
          </div>
          <div className="algorithm-preview"></div>
          <div className="visualization-container">
            {/* <SortingLayout arr={arr} setArr={setArr} size={size} log={log} setLog={setLog} />  */}
            {/* <GraphLayout arr={arr} setArr={setArr} size={size} log={log} setLog={setLog} />  */}
            <TreeLayout arr={arr} setArr={setArr} size={size} log={log} setLog={setLog} /> 
          </div>
          <div className="codeBlock"></div>
        </div>
      </div>
    </>
  );
}
