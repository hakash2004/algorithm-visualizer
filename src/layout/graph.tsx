"use client";
import ArrayBlock from "@/components/arrayBlock";
import LogBlock from "@/components/logBlock";

import "./layout.scss"

interface GraphLayoutProps {
  arr: number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  size: number;
  log: string[];
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function GraphLayout({
  arr,
  setArr,
  size,
  log,
  setLog,
}: GraphLayoutProps) {
  return (
    <>
      <div className="graph-layout-container layout-container">
        <div className="graph-layout-wrapper layout-wrapper">
          <ArrayBlock size={size} arr={arr} setArr={setArr} />{" "}
          <LogBlock log={log} setLog={setLog} />
        </div>
      </div>
    </>
  );
}
