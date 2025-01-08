"use client";
import { useState } from "react";
import AlgorithmList from "@/components/algorithm-list";
import ArrayBlock from "@/components/array";
import "./global.scss";
import ChartBlock from "@/components/chart";
import LogBlock from "@/components/log";

export default function Home() {
  const [size, setSize] = useState<number>(30);
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
          <div className="header"></div>
          <div className="algorithm-list">
            <AlgorithmList />
          </div>
          <div className="algorithm-preview"></div>
          <div className="visualization-container">
            <ChartBlock arr={arr} setArr={setArr} />
            <ArrayBlock size={size} arr={arr} setArr={setArr} />
            <LogBlock log={log} setLog={setLog} />
          </div>
          <div className="codeBlock"></div>
        </div>
      </div>
    </>
  );
}
