import ArrayBlock from "@/components/arrayBlock";
import LogBlock from "@/components/logBlock";
import ChartBlock from "@/components/chartBlock";

// css
import "./layout.scss";


interface SortingLayoutProps {
  arr: number[];
  setArr: React.Dispatch<React.SetStateAction<number[]>>;
  size: number;
  log: string[];
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SortingLayout({
  arr,
  setArr,
  size,
  log,
  setLog,
}: SortingLayoutProps) {
  return (
    <>
      <div className="sorting-layout-container layout-container">
        <div className="sorting-layout-wrapper layout-wrapper">
          <ChartBlock arr={arr} setArr={setArr} />
          <ArrayBlock size={size} arr={arr} setArr={setArr} />
          <LogBlock log={log} setLog={setLog} />
        </div>
      </div>
    </>
  );
}
